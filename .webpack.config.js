const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const isProduction = process.env.NODE_ENV === 'production';

module.exports = [
    {
        entry: './src/main.ts',
        target: 'node',
        mode: isProduction ? 'production' : 'development',
        optimization: {
            minimize: isProduction ? true : false,
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                        },
                    },
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            extensions: ['.ts', '.js'],
            plugins: [new TsconfigPathsPlugin()],
        },
        output: {
            filename: 'bundle.cjs.js',
            path: path.resolve(__dirname, 'dist'),
            library: {
                type: 'commonjs2',
            },
        },
        plugins: [
            new CleanWebpackPlugin(),
            new ForkTsCheckerWebpackPlugin({
                async: false,
                typescript: {
                    diagnosticOptions: {
                        semantic: true,
                        syntactic: true,
                    },
                },
            }),
        ],
        devtool: isProduction ? false : 'source-map',
        // externals: [nodeExternals()],
    },
    {
        entry: './src/main.ts',
        target: 'web',
        mode: isProduction ? 'production' : 'development',
        optimization: {
            minimize: isProduction ? true : false,
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                        },
                    },
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            extensions: ['.ts', '.js'],
            plugins: [new TsconfigPathsPlugin()],
        },
        output: {
            filename: 'bundle.esm.js',
            path: path.resolve(__dirname, 'dist'),
            library: {
                type: 'module',
            },
        },
        plugins: [
            new CleanWebpackPlugin(),
            new ForkTsCheckerWebpackPlugin({
                async: false,
                typescript: {
                    diagnosticOptions: {
                        semantic: true,
                        syntactic: true,
                    },
                },
            }),
        ],
        devtool: isProduction ? false : 'source-map',
        experiments: {
            outputModule: true,
        },
        // externals: [nodeExternals()],
    },
];
