const path = require('path');
module.exports = {
    externals: {
        'jsdom': 'window',
        'cheerio': 'window',
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': 'window',
        'react/addons': true,
    },
    module: {
        rules: [
            {
                test: /\.(css)$/,
                loaders: ["style-loader", "css-loader"],
                include: [
                    path.resolve(__dirname, '../')
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                loaders: ["file-loader"]
            }
        ]
    }
};