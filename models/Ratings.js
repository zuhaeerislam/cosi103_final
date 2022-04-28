'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const Mixed = Schema.Types.Mixed;

var ratingSchema = Schema( {

    ID: String,
    URL: String,
    Brand: String,
    Variety: String,
    Style: String,
    Country: String,
    Stars: String,
    
} );

module.exports = mongoose.model('Rating', ratingSchema );
