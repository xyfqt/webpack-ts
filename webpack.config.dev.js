const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: "./src/main.ts",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "main.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                exclude:[
                    path.resolve(__dirname,'src/')
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', {
                    loader:'css-loader',
                    options:{
                        modules:true
                    }
                }],
                include:[
                    path.resolve(__dirname,'src/')
                ]
            },
            {
                test: /\.ts$/,
                use: ['ts-loader'],
                exclude:/node_modules/

            }
        ]
    },
    resolve:{
        "extensions" : ['.ts','.js','.json']
    },     
    devServer:{
        contentBase:"/dist",
        open:true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin(),
    ],
    mode: "development"
}