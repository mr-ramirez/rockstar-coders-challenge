var dotenv = require('dotenv').config({ path: __dirname + '/.env' });
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var webpack = require('webpack');

var htmlPlugin = new HtmlWebpackPlugin({
  template: "./src/index.html",
  filename: "./index.html",
});

const config = {
  entry: './src/index.jsx',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
        }],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    htmlPlugin,
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.parsed),
    })
  ],
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
      constants: path.resolve(__dirname, 'src/constants'),
      containers: path.resolve(__dirname, 'src/containers/'),
      helpers: path.resolve(__dirname, 'src/helpers'),
      services: path.resolve(__dirname, 'src/services/'),
    },
  },
};

module.exports = config;
