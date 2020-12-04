const express = require('express');
const path = require('path');
const router = express.Router();

// CONTROLLERS //
var search_con = require('../controllers/search');
const { getinstance_user } = require('../controllers/user');

router.get('/', function(req, res, next) {
    res.render('index', {layout: 'default', template: 'index-template'});
});

router.get('/books', (req, res) => {
    res.render('books', {layout: 'search'});
});

router.get('/search/', search_con.searchinstance_submit);

router.get('/user/', getinstance_user);

module.exports = router;