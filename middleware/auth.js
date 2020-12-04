
const auth = function (req, res, next) {
    console.log("inside auth");
    //if not user page or user auth
    //if auth continue
    //if not redirect

    if (req.session.user || req.originalUrl == '/login'){
        console.log('if triggered');
        next();
    }else{
        console.log('else triggered');
        console.log(req.originalUrl);
        res.redirect('/login');
    }
};

module.exports = auth;