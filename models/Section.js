const mongoose = reuire("mongoose");
const sectionScheme = new mongoose.Schema({
    sectionName:{
            type:String,
    },
    subSection:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"subSectionSchema",
        required:true,
    }
],
});

module.exports = mongoose.model("Section",sectionScheme);
