const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    devtool: 'inline-source-map',
    devServer: {
        inline: true,
        historyApiFallback: true
    },
    watch: true,
    resolve: {
        extensions: ['', '.js'],
    },
    module: {
        loaders: [{
            test: /.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015']
            }
        }]
    }
};
