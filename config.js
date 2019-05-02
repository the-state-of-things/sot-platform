require('@babel/register')({
    extensions: [".js"],

    // Setting this to false will disable the cache.
    cache: true,
});

module.exports = require('./server/index.js');
