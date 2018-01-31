const path = require('path');
console.log('Extending webpack');
module.exports = {
    module: {
        rules: [
            {
                test: /\.sass$/,
                loaders: ["style-loader", "css-loader", "sass-loader"],
                include: path.resolve(__dirname, '../')
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                loaders: ["file-loader"]
            }
        ]
    }
};