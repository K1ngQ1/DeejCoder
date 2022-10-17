const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const codeSchema = new Schema(
    {
        codeName: {
            type: String,
            default: "n/a"
        },
        sliderConfig: {
            type: Array,
            default: "n/a"
        },
        analogId: {
            type: Array,
            default: "n/a"
        },
        comPort: {
            type: String,
            default: "n/a"
        },
        sliderCount: {
            type: Number,
            default: 0
        },
        comPort: {
            type: String,
            default: "n/a"
        },
        configNoise: {
            type: String,
            default: "n/a"
        },
        invertSlider: {
            type: String,
            default: "n/a"
        },
        user_id: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
)

module.exports = mongoose.model("code", codeSchema);
