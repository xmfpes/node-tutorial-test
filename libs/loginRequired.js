module.exports = function(req, res, next) {
    if (!req.isAuthenticated()){ 
        res.redirect('/accounts/login');
    }else{
        //미들웨어 next
        return next();
    }
};