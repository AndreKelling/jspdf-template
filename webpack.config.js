const path = require('path');
const env = process.env.NODE_ENV;

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'docs'),
        filename: 'bundle.js'
    },
    mode: env || 'development',
    devServer: {
        contentBase: path.join(__dirname, 'docs'),
        historyApiFallback: true,
        stats: {
            children: false
        }
    }
};
