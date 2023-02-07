const express = require('express')
const dotenv = require('dotenv').config()
const {graphqlHTTP} =require('express-graphql')
const schema = require('./schema/schema')
const PORT = process.env.PORT || 5000;
const colors = require('colors');
const connectDB = require('./config/db')

const app = express()

//Connect to database
connectDB();

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
}))

app.listen(PORT, () => { console.log(`Server running on PORT: ${PORT}`) })