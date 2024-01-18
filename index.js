const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.json([
        {
            id: 1,
            name: "Shantanu",
            age: 22
        },
        {
            id: 2,
            name: "Bush",
            age: 21
        },
        {
            id: 3,
            name: "Anil",
            age: 23
        },

    ]);
});

app.listen(8000, () => {
    console.log("App running on port 8000");
});
