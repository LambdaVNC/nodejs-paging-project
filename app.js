const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const blog_router = require("./src/routers/blog_router");
const ejs = require("ejs");
const path = require("path");
const app = express();

app.use(expressLayouts);
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./src/views"));

app.use("/", blog_router);
app.use("/blog", blog_router);

app.listen(3000, (_) => {
  console.log("The server is up from port 3000!");
});
