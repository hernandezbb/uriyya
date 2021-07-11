module.exports = {
  entry: './src/main-process/index.ts',
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json'],
  },
  plugins: [],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'babel-loader',
        exclude: /(node_modules|\.webpack)/,
      },
    ],
  },
};
