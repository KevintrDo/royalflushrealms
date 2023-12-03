const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const mongoose = require('mongoose');
const cors = require('cors');

//Connect Database
const users = require('./src/routes/api/users');
app.use(cors({origin: true, credentials: true}));
app.use(express.json({extended: false}));
// app.use(express.json());
app.use('/api/users', users);



// app.get('/user/:id', (req,res) => {
//     res.send('user $(req.params.id)')
// })

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

