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
                loader: 'css'
            }

        ]
    },
    devServer: {
        contentBase: './public'
    }
};
