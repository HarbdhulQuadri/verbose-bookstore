'use strict';
const { connect } = require('mongodb');
var mongoose= require('mongoose');
var db =function(){
    return{
        config:function(conf){
            mongoose.connect('mongo://localhost/quadri');
            var db = mongoose.connection;
            db.on('error',console.log.error.bind(console,"connection error"));
            db.once('open',function(){
                console.log('DB mongoose.connection open ...');
            });
        }
    }
}
module.exports = db();