const Tag = require('../models/tag');

exports.createTag = async (req, res) => {
    try {
        //fetch data
        const { name, description } = req.body;
        //validation
        if (!name || !description) {
            return res.status(400).json({
                success: true,
                message: "All fields are required",
            });
        }

    // create entry in db
    const tagDetails = await Tag.create({
        name:name,
        description:description,
    });
    console.log(tagDetails);

    // return responce

    return res.status(200).json({
        success:true,
        message:"Tag created successfully",
        tagDetails,
    })
}
catch(error){
    return res.status(500).json({
        succes:false,
        message:error.message,
    })
}

};
// get all handler function

exports.getAllTags = async (req, res) => {
    try{
        const allTags = await Tag.find();
        return res.status(200).json({
            success:true,
            message:"All tags fetched successfully",
            allTags,
        })
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:error.message,
        })

    }
}
