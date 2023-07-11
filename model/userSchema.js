const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY 

const userSchema = new mongoose.Schema({
    
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phoneNo:{
        type:Number,
        required:true
    },
    profession:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cPassword:{
        type:String,
        required:true
    },
    Tokens:[{
        token:{
            type:String,
            required:true 
        }
    }]
});

userSchema.methods.generateAuthToken = async function(){
    try{
 let tokin = jwt.sign({_id:this._id}, process.env.SECRET_KEY);
 this.Tokens = this.Tokens.concat({token:tokin});
await this.save();
return tokin;
    }catch(err){
        throw err;
    }
}

const User = mongoose.model('USER',userSchema);

module.exports = User;