const express=require("express");
const parser=require("body-parser");
const app=express();
app.use(parser.urlencoded({extended:true}));//the of this it is return data into hyper that you enter in localhost.

app.get("/",function(req,res){
    res.sendFile(__dirname+ "/index.html");
});
app.post("/",function(req,res){
    var num1=Number/*parsefloat is us for float number*/(req.body.num1);
    var num2=Number(req.body.num2);
    var result=num1 + num2;
    res.send("the result of two variable is "+ result);
});

app.listen(3000,function(){
    console.log("the server on port 3000");
});
