import express from "express";
import path from "path";
import logger from "morgan";


const app = express();

// Configure Express to use EJS
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(logger('dev'));

// define a route handler for the default home page
app.get("/", (req, res) => {
    res.send("Hello world!");
});

// start the Express server
const port = process.env.PORT || 8080; // default port to listen
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});