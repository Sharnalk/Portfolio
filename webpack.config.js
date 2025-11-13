CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
    mode: 'production',

    plugins:[
        new CompressionPlugin({
            algorithm: "gzip",
            test: /\.(ts|css|html|svg|tsx|json)$/,
            verbose:true,
            threshold: 0,
        }),
    ]
}