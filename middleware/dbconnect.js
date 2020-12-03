const express = require('express');
const mysql = require('mysql');

const dbconnect = (req, res, next) => {
    var database = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'library_information'
    });
    
    database.connect(function (error) {
        if(error){
    
        }
        else{
            console.log("connected");
        }
    });

    next();
};

module.exports = dbconnect;