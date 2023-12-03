const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const mongoose = require('mongoose');
const cors = require('cors');

//Connect Database
const items = require('./src/routes/api/users');

app.use('/api/users', items);
app.use(cors({origin: true, credentials: true}));
app.use(express.json({extended: false}));
app.get('/',(req,res) => res.send('Hello world!'));



app.get('/user/:id', (req,res) => {
    res.send('user $(req.params.id)')
})

const conn_str ='mongodb+srv://danielgrigsby03:daniel123@cluster0.gwseuh2.mongodb.net/?retryWrites=true&w=majority'
mongoose.set('strictQuery', false);
mongoose.connect(conn_str)
.then(() => {
    app.listen(port)
    console.log('MongoDB Connection Suceeded...')
})
.catch(err => {
    console.log('Error in DB Connection ${err}');
});

