/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
let mix = require('laravel-mix');

mix.webpackConfig({
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ],
        rules: [
            {
                use: {
                    loader: 'babel-loader',
                    options: {presets: ['es2015']}
                },
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    }
});

mix.js([
    'resources/js/app.js',
    'resources/js/app.constants.js',
    // 'resources/js/pages/admin.users.js'
], 'public/js').version()
    .sass('resources/sass/app.scss', 'public/css').version();
//
mix.js('resources/js/pages/admin.users.js', 'public/js')
    .extract(['vue']).version();