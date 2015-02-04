var util = require('util')
var path = require('path')
var fs = require('fs')
var Handlerbars = require('../node_modules/handlebars/lib')
    require('../node_modules/handlebars-layouts')(Handlerbars)

var dir = path.join(path.fullpath('.') + '/views')
    Handlerbars.registerPartial('layout', fs.readFile(path.join(dir, 'layout.html')));

module.exports = {
    render: function(filename, options) {
        var template = Handlerbars.compile(fs.readFile(path.join(dir, filename)));
        return template(options);
    }
}