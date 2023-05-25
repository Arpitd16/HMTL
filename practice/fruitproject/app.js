const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB",{useNewUrlParser:true});
const peopleSchema= new mongoose.Schema({
  name:String,
  salary:Number,
  age:Number
});
const Person=mongoose.model("Person",peopleSchema);
const person=new Person({
name:"arpit",
salary:500000,
age:19
}
);
person.save();