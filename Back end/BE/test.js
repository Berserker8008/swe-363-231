const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://zerk:cress308@cluster0.ktrthrr.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connected"))
  .catch((err) => console.error("Not connect", err));
  
