const express = require("express");
const bodyparse = require("body-parser");
const request = require("request");
const https=require("https");
const app = express();

app.use(express.static("public"));
app.use(bodyparse.urlencoded({extended:true}));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/",function(req,res){
    const firstname=req.body.Fname;
    const lastname=req.body.Lname;
    var email=req.body.email;//you use it const in front of var
    
    const data={
        members:[
            {
                email_address:email,
                status:"subscribed",
                merge_fields:{
                    FNAME:firstname,
                    LNAME:lastname
                }
            }
        ]
    };
    const jsondata=JSON.stringify(data);
    const url="https://us13.api.mailchimp.com/3.0/lists/46e8c0a3df";
    const options={
        method:"POST",
        auth:"ad:e0d7f0459eadb0fd4e1dcdf6b062b30b-us13"
    }
const request=https.request(url,options,function(response){
    if(response.statusCode===200)
    res.sendFile(__dirname+"/success.html");
    else{
        res.sendFile(__dirname+"/failure.html"); 
    }
    response.on("data",function(data){
    console.log(JSON.parse(data));
    })
}) 
request.write(jsondata); 
request.end();
})
app.post("/failure",function(req,res){
    res.redirect("/");
})
app.listen(3000, function () {
  console.log("the server on port 3000");
});
//horoku is one type of website when the first 5 project is fully free.
