import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/echo", (req, res) => {
    const body = req.body;
    res.send(JSON.stringify(body));
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
