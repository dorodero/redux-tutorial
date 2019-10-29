const path = require('path'); // パスを指定するためにnode標準で搭載されるpathを読み込む
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {app: './src/index.tsx'},
    devtool: 'inline-source-map',    // デバッグできるように
    module: {
        rules: [
            {
                enforce: 'pre',
                loader: 'tslint-loader',
                test: /\.tsx?$/,
                exclude: [
                    /node_modules/
                ],
                options: {
                    emitErrors: true
                }
            },
            {
                loader: 'ts-loader',
                test: /\.tsx?$/,
                exclude: [
                    /node_modules/
                ],
                options: {
                    configFile: 'tsconfig.dev.json'
                }
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    output: {
        filename: 'static/js/bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new htmlWebpackPlugin({
            template: 'index.html'
        })
    ],
    devServer: {
        openPage: 'index.html',
        contentBase: path.resolve(__dirname, 'dist'),
        port: 3000,
        open: true,
        watchContentBase: true
    }
};