const express = require("express");
const port = process.env.PORT || 5500;

const app = express();

app.listen(port, console.log("server "));
