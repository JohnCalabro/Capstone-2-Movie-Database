require("dotenv").config()

const express = require("express");
const cors = require("cors");
const testRoutes = require('./routes/test')
const userRoutes = require('./routes/userRoutes')
const favRoutes = require('./routes/favRoutes')

//express app
const app = express();

//middleware
app.use(cors())
app.use(express.json())


app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/test', testRoutes);
app.use('/api/users', userRoutes);
app.use('/api/favorites', favRoutes);

// listen for requests
app.listen(4000, () => {
    console.log('listening on port 4000')
});

module.exports = app;






