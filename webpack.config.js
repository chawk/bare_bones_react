const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCss = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry: {
        app: './ui/index.js'
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: 'styles',
                    test: /\.css$/,
                    chunks: 'all',
                    enforce: true
                }
            }
        },
        minimizer: [
            new TerserPlugin({
                parallel: true,
                terserOptions: {
                    ecma: 6
                }
            }),
            new OptimizeCss({
                cssProcessorOptions: { 
                    discardComments: true
                }
            })
        ]
    },
    devServer: {
        hot: true,
        compress: true,
        contentBase: path.join(__dirname, 'dist'),
        open: 'Chrome'
    },
    watch: true,
    devtool: 'source-map',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist/js')
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new MiniCssExtractPlugin({
            filename: '../css/style.css',
            chunkFilename: "[name].css"
        }),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader"
                    },
                    "sass-loader"
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: [
            '.js',
            '.scss'
        ]
    }
}