const mongoose = require('mongoose');
const { NamedModulesPlugin } = require('webpack');

const URI = 'mongodb+srv://dnangels:dnangel1@bubblepop.nyymu.mongodb.net/<dbname>?retryWrites=true&w=majority';

const connectDB = async () => {
    await mongoose.connect(URI,
        { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
    console.log("MongoDB has been connected");
}

module.exports = connectDB;