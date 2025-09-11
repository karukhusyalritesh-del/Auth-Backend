const express = require("express");
const cors = require("cors");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/authRoutes")

const connectDB = require("./config/mongodb");
const userRouter = require("./routes/userRoutes");

const app = express();
const PORT = process.env.PORT || 4000
connectDB();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173", 
    credentials: true}))

app.get("/", (req, res)=>{
    res.send("Welcome to Backend Server Of AUTH MERN APP")
})

app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)

app.listen(PORT, ()=>{
    console.log(`Server is running on PORT ${PORT}`);  
})