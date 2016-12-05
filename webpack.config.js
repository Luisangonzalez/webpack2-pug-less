const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

    entry: './app/index.js',
    output: {
        filename: 'bundle.js',
        path: './dist'
    },
    module: {
        loaders: [
					{test: /\.less$/, loader: 'style-loader!css-loader!less-loader'}
					]
    }
}
