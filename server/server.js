require('dotenv').config();

const express = require("express");
const authroute = require('./router/router-auth')
const contactRoute = require('./router/contact-router')
const servicesRoute = require('./router/service-router')
const adminRoute = require('./router/admin-router')
const cors = require('cors')

const app = express();
const connectDb = require("./utils/db")

const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
  };
  
  app.use(cors(corsOptions));


app.use(express.json())  // used as a middleware to show data in As using POST method of Server
app.use('/api/auth',authroute)
app.use('/api/form',contactRoute);
app.use('/api/Data',servicesRoute);

// getting data of admin
app.use('/api/admin',adminRoute)
connectDb().then(()=>{
app.listen(5000, () => {
    console.log('Server is running on port 5000');
})
})