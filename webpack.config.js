const ExtractTextPlugin = require('extract-text-webpack-plugin');

let extractLESS = new ExtractTextPlugin('css/[name].css');
let extractPUG = new ExtractTextPlugin('html/[name].html');

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
        }, {
            test: /\.pug$/i,
            loader: extractPUG.extract(['pug-html-loader'])
        }]
    },
    plugins: [
        extractLESS,
        extractPUG
    ]
}
