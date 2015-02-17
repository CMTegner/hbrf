var fs = require('fs');
var watchify = require('watchify');
var createBundle = require('./create-bundle.js');

var bundle = createBundle();

bundle.bundle()
    .pipe(fs.createWriteStream('bundle.js'));

console.log('watching...');

watchify(bundle)
    .on('update', function () {
        bundle.bundle()
            .pipe(fs.createWriteStream('bundle.js'));
        console.log('Bundle updated!');
    });