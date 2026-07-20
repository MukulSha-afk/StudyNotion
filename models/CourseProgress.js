const mongoose = reuire("mongoose");
const courseProgresss = new mongoose.Schema({
courseID:{
     type:mongoose.Schema.Types.ObjectId,
     ref:"Course",
},
completedVideos:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Video",
}
});

module.exports = mongoose.model("courseProgress",courseProgresss);
