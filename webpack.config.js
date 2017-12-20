const path = require('path');

module.exports = {
  entry: {
    'dist/maxlength-contenteditable': path.join(__dirname, '/src/maxlength-content-editable.js'),
  },
  output: {
    path: path.resolve(__dirname),
    filename: '[name].js',
    library: 'maxlengthContentEditable',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: [
          ['env', {
            targets: {
              browsers: ['last 2 versions', 'ie >= 7'],
            },
          }],
        ],
      },
    }],
  },
};
