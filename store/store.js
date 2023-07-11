const User = require('../model/userSchema');
const crypto = require("crypto");

async function createUser(body, options) {
  try {
    let user = new User({
      name: body.username,
      email: body.email,
      profession: body.profession,
      phoneNo: body.phone_no,
      password: body.hashedPassword,
      cPassword: body.hashedCPassword,
    });
    //id = crypto.randomUUID(),
    var result = {};
    console.log(user);
    await user.save().then(() => {
      result.message = " User is created Successfully"
      result.output = user._doc;
    }).catch((err) => { throw new Error("Failed to registered") });

    return result;
  } catch (err) {
    throw err; // Propagate the error to the higher level
  }

}


module.exports = {
  createUser, // Export the createUser function
};