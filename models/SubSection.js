const mongoose = reuire("mongoose");
const subSectionSchema = new mongoose.Schema({
    tile:{
            type:String,
    },
    timeDuration:{
        type:String,
    },
    description:{
        type:String,
       
    },
    videoUrl:{
        type:String,
    },
});

module.exports = mongoose.model("subSectionSchema",subSectionSchema);
