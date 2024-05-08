//import express
const express = require('express')

const userRouter = require('./routers/userRouter');
const utilRouter = require('./routers/util');

const cors = require('cors');
const adminRouter = require('./routers/adminRouter');
const blogRouter = require('./routers/blogRouter')


//initialize express
const app = express();
const port = 5000;

//middleware

app.use(cors({
    origin: ['http://localhost:3000']
}));
app.use(express.json());
app.use('/user', userRouter);
app.use('/admin', adminRouter);
app.use('/util', utilRouter);
app.use('/blog', blogRouter);
app.use(express.static('./static/uploads'));


// endpoint
app.get('/', (req, res) => {
    res.send('Response from express');
});

app.get('/add', (req, res) => {
    res.send('Response from add');
});

//delete route

app.get('/delete', (req, res) => {
    res.send('Response from delete');
});
//update route

app.get('/update', (req, res) => {
    res.send('Response from update');
});




//start server

app.listen(port, () => { console.log('server started'); });