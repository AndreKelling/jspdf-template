const path = require('path');
const env = process.env.NODE_ENV;

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    mode: env || 'development',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true,
        stats: {
            children: false
        }
    }
};