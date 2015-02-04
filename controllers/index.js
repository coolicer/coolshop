var handlebars = require('../lib/handlebars')

function index(r) {
    var res = r.response
    var data = {
        title: 'Layout Test',
        items: [
            'apple',
            'orange',
            'banana'
        ]
    };
    res.write(handlebars.render('test.html', data))
}

module.exports = index;