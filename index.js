const express = require('express')
const bodyParser = require("body-parser")
const path = require('path');
const cors = require('cors')

const app = express()
app.use(cors())

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen("5000", () => {
    console.log("Listening to port 5000")
})