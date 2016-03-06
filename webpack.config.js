var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // Entry point file
    entry: './public',
    // Compile bundle into builds directory under name bundle.js
    output: {
        path: 'builds',
        filename: 'bundle.js'
    },
    module: {
        // Define loaders
        loaders: [

            {
                test: /\.html/,
                loader: 'html'
            },
            {
                test: /\.css/,
                loaders: ['style', 'css']
            }

        ]
    },
    // Define dev server base
    devServer: {
        contentBase: './builds'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            inject: 'body'
        })
    ]
};
