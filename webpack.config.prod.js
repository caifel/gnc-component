const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

const INPUT_PATH = path.resolve(__dirname, "src/target");
const OUTPUT_PATH = path.resolve(__dirname, "lib");

module.exports = {
    entry: INPUT_PATH + '/index.js',
    output: {
        path: OUTPUT_PATH,
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(s*)css$/,                
                use: ExtractTextPlugin.extract({ 
                    fallback:'style-loader',
                    use: [
                        'css-loader',
                        'sass-loader'
                    ],
                })
            },
            {
                test: [
                    /\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/
                ],
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: 'static/media/[name].[hash:8].[ext]',
                    }
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin([
            OUTPUT_PATH + '/static'
        ]),
        new ExtractTextPlugin({
            
            filename: 'style.css'
        })
    ]
};