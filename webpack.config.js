const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const isDevelopment = process.env.NODE_ENV !== 'production'; // 根據環境區分

module.exports = {
  entry: './src/index.js', // 主入口文件
  output: {
    path: path.resolve(__dirname, 'dist'), // 打包後文件的輸出路徑
    filename: 'bundle.js', // 打包後 JS 文件名
    clean:true,
    publicPath:'/'
  },
  mode: isDevelopment ? 'development' : 'production',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // 處理 JS 和 JSX 文件
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/, // 處理 CSS 文件
        use: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader, 
          'css-loader', 
          'postcss-loader',
        ],
      },
      {
        test: /\.(scss|sass)$/, // 處理 SCSS/SASS 文件
        use: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // 自動解析文件擴展名
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // 指定模板文件位置
    }),
    isDevelopment && new ReactRefreshWebpackPlugin(), // 開發模式才使用 React 快速刷新
    !isDevelopment &&
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
      }),
  ].filter(Boolean), // 避免插件為假值
  devServer: {
    static: path.join(__dirname, 'dist'), // 設置靜態資源目錄
    compress: true,
    port: 3000,
    hot: true, // 開啟 HMR
    open: true,
    historyApiFallback: true,
  },
};
