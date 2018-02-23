const path = require('path');
console.log('Extending webpack');
module.exports = {
    module: {
        rules: [
            {
                test: /\.(sass|css)$/,
                loaders: ["style-loader", "css-loader", "sass-loader"],
                include: [
                    path.resolve(__dirname, '../'),
                    require('bourbon').includePaths
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                loaders: ["file-loader"]
            }
        ]
    }
};