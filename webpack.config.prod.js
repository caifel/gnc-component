const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const HtmlWebPackPlugin = require('html-webpack-plugin'); // Use it in normal projects, same as in webpack.config.js file mode for development
const path = require('path');

const INPUT_PATH = path.resolve(__dirname, 'src/target');
const OUTPUT_PATH = path.resolve(__dirname, 'lib');

module.exports = {
   mode: 'production',
   entry: `${INPUT_PATH}/index.js`,
   output: {
      path: OUTPUT_PATH,
      filename: 'index.js',
      libraryTarget: 'commonjs2' // THIS IS THE MOST IMPORTANT LINE! :mindblow: I wasted more than 2 days until realize this was the line most important in all this guide.
   },
   module: {
      rules: [
         {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader', 'eslint-loader']
         },
         {
            test: /\.(s*)css$/,
            use: ExtractTextPlugin.extract({
               fallback: 'style-loader',
               use: ['css-loader', 'sass-loader']
            })
         },
         {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            use: {
               loader: 'url-loader',
               options: {
                  limit: 10000,
                  name: 'static/media/[name].[hash:8].[ext]'
               }
            }
         }
      ]
   },
   plugins: [
      new CleanWebpackPlugin([`${OUTPUT_PATH}/static`]),
      new ExtractTextPlugin({
         filename: 'style.css'
      })
   ],
   externals: ['react', 'react-dom'] // this line is just to use the React dependency of our parent-testing-project instead of using our own React.
};
