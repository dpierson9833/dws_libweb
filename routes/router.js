const { EWOULDBLOCK } = require('constants');
const express = require('express');
const path = require('path');
const router = express.Router();

// CONTROLLERS //
var search_con = require('../controllers/search');

router.get('/', function(req, res, next) {
    res.render('index', {layout: 'default', template: 'index-template'});
});


router.get('/books', (req, res) => {
    res.render('books', {layout: 'default'});
});

router.get('/search/', search_con.searchinstance_submit);

module.exports = router;