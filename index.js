const express = require("express");
const app = express();
const cors = require("cors");
const path = require('path');

const apiData = require("./data.json");

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    res.send(`
    <center>
    <h3>Hello This is a fake API</h3>
    <pre> API Link is given
Below </pre>
    <a href="/products"> Link </a>
    </center>
    `);
});
/* app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/index.html"));
}); */

app.get("/products", (req, res) => {
    res.send(apiData );
});


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`The application is started successfully on port ${port}`);
});
