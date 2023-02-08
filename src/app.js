const express = require("express");
const dataSource = require("./db/db");


const app = express();

app.get("/", async (req, res) => {
    const bookRepo = dataSource.getRepository("Book");
    const book = {
        title: "Harry Potter 2",
        price: 2000
    }

    // const bookSaved = await bookRepo.save(book);
    res.json(await bookRepo.find());
})


dataSource.initialize().then(() => {
    console.log("Database connected!!");

    app.listen(3000, () => {
        console.log("Server Started on Port 3000")
    })
})
    .catch((err) => {
        console.log(err)
    })
