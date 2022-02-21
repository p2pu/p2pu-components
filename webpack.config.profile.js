const config = require('./webpack.config');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

config[0].plugins = config[0].plugins.concat([
  new BundleAnalyzerPlugin({ 
    analyzerPort: 5555,
    //analyzerHost: '0.0.0.0',
  })
]);

module.exports = config;
