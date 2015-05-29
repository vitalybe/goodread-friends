var webpack = require('webpack');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080', // WebpackDevServer host and port
        'webpack/hot/dev-server',
        "./src/app/index.js"
    ],
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { 
                test: /\.css$/, 
                loader: "style!css" 
            },
            {
                test: /\.less$/,
                loader: "style!css!less"
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel?{"plugins":["jsx-control-statements/babel"]}']
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.NormalModuleReplacementPlugin(/DataService(\.js)?$/, function(result) {
            result.request = result.request.replace(/(DataService)(\.js)?$/, '$1Fake$2');
        })
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};