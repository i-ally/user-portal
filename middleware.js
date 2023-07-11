const verifyUser = (req,res,next) => {
    console.log('verified');
    next();
}

module.exports = verifyUser;