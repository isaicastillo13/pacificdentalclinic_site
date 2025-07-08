const mongoose = require('mongoose');
const { use } = require('react');

const connectDB = async () => {
    try{
        const conn = await mongoose.mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        });
    }catch(err){
        console.error('Error connecting to MongoDB:', err);
        process.exit(1); // Exit the process with failure
    }
};
module.exports = connectDB;