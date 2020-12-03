/*
    TODO: 
    -book check-in and check-out
    -late check
    -book search
    -search by critera
    -rental/user history
*/

const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');
const logger = require('./middleware/logger');
const dbconnect = require('./middleware/dbconnect');

//init express app
const app = express();

//init templating
app.set('view engine', 'hbs');

app.engine('hbs', hbs({
    extname: 'hbs',
    defaultView: 'default',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/'
}));

//init middleware
app.use(logger);

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

//set routing module
app.use('/', require('./routes/router.js'));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log('Server started on port %s', PORT));