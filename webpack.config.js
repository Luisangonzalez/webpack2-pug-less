const ExtractTextPlugin = require('extract-text-webpack-plugin');

let extractLESS = new ExtractTextPlugin('css/[name].css');

module.exports = {

    entry: './app/index.js',
    output: {
        filename: 'bundle.js',
        path: './dist'
    },
    module: {
        loaders: [{
            test: /\.less$/i,
            loader: extractLESS.extract(['css-loader', 'less-loader'])
        }]
    },
    plugins: [
        extractLESS
    ]
}
