const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

pages = ["index","create-order", "order-history"]

module.exports = {
  entry: pages.reduce((config, page) => {
    config[page] = `./src/scripts/${page}.js`;
    return config;
  }, {}),
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    contentBase: './dist'
  },
  stats: {
    warnings: false
  },
  devtool: 'eval-source-map',
  plugins: [].concat(
    pages.map((page) =>
      new HtmlWebpackPlugin({
        inject: true,
        template: `./src/${page}.html`,
        filename: `${page}.html`,
        chunks: [page],
        inject: 'body'

      })
    )
  ),
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};