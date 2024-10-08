const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // 主入口文件
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js', // 輸出文件名
  },
  mode: 'development', // 開發模式
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
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // 自動解析文件擴展名
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // 指定模板文件
    }),
  ],
  devServer: {
    static: path.join(__dirname, 'dist'), // 使用 static 代替 contentBase
    compress: true,
    port: 3000,
    hot: true, // 開啟熱模塊替換（HMR）
    open: true, // 自動打開瀏覽器
  },
  
};
