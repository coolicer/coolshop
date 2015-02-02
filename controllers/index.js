var h = require('../lib/h')

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
    res.write(h.render('test.html', data))
}

module.exports = index;