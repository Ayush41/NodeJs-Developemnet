const express = require('express');
const {connectToMongoDB} = require('./connect')
const urlRoute = require('./routes/url');


const PORT = 3030;
const app = express();

connectToMongoDB('mongodb://localhost://27017/short-url')
.then(() => console.log('Connected to MongoDB'))

app.use(express.json());

app.use("/url",urlRoute);

app.listen(PORT,()=> console.log(`Server started at port: ${PORT}`));
