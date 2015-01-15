var util = require('util')
var path = require('path')
var ejs = require('ejs')

var dir = path.join( path.fullpath('.') + '/views')
var _options = {
    cache: true
}

module.exports = {
    render: function( filename, options){
        options = util.extend( options || {}, _options)
        return ejs.renderFile( path.join(dir, filename), options )
    }
}
