const path = require('path');
// const random = require('random')

module.exports = {
    entry: './index.js',
    output: {
        filename: 'index.bundle.js',
        path: path.resolve(__dirname, './'),
        library: 'EntryPoint'
    }
};