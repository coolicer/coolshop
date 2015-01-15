var ejs = require('../lib/ejs')

function index(r){
    var res = r.response
    var data = {
        title: '首页',
        text: '你好,fibjs'
    } 
    res.write( ejs.render('index.ejs', data) )
}

module.exports = index;
