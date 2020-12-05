const logger = (req, res, next) => {

    if(!req.originalUrl.includes('favicon.ico')){
        console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
    }
    next();
};

module.exports = logger;