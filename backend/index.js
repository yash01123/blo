//import express
const express = require('express')


const cors = require('cors');
const userRouter = require('./routers/userRouter');
const utilRouter = require('./routers/util');
const blogRouter = require('./routers/blogRouter')
const competitionRouter = require('./routers/competitionRouter')
const participationRouter = require('./routers/participationRouter')


//initialize express
const app = express();
const port = 5000;

//middleware

app.use(cors({
    origin: ['http://localhost:3000']
}));
app.use(express.json());
app.use('/user', userRouter);
app.use('/util', utilRouter);
app.use('/blog', blogRouter);
app.use('/competition', competitionRouter);
app.use('/participation', participationRouter);

app.use(express.static('./static/uploads'));

// endpoint
app.get('/', (req, res) => {
    res.send('Response from express');
});



//start server

app.listen(port, () => { console.log('server started'); });