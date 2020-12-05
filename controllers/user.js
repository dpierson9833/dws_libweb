const { query } = require('../middleware/dbconnect');
const db = require('../middleware/dbconnect');

//render account (/user/) page
exports.getinstance_user = function (req, res, next) {
    var usernname = res.locals.user;
    var checkedbooks = res.locals.checkedbooks;
    var bannedusers = res.locals.bannedusers;

    res.render('user', {layout: 'default', username: usernname, checkedbooks: checkedbooks, banned_user: bannedusers});
};

//force book to become available
exports.postinstance_availability = function (req, res, next) {
    var ISBN = req.body.btn_available;
    var sql = "UPDATE books SET book_status = 'available' WHERE ISBN = ?"

    db.query(sql, ISBN, function (err, data, fields) {
        if (err){
            console.log(err.sqlMessage);
        }{
            console.log(`Database updated, ${ISBN} now available`);
            res.redirect(`/user/?id=${req.session.user}`);    
        }
    });
};

//remove users from banned list
exports.postinstance_removeban = function (req, res, next) {
    var eid = req.body.btn_unban;
    var sql = 'DELETE FROM banned_list WHERE eid = ?';

    db.query(sql, eid, function (err, data, fields) {
        if (err){
            console.log(err.sqlMessage);
        }{
            console.log(`Database updated, ${eid} dropped from banned_list`);
            res.redirect(`/user/?id=${req.session.user}`);    
        }
    });
};

//add student to banned list
exports.postinstance_createbanneduser = function (req, res, next) {
    var eid = req.body.eid;
    var fname = req.body.fname;
    var lname = req.body.lname;
    var sql = "INSERT INTO banned_list VALUES (null, ?, ?, ?, null);"

    db.query(sql, [eid, fname, lname], function (err, data, fields) {
        if (err){
            console.log(err.sqlMessage);
        }{
            console.log(`Database updated, ${eid} added to bannned list`);
            res.redirect(`/user/?id=${req.session.user}`);    
        }
    });
};

//Sign user in and create session (NOT PRODUCTION SAFE)
exports.postinstance_login = function (req, res, next) { //not safe for production, dev use only
    var user = req.body.user;
    var pass = req.body.pass;
    var sql = "SELECT username, pass, aid FROM administrators WHERE username = ? AND pass = ?";
    
    if(user && pass){
        db.query(sql, [user, pass], function (err, data, fields) {
            if (err) {
                console.log(err.sqlMessage);
            }else{
                //create session
                req.session.user = data[0].aid;
                res.redirect(`/user/?id=${req.session.user}`); //redirect to user admin page
            }
        });
    }else{
        res.redirect(`/user/?id=${req.session.user}`);  
    }
};