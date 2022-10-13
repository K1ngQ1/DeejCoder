const express = require("express");
const router = express.Router();

const {
    createCodeBlock,
    getUsers,
    getSingleUser,
    deleteUser,
} = require("../controllers/codeControllers");

//get all user
router.get("/", getUsers);

//get single user
router.get("/:id", getSingleUser);

//post new user
router.post("/", createCodeBlock);

//delete user
router.delete("/:id", deleteUser);

module.exports = router;
