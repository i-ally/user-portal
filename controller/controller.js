const store = require('../store/store');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const bcrypt = require('bcrypt');
const User = require('../model/userSchema');



async function createUser(body, options) {
    try {
        if (!body.username || !body.email || !body.profession || !body.cPassword || !body.password) {
            throw new error("Please provide mandatary feilds")
        }

        const userExist = await User.findOne({ email: body.email });

        if (userExist) {
            throw new Error("Email already exists.");
        }

        if (typeof body.phone_no !== "number") {
            throw new Error("Phone_no should be a number");
        }

        const { password, cPassword } = body;

        if (password !== cPassword) {
            throw new Error("Passwords do not match.");
        }

        // Password validation regex pattern
        const passwordRegex = /^(?=.*[A-Z])(?=.*[\W_])(?=.{10,})/;

        if (!passwordRegex.test(password)) {
            throw new Error("Password must contain at least 10 characters, including a capital letter and special character.");
        }
        body.hashedPassword = await bcrypt.hash(password, 10);
        body.hashedCPassword = await bcrypt.hash(cPassword, 10);


        const user = await store.createUser(body, options);
        return user;

    } catch (err) {
        console.log(err);
        throw err;
    }
}


async function loginUser(body, options) {
    try {
        let result = {};
        const user = await User.findOne({ email: body.email });
        const userExist = user._doc;
        if (userExist) {
            const isMatch = await bcrypt.compare(body.password, user.password);

            
            if (isMatch) {
                // Passwords match
                const token = await user.generateAuthToken(); // Assuming the generateAuthToken method is defined

                result.message = 'Password is correct';
                result.token = token; // Include the generated token in the response
                return result;
            } else {
                // Passwords don't match
                throw new Error('Password is incorrect');
            }
        }
    } catch (err) {
        // Handle any errors that occurred during the comparison
        console.error('An error occurred during password comparison:', err);
    }

}

module.exports = {
    createUser, // Export the createUser function
    loginUser
};