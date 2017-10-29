const webpackConfig = require('./webpack.config')

module.exports = function (config) {
    config.set({
        browsers: ['Chrome', 'PhantomJS'],
        singleRun: true,
        frameworks: ['jasmine'],
        files: [
            'spec/**/*_spec.js',
            'spec/**/*_spec.jsx'
        ],
        preprocessors: {
            'spec/**/*_spec.js': ['webpack'],
            'spec/**/*_spec.jsx': ['webpack']
        },
        reporters: ['dots'],
        webpack: webpackConfig,
        webpackServer: {
            noInfo: true
        },
        colors: true,
        port: 9876
    });
};