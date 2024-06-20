const mongoose=require('mongoose');
//pass=process.env.PASSWORD
const url='mongodb+srv://rishavranjan7102:qb64zqW8pkAjzXaf@mernexpensetracker.ketcnnr.mongodb.net/?retryWrites=true&w=majority&appName=MernExpenseTracker';

// This line uses the mongoose.connect method to connect to the MongoDB database using the connection string (url). The useUnifiedTopology: true option is provided to opt into using the new MongoDB driver's unified topology layer, which provides a more robust and flexible connection handling.
mongoose.connect(url,{useUnifiedTopology: true});

// Store the connection instance
const connection=mongoose.connection;

// This line sets up an event listener on the connection instance to listen for error events. If an error occurs while connecting to the database or during any database operation, the error will be logged to the console.
connection.on('error', err=>console.log(err));

// Event listener for successful connection
connection.on('connected', ()=>console.log('MongoDB connected'));