require('dotenv').config();
const express= require('express');
var bodyParser = require('body-parser');
const app= express();
const cors= require("cors");
const connection= require("./db");
const userRoutes = require('./routes/users');
const authRoutes= require("./routes/auth")



app.use(bodyParser.urlencoded({ extended: true }));

//Database connection
connection();

//middleware
app.use(express.json());
app.use(cors());

//routes
app.use("/api/users", userRoutes);
app.use("/api/auth",authRoutes);

const port= process.env.PORT||5000;

app.listen(port,()=>{
    console.log(`listening on localhost:${port}`);
})