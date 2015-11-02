var browserify = require('browserify');
var babelify = require('babelify');

module.exports = function () {
    return browserify({ debug: true })
        .transform(babelify, {
            presets: ['es2015', 'stage-0'],
            plugins: [
                'syntax-jsx',
                'transform-react-jsx'
            ]
        })
        .require(require.resolve('../index.jsx'), { entry: true });
};
