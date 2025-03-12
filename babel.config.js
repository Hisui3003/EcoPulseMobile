module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['@babel/plugin-transform-class-properties', { loose: true }],
      ['@babel/plugin-transform-private-methods', { loose: true }],
      ['@babel/plugin-transform-private-property-in-object', { loose: true }],
      // Module resolver for absolute imports - updated paths
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
          alias: {
            '@components': './src/components',
            '@hooks': './src/hooks',
            '@screens': './src/screens',
            '@store': './src/store',
            '@utils': './src/utils',
            '@assets': './src/assets',
            '@shared': './src/shared',
            '@api': './src/api'
          },
        },
      ],
    ]
  };
};