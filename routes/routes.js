const { response } = require('express');
const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');

// router.get('/Home', Home);
// router.get('/About', About);
router.post('/create/user', createUser);
router.post('/login/user',loginUser);

// async function Home(req, res, next) {

//     res.status(200).json({ msg: "Home Page" })
//     console.log('home Page');
// }

// async function About(req, res, next) {
//     AboutMiddle(req, res, () => {
//         handleAbout(req, res);
//     });
// };

// async function AboutMiddle(req, res, next) {
//     console.log("Middleware function called");
//     next();
// }

// async function handleAbout(req, res) {
//     res.status(200).json({ msg: "About Page" })
//     console.log('About Page');
// }

async function createUser(req, res, next) {
    try {
        let options = {};
        let response = {};
        let body = {};

        body = req.body;

        let user = await controller.createUser(body, options);
      ;  response.result = user.output;
        response.message = user.message;
        res.send(response);
    } catch (err) {
        response.status = 500;
        response.message = err.message;
        res.send(response);// Propagate the error to the higher level
    }


}

async function loginUser(req, res, next) {

    try {
        let options = {};
        let response = {};
        let body = {};

        body = req.body;

        let user = await controller.loginUser(body, options);
        res.cookie("jwtoken", user.token,{
            expires:new Date(Date.now() + 25892000000),
            httpOnly:true
        });
        response.message = user.message;
        response.token = user.token;
        res.send(response);
    } catch (err) {
        response.status = 500;
        response.message = err.message;
        res.send(response);// Propagate the error to the higher level
    }
    
}
module.exports = router;