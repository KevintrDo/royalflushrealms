const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const mongoose = require('mongoose');
const cors = require('cors');

//Connect Database
const users = require('./src/routes/api/users');
const bathrooms = require('./src/routes/api/bathrooms');
app.use(cors({origin: true, credentials: true}));
app.use(express.json({extended: false}));
// app.use(express.json());
app.use('/api/users', users);
app.use('/api/bathrooms', bathrooms);



// app.get('/user/:id', (req,res) => {
//     res.send('user $(req.params.id)')
// })

const conn_str ='mongodb+srv://kevindo03:1234@cluster0.mwtppin.mongodb.net/?retryWrites=true&w=majority'
mongoose.set('strictQuery', false);
mongoose.connect(conn_str)
.then(() => {
    app.listen(port)
    console.log('MongoDB Connection Suceeded...')
})
.catch(err => {
    console.log('Error in DB Connection ${err}');
});

