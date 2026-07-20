const mongoose = reuire("mongoose");
const courseScheme = new mongoose.Schema({
   coureName:{
    type:String,
   },
   courseDescription:{
    type:String,
   },
   instructor:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true,
   },
   whatYouWillLearn:[
    {
        type:String,    
    }
],
courseImage:{
    type:String,
},
ratingReviews:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"RatingReview",
},
price:{
    type:Number,
},
tag:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Tag",
},

});

module.exports = mongoose.model("Course",courseScheme);
