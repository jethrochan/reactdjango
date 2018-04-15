var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')

module.exports = {
    context: __dirname,

    entry: {index: './assets/js/index.js'},

    output: {
        path: path.resolve('./assets/bundles/'),
	      filename: "index-build.js",
    },

    plugins: [
        new BundleTracker({filename: './webpack-stats.json'}),

        //makes jQuery available in every module
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        })
    ],

    module: {
        rules: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/, query: { presets:['react'] } },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/, query: { presets:['react'] } },
            { test: /\.scss$/, loaders: [ 'style', 'css', 'sass' ] },
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.(png|jpg|gif)$/, use: [
              {
                loader: 'url-loader',
                options: { limit: 8192 }
              }]
            },
            { test: /\.(png|jpg|gif)$/, use: [
              {
                loader: 'file-loader',
                options: {}
              }]
            },
          ],
    },

}
