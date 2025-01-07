const express = require('express');

PORT = 3333;
const app = express();

app.listen(PORT,()=> console.log(`Server started at port: ${PORT}`));
