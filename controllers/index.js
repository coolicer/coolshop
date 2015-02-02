var handlerbars = require('../lib/handlerbars')

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
    res.write(handlerbars.render('test.html', data))
}

module.exports = index;