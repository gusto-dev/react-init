const path = require('path');
const webpack = require('webpack');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
// 실서비스
// process.env.NODE_ENV = 'production';

module.exports = {
  name: 'service name',
  mode: 'development', // 실서비스: production
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  entry: { // 입력
    app: ['./index'],
  },
  module: { // 모듈을 적용
    rules: [{
      test: /\.jsx?/,
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env', {
            targets: {
              browsers: ['> 1% in KR'], // browserslist
            },
            debug: true,
          }],
          '@babel/preset-react'],
        plugins: [
          '@babel/plugin-proposal-class-properties',
          'react-refresh/babel',
        ],
      },
    }],
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({ debug: true }),
    new RefreshWebpackPlugin(),
  ],
  output: { // 출력
    filename: 'app.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
  },
  devServer: {
    publicPath: '/dist/',
    hot: true,
  },
};