const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
//signup
exports.signup = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Check if user already exists
        let check = await User.findOne({ email });
        if (check) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Initialize cartData if needed
        let cart = Array(300).fill(0); // or another initialization based on your use case

        // Create a new user
        const user = new User({ name, email, password: hashedPassword, cartData: cart });
        await user.save();

        // Create and sign JWT
        const data = {
            user: {
                id: user.id,
            }
        };
        const token = jwt.sign(data, process.env.JWT_SECRET, { expiresIn: '1h' }); // Set expiration

        res.status(201).json({ message: "User created successfully", user: { name, email }, token }); // Return only needed info
    } catch (error) {
        res.status(500).json({ message: "Failed to create user", error: error.message });
    }
}
//login
exports.login=async(req,res)=>{
    const {email,password}=req.body;
    try {
        let check=await User.findOne({email})
        if(!check){
            return res.status(400).json({ message: "User not found" });
        }
        const isMatch=await bcrypt.compare(password,check.password)
        if(!isMatch){
            return res.status(400).json({ message: "Invalid password" });
        }
        const data={
            user:{
                id:check.id
            }
        }
        const token=jwt.sign(data,process.env.JWT_SECRET)
        res.status(200).json({ message: "User logged in successfully", user: { name: check.name, email: check.email }, token });
        
        
    } catch (error) {
        res.status(500).json({ message: "Failed to login", error: error.message });
    }
}
