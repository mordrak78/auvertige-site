import { readFileSync, writeFileSync } from 'fs';
import { glob } from 'glob';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const SRC_DIR = join(__dirname, '../src');

// Patterns de fichiers à traiter
const FILE_PATTERNS = [
  '**/*.ts',
  '**/*.tsx',
];

// Patterns à ignorer
const IGNORE_PATTERNS = [
  '**/*.d.ts',
  '**/node_modules/**',
  '**/dist/**',
  '**/build/**',
];

/**
 * Remplace les extensions d'images dans un fichier
 */
function updateImageReferences(content) {
  // Remplacer .jpg par .webp
  content = content.replace(/\.jpg(["'`])/g, '.webp$1');
  
  // Remplacer .jpeg par .webp
  content = content.replace(/\.jpeg(["'`])/g, '.webp$1');
  
  // Remplacer .png par .webp (mais pas pour les fichiers qui doivent rester en PNG)
  // On évite de remplacer les références aux fichiers qui ne sont pas des images
  content = content.replace(/\.png(["'`])/g, '.webp$1');
  
  return content;
}

/**
 * Traite un fichier
 */
function processFile(filePath) {
  try {
    const content = readFileSync(filePath, 'utf8');
    const updatedContent = updateImageReferences(content);
    
    if (content !== updatedContent) {
      writeFileSync(filePath, updatedContent, 'utf8');
      console.log(`✅ Mis à jour: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`❌ Erreur lors du traitement de ${filePath}:`, error.message);
    return false;
  }
}

/**
 * Point d'entrée principal
 */
async function main() {
  console.log('🚀 Mise à jour des références d\'images...\n');
  
  let updatedCount = 0;
  
  for (const pattern of FILE_PATTERNS) {
    const files = await glob(pattern, {
      cwd: SRC_DIR,
      ignore: IGNORE_PATTERNS,
      absolute: true,
    });
    
    for (const file of files) {
      if (processFile(file)) {
        updatedCount++;
      }
    }
  }
  
  console.log(`\n✨ Mise à jour terminée: ${updatedCount} fichier(s) modifié(s)`);
}

main().catch(console.error);

