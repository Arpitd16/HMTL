const express = require("express");
const bodyparser = require("body-parser");
const data = require(__dirname + "/data.js");


const app = express();
const iteams = ["buy food", "cook food", "eat food"];
const workitems = [];
app.set("view engine", "ejs");
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get("/", function (req, res) {
  const day = data.getdate();
  res.render("list", { kindofday: day, newlistiteam: iteams });
});
app.get("/work", function (req, res) {
  res.render("list", { kindofday: "work list", newlistiteam: workitems });
});
// app.post("/work",function(req,res){
//     let iteam=req.body.newiteam;
//     workitems.push(iteam);
//     res.redirect("/work");
// })
app.get("/about", function (req, res) {
  res.render("about");
});
app.post("/", function (req, res) {
  const iteam = req.body.newiteam;
  if (req.body.list === "work") {
    workitems.push(iteam);
    res.redirect("/work");
  } else {
    iteams.push(iteam);
    res.redirect("/");
  }
});
app.listen(3000, function (req, res) {
  console.log("the server runing on port 3000");
});
