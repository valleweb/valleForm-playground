const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {

  entry: './src/assets/scripts/index.js',

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'eslint-loader',
          options: {
            emitWarning: true,
          }
        },
      }
    ]
  },
    
  plugins: [
    new webpack.EnvironmentPlugin({ NODE_ENV: null }),
    new CopyWebpackPlugin([
      { from: './src/index.html', to: './' },
      { from: './src/serviceWorkers.js', to: './' }
    ])
  ],

  output: {
    path: path.resolve(__dirname, '../dist/'),
    filename: 'bundle.js'
  }

}