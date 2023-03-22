const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://mohit_the_coder:mohit_the_coder@ac-2ffmw0w-shard-00-00.pstta4e.mongodb.net:27017,ac-2ffmw0w-shard-00-01.pstta4e.mongodb.net:27017,ac-2ffmw0w-shard-00-02.pstta4e.mongodb.net:27017/?ssl=true&replicaSet=atlas-2inpq2-shard-0&authSource=admin&retryWrites=true&w=majority");
    console.log(`MongoDB connected`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
