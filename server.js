const app = require("./app");
const mongoose = require("mongoose");
const { listen } = require("./app");

const { DB_HOST, PORT = 3000 } = process.env;

mongoose.connect(DB_HOST)
  .then(() => app.listen(PORT))
  .catch((error) => {
    console.error(error.message);
    process.exit(1);
  });

