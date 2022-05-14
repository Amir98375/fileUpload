const mongoose= require("mongoose")

const userSchema = new mongoose.Schema({
    first_name:{type:String,required:true},
    profile:[{type:String,required:false}],
},
{
  timestamps:true,
  versionKey:false  
})
const User = new mongoose.model("profilePic",userSchema)
module.exports=User;