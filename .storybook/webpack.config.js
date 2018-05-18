const path = require('path');
module.exports = {
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