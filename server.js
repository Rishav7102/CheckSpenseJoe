const express = require('express')
const dbConnect = require('./dbConnect')
const app = express() //This line creates an instance of an Express application. app will be used to set up the middleware, routes, and start the server.
app.use(express.json())  //This middleware is used to parse incoming JSON requests. It allows your application to accept and process JSON data sent in the request body.
const path = require('path')
const userRoute = require('./routes/usersRoute') //This line mounts the userRoute module at the /api/users/ path. Any requests to endpoints starting with /api/users/ will be handled by the userRoute module.
const transactionsRoute = require('./routes/transactionsRoute') //This line mounts the transactionsRoute module at the /api/transactions/ path. Any requests to endpoints starting with /api/transactions/ will be handled by the transactionsRoute module.
app.use('/api/users/' , userRoute)
app.use('/api/transactions/' , transactionsRoute)

// This line sets the port number on which the server will listen for incoming requests. It tries to get the port number from the environment variable PORT, and if it's not set, it defaults to 4000.
const port =process.env.PORT || 4000

if(process.env.NODE_ENV === 'production')
{
     app.use('/' , express.static('client/build'))

     app.get('*' , (req, res)=>{
         res.sendFile(path.resolve(__dirname, 'client/build/index.html'))
     })
}


// This line starts the server and makes it listen for incoming requests on the specified port. Once the server starts, it logs Node JS server started! to the console.
app.listen(port,()=>console.log('Node JS server started!'));