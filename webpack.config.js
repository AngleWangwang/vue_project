'use strict';
//引入node配置模块
const htmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    //引入入口文件
    entry: "./src/js/main.js",
    output: {
        //输出的路径已经要写绝对路径
        path: path.resolve(__dirname, "./dist"),
        filename: "buld.js"
    },
    plugins: [
        new htmlWebpackPlugin({
            template: "./index.html",
            // template: 'html-withimg-loader!' + path.resolve(__dirname, "./src/index.html"),
            filename: "index.html",
            inject: "body"
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            // {
            //     test: /\.scss$/,
            //     use: [
            //         'style-loader',
            //         'css-loader',
            //         'sass-loader'
            //     ]
            // },
            {
                test: /\.tpl$/,
                use: [
                    'html-loader'
                ]
            },
            {
                test: /\.(jpg|pbg|gif|ttf)$/,
                use: [
                    { loader: "url-loader", options: { limit: 25000 } },
                    // 'image-webpack-loader'
                ]
            },
            {
                test: /\.vue$/,
                use: [
                    'vue-loader'
                ]
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        // 配置要解析的语法规范
                        presets: ['es2015'],
                        plugins: ['transform-runtime']
                    }
                },
                exclude: /(node_modules)|bower_components/
            }
        ]

    }


}