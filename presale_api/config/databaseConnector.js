const mongoose = require("mongoose");

const databaseConnector = async () => {
  await mongoose.connect(process.env.MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log("Database Connection was successfully");
};

module.exports = databaseConnector;
