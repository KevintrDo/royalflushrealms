const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const mongoose = require('mongoose');
const cors = require('cors');

//Connect Database
app.use(cors({origin: true, credentials: true}));
app.use(express.json({extended: false}));
app.get('/',(req,res) => res.send('Hello world!'));

app.get('/user/:id', (req,res) => {
    res.send('user $(req.params.id)')
})

const conn_str ='mongodb+srv://kevindo03:1234@cluster0.mwtppin.mongodb.net/?retryWrites=true&w=majority'
mongoose.set('strictQuery', false);
mongoose.connect(conn_str,{
    useUnifiedTopology:true,
    useNewUrlParser:true
})
.then(() => {
    app.listen(port)
    console.log('MongoDB Connection Suceeded...')
})
.catch(err => {
    console.log('Error in DB Connection ${err}');
});

const items = require('./src/routes/api/users');

app.use('./src/routes/api/users', items);