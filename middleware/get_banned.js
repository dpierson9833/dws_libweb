const db = require('./dbconnect');

const get_checkedbooks = function (req, res, next){
    var sql = "SELECT eid, fname, lname FROM banned_list";

    db.query(sql, function (err, data, fields){
        console.log(data.length + ' users banned currently');
        res.locals.bannedusers = data;
        next();
    });
};

module.exports = get_checkedbooks;