const db = require('../middleware/dbconnect');

exports.getinstance_user = function (req, res, next) {
    var usernname = res.locals.user;
    var checkedbooks = res.locals.checkedbooks;

    //res.render('books', {layout: 'search', username: , checked_info: });
    res.render('user', {layout: 'default', username: usernname, checkedbooks: checkedbooks});
};

exports.postinstance_availability = function (req, res, next) {
    var user = 1000 //PLACEHOLDER UNTIL AUTH IS DONE
    var ISBN = req.params.id;

    console.log(ISBN);
    //get ISBN
    //change availability

    res.redirect(`/user/?id=${user}`);    
};

exports.postinstance_login = function (req, res, next) { //not safe for production, dev use only
    var user = req.body.user;
    var pass = req.body.pass;
    var sql = "SELECT username, pass FROM administrators";
    
    
    //either reload or create session cookie
    next();
};