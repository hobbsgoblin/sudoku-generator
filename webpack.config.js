module.exports = {
  entry: './src/generator.js',
  devServer: {
    contentBase: './dist'
  },
  output: {
    filename: 'generator.js',
    library: "generator"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  mode: 'development',
  devtool: 'source-map'
};
