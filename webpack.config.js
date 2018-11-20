'use strict';

const path = require( 'path' );

module.exports = {
    // https://webpack.js.org/configuration/entry-context/
    entry: './index.js',

    // https://webpack.js.org/configuration/output/
    output: {
        path: path.resolve( __dirname, 'dist' ),
        filename: 'bundle.js'
    },

    // By default webpack logs warnings if the bundle is bigger than 200kb.
    performance: { hints: false }
};