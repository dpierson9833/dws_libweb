const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');

const app = express();

//init middleware
//app.use(logger);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './htdocs/index.html'));
});

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('route', require('./routes/example'));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log('Server started on port %s', PORT));