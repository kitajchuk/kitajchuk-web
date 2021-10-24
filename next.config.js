const { withLayer0, withServiceWorker } = require('@layer0/next/config')

module.exports = withLayer0(
  withServiceWorker({
    trailingSlash: true,
    webpack: (config, { dev, isServer }) => {
      // Replace React with Preact only for client
      if (!isServer && !dev) {
        Object.assign(config.resolve.alias, {
          react: 'preact/compat',
          'react-dom/test-utils': 'preact/test-utils',
          'react-dom': 'preact/compat',
        });
      }
    
      return config;
    },
    layer0SourceMaps: true,
  })
);
