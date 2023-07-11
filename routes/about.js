// const express = require('express');
// const verifyUser = require('../middleware');
// const app = express();

async function AboutMiddle (req,res,next) {
   console.log("Middleware function called");
   next();
}

async function handleAbout(req,res){
    res.status(200).json({msg: "About Page"})
    console.log('About Page');
}
const about = (req, res, next) => {
    About(req, res, () => {
      handleAbout(req, res, next);
    });
  };

  // async function About(req,res){
// app.use(verifyUser);
// app.use(About);
//     res.status(200).json({msg: "About Page"})
// }

module.exports = aboutHandler;