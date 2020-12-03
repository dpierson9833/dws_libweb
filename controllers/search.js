const bp = require('body-parser');
const db = require('../middleware/dbconnect');

//set up body parser


exports.searchinstance_submit = function(req, res, next) {
    console.log('inside search controller');
    next();
};