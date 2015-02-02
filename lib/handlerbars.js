var util = require('util')
var path = require('path')
var fs = require('fs')
var Handlebars = require('../node_modules/handlebars/lib')
    require('../node_modules/handlebars-layouts')(Handlebars)

var dir = path.join(path.fullpath('.') + '/views')

Handlebars.registerPartial('layout', fs.readFile(path.join(dir, 'layout.html')));

module.exports = {
    render: function(filename, options) {
        var template = Handlebars.compile(fs.readFile(path.join(dir, filename)));
        return template(options);
    }
}