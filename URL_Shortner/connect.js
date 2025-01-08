const mongoose = require('mongoose');
mongoose.set("strictQuery",true);

const connectToMongoDB= async (url) => {
    return mongoose.connect(url);
}

module.exports = {
    connectToMongoDB,
}