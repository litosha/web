const express = require('express');
const app = express();
const port = process.env.PORT || 56070;

app.use(express.static("./client"));
app.get("/", function(req, res) {
    res.sendFile('/client/index.html', {root: "./"})
});

app.listen(port, () => {console.log("Server has been started"); console.log("Running on port " + port.toString())});