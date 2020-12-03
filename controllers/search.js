//const bp = require('body-parser');
const db = require('../middleware/dbconnect');

//set up body parser


exports.searchinstance_submit = function(req, res, next) {
    
    var search_term = "%" + req.query.q + "%";
    var sql = "SELECT * FROM books WHERE title LIKE ?";

    //"SELECT * FROM 'books' WHERE 'title' LIKE CONCAT(?, '%')"
    db.query(sql, search_term, function (err, data, fields) {
        if(err){
            console.log(err.sqlMessage);
            res.redirect('/books/');
        }else{
            console.log(req.query.q + ' returned ' + data.length + " results");
            res.render('books', {layout: 'default', results: data});
        }
    });
};