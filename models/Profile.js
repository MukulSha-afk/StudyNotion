const mongoose = reuire("mongoose");
const profileScheme = new mongoose.Schema({
    gender:{
            type:String,
    },
    dateOfBirth:{
        type:String,
    },
    about:{
        typr:string,
        trim:true,
    },
    constactNumber:{
        typr:Number,
        trim:true,
    }
});

module.exports = mongoose.model("Profile",profileScheme);
