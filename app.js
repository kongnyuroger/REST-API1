const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const app = express();

require('dotenv/config')

app.use(bodyParser.json())
//routes

app.get('/', (req, res) => {
    res.send('we are on home page')
});
//Import Routes
const postsRoutes = require ('./routes/posts');
app.use('/posts', postsRoutes)
//connect to DB
const dbURI = (process.env.DB_connection)
mongoose.connect(dbURI)
.then((results) => {
    console.log('connected')
})
.catch((err) => {
    console.log(err)
})

app.listen(3000)