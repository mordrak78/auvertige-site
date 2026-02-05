import React from 'react';

/**
 * Composant utilitaire pour afficher la palette de couleurs du design system
 * Utile pour le développement et la documentation
 */
export const ColorPalette = () => {
  const colorGroups = [
    {
      name: 'Sage (Principal)',
      colors: ['sage-50', 'sage-100', 'sage-200', 'sage-300', 'sage-400', 'sage-500', 'sage-600', 'sage-700', 'sage-800', 'sage-900']
    },
    {
      name: 'Cream (Secondaire)',
      colors: ['cream-50', 'cream-100', 'cream-200', 'cream-300', 'cream-400', 'cream-500', 'cream-600', 'cream-700', 'cream-800', 'cream-900']
    },
    {
      name: 'Poppy (Accent)',
      colors: ['poppy-50', 'poppy-100', 'poppy-200', 'poppy-300', 'poppy-400', 'poppy-500', 'poppy-600', 'poppy-700', 'poppy-800', 'poppy-900']
    },
    {
      name: 'Rose (Mariage)',
      colors: ['rose-50', 'rose-100', 'rose-200', 'rose-300', 'rose-400', 'rose-500', 'rose-600', 'rose-700', 'rose-800', 'rose-900']
    },
    {
      name: 'Violet (Anniversaire)',
      colors: ['violet-50', 'violet-100', 'violet-200', 'violet-300', 'violet-400', 'violet-500', 'violet-600', 'violet-700', 'violet-800', 'violet-900']
    },
    {
      name: 'Gold (Premium)',
      colors: ['gold-50', 'gold-100', 'gold-200', 'gold-300', 'gold-400', 'gold-500', 'gold-600', 'gold-700', 'gold-800', 'gold-900']
    }
  ];

  return (
    <div className="p-lg bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-dancing text-sage-800 mb-lg">Palette de couleurs au ver'tige</h2>
      <div className="space-y-lg">
        {colorGroups.map((group) => (
          <div key={group.name}>
            <h3 className="text-lg font-semibold text-sage-700 mb-md">{group.name}</h3>
            <div className="grid grid-cols-5 md:grid-cols-10 gap-sm">
              {group.colors.map((color) => (
                <div key={color} className="text-center">
                  <div className={`w-full h-16 bg-${color} rounded-md border border-gray-200 mb-xs`}></div>
                  <span className="text-xs text-gray-600 font-mono">{color}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/**
 * Composant utilitaire pour afficher les tokens de spacing
 */
export const SpacingTokens = () => {
  const spacingTokens = [
    { name: 'xs', value: '0.25rem', pixels: '4px' },
    { name: 'sm', value: '0.5rem', pixels: '8px' },
    { name: 'md', value: '1rem', pixels: '16px' },
    { name: 'lg', value: '1.5rem', pixels: '24px' },
    { name: 'xl', value: '2rem', pixels: '32px' },
    { name: '2xl', value: '3rem', pixels: '48px' },
    { name: '3xl', value: '4rem', pixels: '64px' },
    { name: '4xl', value: '6rem', pixels: '96px' },
    { name: '5xl', value: '8rem', pixels: '128px' }
  ];

  return (
    <div className="p-lg bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-dancing text-sage-800 mb-lg">Tokens de spacing</h2>
      <div className="space-y-md">
        {spacingTokens.map((token) => (
          <div key={token.name} className="flex items-center space-x-md">
            <div className={`w-16 bg-sage-200 rounded-sm`} style={{ height: token.value }}></div>
            <div>
              <span className="font-mono text-sm text-sage-700">{token.name}</span>
              <span className="text-xs text-gray-500 ml-sm">{token.value} ({token.pixels})</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/**
 * Composant utilitaire pour afficher les border-radius
 */
export const BorderRadiusTokens = () => {
  const radiusTokens = [
    { name: 'xs', value: '0.25rem', pixels: '4px' },
    { name: 'sm', value: '0.375rem', pixels: '6px' },
    { name: 'md', value: '0.5rem', pixels: '8px' },
    { name: 'lg', value: '0.75rem', pixels: '12px' },
    { name: 'xl', value: '1rem', pixels: '16px' },
    { name: '2xl', value: '1.5rem', pixels: '24px' },
    { name: '3xl', value: '2rem', pixels: '32px' },
    { name: 'full', value: '9999px', pixels: 'Cercle' }
  ];

  return (
    <div className="p-lg bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-dancing text-sage-800 mb-lg">Tokens de border-radius</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-md">
        {radiusTokens.map((token) => (
          <div key={token.name} className="text-center">
            <div
              className={`w-16 h-16 bg-sage-200 mx-auto mb-xs`}
              style={{ borderRadius: token.value }}
            ></div>
            <span className="font-mono text-sm text-sage-700">{token.name}</span>
            <span className="text-xs text-gray-500 block">{token.pixels}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

/**
 * Composant principal du design system
 */
export const DesignSystemShowcase = () => {
  // Ne s'affiche qu'en développement
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed top-20 right-4 w-96 max-h-[80vh] overflow-y-auto bg-white border border-gray-200 rounded-xl shadow-2xl z-50 p-lg">
      <div className="space-y-lg">
        <h1 className="text-2xl font-dancing text-sage-800">Design System au ver'tige</h1>
        <ColorPalette />
        <SpacingTokens />
        <BorderRadiusTokens />
      </div>
    </div>
  );
};

