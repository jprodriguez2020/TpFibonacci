
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require('dotenv');
const app = express();


dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routes = require("./routes/routes.js")(app);

const server = app.listen(process.env.PORT, function () {
    console.log(`Server inicializado on port: ${process.env.PORT}`);
});