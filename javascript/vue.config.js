const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    configureWebpack: {
        resolve: {
            modules: ['node_modules']
        },
        amd: false,
        plugins: [
            new HtmlWebpackPlugin({
                title: 'STARFACE Rest API Demo',
                minify: false,
                template: "public/index.html"
            })
        ]
    },
    devServer: {
        headers: {
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Origin': '*'
        },
    },
    outputDir: 'starface-rest-demo',
    parallel: false,
    publicPath: process.env.NODE_ENV === 'production' ? '/starface-rest-demo/' : '/'
};
