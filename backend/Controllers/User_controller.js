const User = require("../models/User");

module.exports.createUser = async function(req,res){
    if(req.body.password != req.body.confirm_password){
        console.log("Password not match");
        return res.status(401).send({
            status:false,
            message:"Password not match"
        });
    }
    let user = await User.findOne({email:req.body.email});
    try {
        if(!user){
            User.create({
                name:req.body.name,
                email:req.body.email,
                password:req.body.password
            });
            return res.status(200).send({
                status:true,
                user,
                message:"User Created Successfully"
            });
        }
        return res.status(409).send({
            status:false,
            message:"User already exist"
        })
    } catch (error) {
        return res.status(500).send({
            status:false,
            message:"Error while signUp"
        });
    }

        
}

module.exports.session = async function(req,res){
    let user = await User.findOne({email:req.body.email});
    try {
        if(!user){
            console.log("Invalid Email/Password");
            return res.status(401).send({
                status:false,
                message:"Invalid Email/Password"
            });
        }
        else{
            if(user.password != req.body.password){
                console.log("Invalid Email/Password");
                return res.status(401).send({
                    status:false,
                    message:"Invalid Email/Password"
                });
            }
            else{
                res.cookie("user_id",user._id);
                return res.status(200).send({
                    status:true,
                    user,
                    message:"Login successfully"
                });
            }
            
        }
    } catch (error) {
        console.log("Error while sign In",error);
        return res.status(500).send({
            status:false,
            message:"Error while sign In"
        });
    }
};