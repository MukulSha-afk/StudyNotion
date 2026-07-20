const mongoose = reuire("mongoose");
const userScheme = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    lastName:{
        type:String,
        required:true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
    },
    accountType:{
        type:String,
        enum:["Admin","Student","Instructor"],
        required:true
    },
    additionalDetails:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Instructor" || "Student"
    },

    
courses:[
{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Course",
}
],
image:{
    type:String,
    required:true,
},

courseProgress:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"CourseProgress"
    }
],
});

module.exports = mongoose.model("User",userScheme);
