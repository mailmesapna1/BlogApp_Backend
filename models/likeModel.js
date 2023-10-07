// import mongoose
const mongoose = require("mongoose");

// route handler

const likeSchema = new mongoose.Schema({
    // kis post pe like kiya hai
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post", //reference to the post model
    },
    // kis user ne like kiya hai
    user:{
        type:String,
        required:true,
    },
})

// export
module.exports = mongoose.model("Like",likeSchema);
