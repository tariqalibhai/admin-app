const User = require("../models/user-model")
const bcrypt = require("bcryptjs")


const home = async(req, res) => {
 try {
    res.send("hello boys using controler")
 } catch (error) {
    console.log(error);
 }
};

const register = async (req, res) => {
  try {
    // const data = req.body;
    console.log(req.body);
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(400).json({ msg: "email already exists" });
    }

    const userCreated = await User.create({ username, email, phone, password });

    // res.status(201).json({ message: "User registered successfully" });
    res.status(201).json({
      // msg: userCreated,
      msg:"registration Successful",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// Login Controller

const login = async (req,resp)=>{
  try {
    const {email,password} = req.body;
  const userExist= await User.findOne({email})
  console.log(userExist); // just for checking the what the data is 
  
  if(!userExist){
    return resp.status(400).json({message:"invalid Credentials"})
  }
  const user =await bcrypt.compare(password,userExist.password)

  if(user){
    resp.status(200).json({message:"user succesfully login",token: await userExist.generateToken(),})
      
  }else{
    resp.status(401).json({message:"inavlid email or Password"})
  }
  } catch (error) {
    resp.status(500).json({message:"server Error"})
  }
}

// *-------------------
// User Logic
// *-------------------

const user = async (req, res) => {
  try {
    // const userData = await User.find({});
    const userData = req.user;
    console.log(userData);
    return res.status(200).json({ userData });
  } catch (error) {
    console.log(` error from user route ${error}`);
  }
};



module.exports = { home , register,login,user};
