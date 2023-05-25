// getting-started.js
const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/arpitcard");

 // console.log("we are connected");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
const kittySchema = new mongoose.Schema({
  name: String
});

kittySchema.methods.speak = function speak() {
    const greeting = "my name is "+this.name;
     
    //console.log(greeting);
  };
const Kitten = mongoose.model('arpitkitties', kittySchema);

const arpitkitty = new Kitten({ name: 'arpitkitty' });
const arpitkitty1 = new Kitten({ name: 'arpitkitty1' });
//arpitkitty.save();
// arpitkitty1.save();
//arpitkitty.speak();
//arpitkitty1.speak();
const kittens =  Kitten.find({name:"arpitkitty"});
//console.log(kittens);
await Kitten.deleteOne({name:"arpitkitty1"})
