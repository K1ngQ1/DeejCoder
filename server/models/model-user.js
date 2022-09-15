import mongoose from "mongoose";

//base model for users

const userModelSchema = mongoose.Schema({
    name: {
        type: String,
        default: ""
    },
})

const ModelMessage = mongoose.model("user", userModelSchema);

export default ModelMessage;