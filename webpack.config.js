const webpack = require('webpack'); //to access built-in plugins
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractLESS = new ExtractTextPlugin('[name].css');
const extractPUG = new ExtractTextPlugin('index.html');
const path = require('path');

const config = {
    entry: './app/entry.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader'
            },
            {
                test: /\.less$/i,
                loader: extractLESS.extract(['css-loader', 'less-loader'])
            }, {
                test: /\.pug$/i,
                loader: extractPUG.extract(['pug-html-loader'])
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        extractLESS,
        extractPUG
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
        watchContentBase: true
    }

};

module.exports = config;
