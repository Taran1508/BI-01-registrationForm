const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const path = require("path"); 

const app = express();
dotenv.config();

//http://localhost:3000/
const port = process.env.PORT || 3000;

const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;
mongoose.connect(`mongodb+srv://${username}:${password}@cluster1508.q0lfcwg.mongodb.net/registrationFormDB`);

const registrationSchema = new mongoose.Schema({
  name : String,
  email : String,
  password : String
});

const Registration = mongoose.model("Registration",registrationSchema);

app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());





app.use(express.static(path.join(__dirname, 'pages')));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/register", async (req,res) => {

    try {
        const { name,email,password}= req.body;
        const existingUser = await Registration.findOne({email : email});
        if(!existingUser){
        const registrationData = new Registration({
            name,
            email,
            password
        });
       await registrationData.save();
       res.redirect("/success");
    }else{
        console.log("Existing User!");
        res.redirect("/error");
    }
    
    } catch (error) {
        console.log(error);
        res.redirect("/error");
    }
})

app.get("/success", (req, res) => {
    res.sendFile(__dirname + "/pages/success.html");
});
app.get("/error", (req, res) => {
    res.sendFile(__dirname + "/pages/error.html");
});


// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
