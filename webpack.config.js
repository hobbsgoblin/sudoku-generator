module.exports = {
  entry: './src/sudoku-generator.js',
  output: {
    filename: 'sudoku-generator.js',
    library: "sudoku-generator",
    libraryTarget: "commonjs2",
  },
  module: {
    rules: [
      {
        test: /test\.js$/,
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
};
