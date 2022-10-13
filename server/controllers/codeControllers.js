const CodeModel = require("../models/code");
const mongoose = require("mongoose");

// get users
const getUsers = async (req, res) => {
    const users = await CodeModel.find({}).sort({ createdAt: -1 });
    res.status(200).json(users);
};

// get single user
const getSingleUser = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "NO SUCH USER FOUND" });
    }

    const user = await CodeModel.findById(id);
    if (!user) {
        return res.status(404).json({ error: "USER NOT FOUND" });
    }
    res.status(200).json(user);
};

//create code block
const createCodeBlock = async (req, res) => {
    const { name, projects } = req.body;

    //add doc to db
    try {
        const workout = await CodeModel.create({ name, projects });
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({ errorMssg: error.message });
    }
};

//delete code block
const deleteUser = async (req,res) => {
    const {id} = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "NO SUCH USER FOUND" });
    }

    const user = await CodeModel.findOneAndDelete({_id: id})

    if (!user) {
        return res.status(404).json({ error: "USER NOT FOUND" });
    }

    res.status(200).json(user)
}

module.exports = {
    createCodeBlock,
    getUsers,
    getSingleUser,
    deleteUser,
};
