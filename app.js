var http = require('http')
var config = require('./config/config')

var server = new http.Server( config.PORT, require('./router.js'))
    server.run()
