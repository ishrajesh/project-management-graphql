const express = require('express')
const colors = require('colors');
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 5000;

const connectDB = require('./config/db')

const cors = require('cors');
const schema = require('./schema/schema')
const {graphqlHTTP} =require('express-graphql')

const app = express()

//Connect to database
connectDB();

app.use(cors());

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
}))

app.listen(PORT, () => { console.log(`Server running on PORT: ${PORT}`) })