module.exports = {
    // Entry point file
    entry: './public',
    // Compile bundle into builds directory under name bundle.js
    output: {
        path: 'builds',
        filename: 'bundle.js'
    },
    module: {
        loaders: [

            {
                test: /\.html/,
                loader: 'html'
            }

        ]
    }
};
