const express=require('express');
const User=require('../models/User');  //This model will be used to interact with the user data stored in the database.
const router=express.Router();

router.post('/login',async function(req,res){  //This line defines a route handler for POST requests to the /login endpoint. It is defined as an async function to handle asynchronous operations with await.

    try {  //This line starts a try block to handle exceptions that may occur during the execution of the asynchronous operations.

        // This line uses the User model to find a single document in the database that matches the provided email and password from the request body (req.body). The await keyword ensures that the code waits for the database query to complete before moving to the next line.
        const result=await User.findOne({

            email: req.body.email,
            password: req.body.password,

        });
        // If a user with the provided email and password is found (result is not null), the user data is sent back in the response.
        if(result){
            
            res.send(result);
            
        }
        else{
            // If no matching user is found (result is null), a response with a 500 status code and the error object is sent.

            res.status(500).json(error);

        }
    } catch (error) {
        // If an error occurs during the execution of the try block, it is caught by the catch block, and a response with a 500 status code and the error object is sent.

        res.status(500).json(error);
        
    }

});

// This line defines a route handler for POST requests to the /register endpoint. It is defined as an async function to handle asynchronous operations with await.
router.post('/register',async function(req,res){

    try {
        // A new user document is created using the data from the request body (req.body). The await newuser.save() line saves this new user document to the database.If the user is successfully registered, a success message is sent in the response.
        const newuser=new User(req.body);
        await newuser.save();
        res.send('Registered User Successfully!');
        
    } catch (error) {

        res.status(500).json(error);
        
    }

});

// This line exports the router instance so that it can be imported and used in other parts of the application, typically in the main server file.
module.exports=router;