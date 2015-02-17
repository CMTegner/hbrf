var fs = require('fs');
var createBundle = require('./create-bundle.js');

createBundle()
    .bundle()
    .pipe(fs.createWriteStream('bundle.js'));
