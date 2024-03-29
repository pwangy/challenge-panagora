const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = (_, argv) => {
  const isDev = argv.mode === 'development'

  const plugins = [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: false,
    }),
  ]

  if (!isDev) {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
        chunkFilename: '[id].[chunkhash].css',
      }),

      new CopyPlugin({
        patterns: [
          { from: './src/images', to: './images' },
          { from: './src/data', to: './data' },
          { from: './src/static', to: './static' },
        ],
      })
    )
  }

  return {
    plugins,
    mode: argv.mode,
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].[contenthash].js',
      chunkFilename: '[id].[chunkhash].js',
      publicPath: '/',
    },
    devServer: {
      contentBase: path.join(__dirname, 'src'),
      port: 3000,
      hot: true,
      historyApiFallback: true,
    },
    module: {
      rules: [
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
        {
          test: /\.(png|jp(e*)g|svg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'images/[hash]-[name].[ext]',
              },
            },
          ],
        },  
      ],
    },
  }
}