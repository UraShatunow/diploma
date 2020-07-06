const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); 
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  entry: { 
    main: './src/index.js',
    about: './src/about/index.js',
    stats: './src/stats/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|ico|svg)$/,
        use: [
            'file-loader?name=./img/[name].[ext]', // указали папку, куда складывать изображения
            {
                loader: 'image-webpack-loader',
                options: {}
            },
            ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader?name=./vendor/[name].[ext]'
      },
      {
        test: /\.css$/,
        use:  [(isDev ? 'style-loader' : MiniCssExtractPlugin.loader), 'css-loader', 'postcss-loader'] // добавили минификацию CSS
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new MiniCssExtractPlugin({ 
      filename: 'style.[contenthash].css',
    }),
    new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessor: require('cssnano'),
        cssProcessorPluginOptions: {
                preset: ['default'],
        },
        canPrint: true
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['main']
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/about/about.html',
      filename: 'about.html',
      chunks: ['about']
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/stats/stats.html',
      filename: 'stats.html',
      chunks: ['stats']
    }),
    new WebpackMd5Hash()
  ]
};