const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const { mainModule } = require('process');

module.exports = {
  mode: "production",
  target:"web",
  node: {
    __dirname:false
  },
  // externals: [nodeExternals()], // removes node_modules from your final bundle
  entry: './dist/index.js', // make sure this matches the main root of your code
  output: {
    path: path.join(__dirname, 'dist','web.minified'), // this can be any path and directory you want
    filename: 'itunesSearch.min.js',
    library: 'iTunesSearch',
    libraryTarget: 'window',
  },
  node: {
    __dirname: false
  },
  optimization: {
    minimizer: [new TerserPlugin()], // enabling this reduces file size and readability
  },
  module: {
    rules: [
      {
        test: /\.node$/,
        loader: "node-loader",
      },
    ],
  },
};
