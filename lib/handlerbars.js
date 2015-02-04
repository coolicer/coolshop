var util = require('util')
var path = require('path')
var fs = require('fs')
var handlebars = require('../node_modules/handlebars/lib')
    require('../node_modules/handlebars-layouts')(handlebars)

var dir = path.join(path.fullpath('.') + '/views')
    handlebars.registerPartial('layout', fs.readFile(path.join(dir, 'layout.html')));

module.exports = {
    render: function(filename, options) {
        var template = handlebars.compile(fs.readFile(path.join(dir, filename)));
        return template(options);
    }
}