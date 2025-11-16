import sharp from 'sharp';
import { readdir, stat, mkdir } from 'fs/promises';
import { join, dirname, extname, basename } from 'path';
import { fileURLToPath } from 'url';
import { existsSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const IMAGES_DIR = join(__dirname, '../public/images');
const QUALITY = 85; // Qualité WebP (0-100)
const SKIP_EXISTING = true; // Ne pas reconvertir si le WebP existe déjà

// Formats à convertir
const CONVERT_FORMATS = ['.jpg', '.jpeg', '.png'];
// Formats à ignorer
const SKIP_FORMATS = ['.webp', '.svg', '.pdf', '.html'];

/**
 * Convertit une image en WebP
 */
async function convertToWebP(inputPath, outputPath) {
  try {
    // Vérifier si le fichier WebP existe déjà
    if (SKIP_EXISTING && existsSync(outputPath)) {
      console.log(`⏭️  Déjà converti: ${inputPath}`);
      return true;
    }

    // Créer le dossier de destination si nécessaire
    const outputDir = dirname(outputPath);
    if (!existsSync(outputDir)) {
      await mkdir(outputDir, { recursive: true });
    }

    // Convertir avec Sharp
    await sharp(inputPath)
      .webp({ quality: QUALITY })
      .toFile(outputPath);

    // Obtenir les tailles pour affichage
    const inputStats = await stat(inputPath);
    const outputStats = await stat(outputPath);
    const reduction = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);

    console.log(`✅ Converti: ${basename(inputPath)} → ${basename(outputPath)} (${reduction}% de réduction)`);
    return true;
  } catch (error) {
    console.error(`❌ Erreur lors de la conversion de ${inputPath}:`, error.message);
    return false;
  }
}

/**
 * Parcourt récursivement un dossier et convertit toutes les images
 */
async function processDirectory(dirPath, relativePath = '') {
  const entries = await readdir(dirPath, { withFileTypes: true });
  const results = { converted: 0, skipped: 0, errors: 0 };

  for (const entry of entries) {
    const fullPath = join(dirPath, entry.name);
    const relativeFilePath = join(relativePath, entry.name);

    if (entry.isDirectory()) {
      // Récursion pour les sous-dossiers
      const subResults = await processDirectory(fullPath, relativeFilePath);
      results.converted += subResults.converted;
      results.skipped += subResults.skipped;
      results.errors += subResults.errors;
    } else if (entry.isFile()) {
      const ext = extname(entry.name).toLowerCase();

      // Ignorer les formats non convertibles
      if (SKIP_FORMATS.includes(ext)) {
        continue;
      }

      // Convertir si c'est un format à convertir
      if (CONVERT_FORMATS.includes(ext)) {
        const outputPath = fullPath.replace(ext, '.webp');
        const success = await convertToWebP(fullPath, outputPath);

        if (success) {
          results.converted++;
        } else {
          results.errors++;
        }
      }
    }
  }

  return results;
}

/**
 * Point d'entrée principal
 */
async function main() {
  console.log('🚀 Début de la conversion WebP...\n');
  console.log(`📁 Dossier source: ${IMAGES_DIR}`);
  console.log(`🎨 Qualité: ${QUALITY}%\n`);

  try {
    const results = await processDirectory(IMAGES_DIR);

    console.log('\n📊 Résumé de la conversion:');
    console.log(`✅ Converties: ${results.converted}`);
    console.log(`⏭️  Ignorées: ${results.skipped}`);
    console.log(`❌ Erreurs: ${results.errors}`);
    console.log('\n✨ Conversion terminée!');
  } catch (error) {
    console.error('❌ Erreur fatale:', error);
    process.exit(1);
  }
}

main();

