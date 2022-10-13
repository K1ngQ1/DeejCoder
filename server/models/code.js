const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const codeSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        projects: {
            type: Array,
        },
    },
    { timestamps: true }
)

module.exports = mongoose.model("main", codeSchema);
