const path = require('path');
 const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
  mode: 'development',
   entry: {
     index: './index.js',
    //  print: './print.js',
   },
   externals: {
    express: 'express',
  },
   plugins: [
     new HtmlWebpackPlugin({
      title: 'Development',
     }),
   ],
   mode: 'development',
   target: 'node',

   output: {
     filename: '[name].js',
     path: path.resolve(__dirname, 'dev-build'),
     publicPath : "/",
     clean: true,
   },
   module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  }
  
 };

