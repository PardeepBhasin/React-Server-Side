const path = require('path');
const merge = require('webpack-merge');
const  baseConfig = require('./webpack.base.js');
const config = {
  //Tell webpack the root file of our
  //Server application
  entry : './src/client/client.js',
  devtool: 'cheap-module-eval-source-map',
  debug: true,

  // Tell webpack where to put the output file
  // that is generated
  output: {
    filename: 'client.bundle.js',
    path: path.resolve(__dirname, 'public')
  }
}

module.exports = merge(baseConfig, config);
