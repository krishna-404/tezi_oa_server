const express = require("express");
const config = require('./config');

global.__basedir = __dirname;

const app = express();

const mongoUtil = require('./MongoUtil');
const apiRoutes = require("./routes/api.js");

app.use(express.static('public'));
app.use(express.json());

console.log("Server js file is loaded");

mongoUtil.connectToServer((err, client) => {
    console.log({err, client});
});

apiRoutes(app);

app.use((req,res, next) => {
    res .status(404)
        .type('text/html')
        .sendFile(__basedir+"/public/404.html");
})

let PORT = config.port;
let url = config.domainName;
app.listen (PORT, () => {
    console.log(`Server is live on ${url}:${PORT} !`);
})