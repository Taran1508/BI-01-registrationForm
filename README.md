# BI-01-registrationForm

## Description
This is my first task as a Full-Stack developer intern @BharatIntern, 
#### Task name : 
Registration Form
#### Tech-Stack Used:
Node.js, Express.js, Html, BootStrap 5, Mongo DB



### Steps
Step 1: Create a Folder \
Step 2: Open the terminal in that folder and run the following command: npm init -y \
this will initialize the required json configs in our folder \
Step 3: Next we need to install express.js mongoose body-parser using the following command: npm i express.js body-parser mongoose \
Express.js provides the framework for handling HTTP requests, routing, and middleware integration. \
body-parser simplifies the process of parsing request bodies and extracting data from incoming requests. \
Mongoose facilitates interaction with MongoDB databases by providing an intuitive way to define data schemas, perform CRUD operations, and handle data validation. \
Step 4: Create variables for the following- express, mongoose,body-parser, path, dotenv \
Step 5: use express(); to create an instance and foundation of express application \
Step 6: use dotenv.config(); to load the environment variables into our Node.js environment \
Step 7: Set a port - process.env.PORT || 3000 \
Step 8: write the Structure and Styles in html and css files \
Step 9: Use app.listen(<port>,()=>c.l(server started)) to start receiving incoming connections on a specified port
Step 10: Use app.use(express.static(path.join(__directory ,"<foldername>"); to add the all the static files like images, external css other files.  \
 app.get("/" ,(req,res)=>{res.sendFile(path.join(__directory,"/ index.html")}); to send our html page as response.
Step 11: Now go to MongoDB.com and create an account > security > Quick Start > set up the username and password and IP address > connect to the cluster using the link given in the site. \
mongoose.connect(<URL>) \ 
Step 12: create a .env file and store the username and password as environment variables \
Step 13: Now create a variable for schema ( Structure format for storing the Data ) \
registrationSchema = mongoose.Schema({ name: String, etc..}) \
Step 14: 






       

