const express = require("express");
const bodyparser = require("body-parser");

const app = express();
app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html")
})

app.post("/", function (req, res) {
    console.log(req.body);
    let weightFinal = Number(req.body.weight);
    let height = Number(req.body.height);

    if (height < 3.0) {
        let heightFinal = height;
        let data = weightFinal / (heightFinal * heightFinal);
        res.send("your bmi is " + data)
    }
    else {
        let heightFinal = height / 100;
        let data = weightFinal / (heightFinal * heightFinal);
        res.send("your bmi is " + data)
    }
})




app.listen(3000, function () {
    console.log("server start on port 3000")
})









