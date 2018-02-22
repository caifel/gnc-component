const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: [
        './example/index.js'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        }, {
            test: /\.html$/,
            use: {
                loader: 'html-loader'
            }
        }]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './example/index.html',
            filename: './index.html'
        })
    ],
    devServer: {
        contentBase: './dist'
    }
}