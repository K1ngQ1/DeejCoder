const CodeModel = require("../models/code");
const mongoose = require("mongoose");

// get Code
const getCode = async (req, res) => {
    const user_id = req.user._id
    const code = await CodeModel.find({user_id}).sort({ createdAt: -1 });
    res.status(200).json(code);
};

// get single Code
const getSingleCode = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "NO SUCH CODE FOUND" });
    }

    const code = await CodeModel.findById(id);
    if (!code) {
        return res.status(404).json({ error: "CODE NOT FOUND" });
    }
    res.status(200).json(code);
};

//create code block
const createCodeBlock = async (req, res) => {
    const { codeName, sliderConfig, analogId, comPort, sliderCount, configNoise, invertSlider } = req.body;

    //add doc to db
    try {
        const user_id = req.user._id
        const workout = await CodeModel.create({ codeName, sliderConfig, analogId, comPort, sliderCount, configNoise, invertSlider, user_id });
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({ errorMssg: error.message });
    }
};

//delete code block
const deleteCode = async (req,res) => {
    const {id} = req.params;
    //check to see if user is valid and see if code block is found in db
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "NO SUCH CODE FOUND" });
    }
    //delete code block from db
    const code = await CodeModel.findOneAndDelete({_id: id})

    if (!code) {
        return res.status(404).json({ error: "CODE NOT FOUND" });
    }

    res.status(200).json(code)
}

module.exports = {
    createCodeBlock,
    getCode,
    getSingleCode,
    deleteCode,
};
