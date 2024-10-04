const mongoose = require("mongoose");

mongoose.connect(process.env.DB_URI);

mongoose.connection.on("error", (e) => {
  console.log("mongo connect error! " + e);
});
mongoose.connection.on("connected", () => {
  console.log("connected to mongo");
});
