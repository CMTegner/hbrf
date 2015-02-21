var browserify = require('browserify');

module.exports = function () {
    return browserify({ debug: true })
        .add(require('es6ify').runtime)
        .transform(require('reactify'))
        // compile all .js files except the ones coming from node_modules
        .transform(require('es6ify').configure(/^(?!.*node_modules)+.+\.jsx?$/))
        .require(require.resolve('../index.jsx'), { entry: true });
};
