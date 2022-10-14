const express = require("express");
const router = express.Router();

const {
    createCodeBlock,
    getCode,
    getSingleCode,
    deleteCode,
} = require("../controllers/codeControllers");

//get all user
router.get("/", getCode);

//get single user
router.get("/:id", getSingleCode);

//post new user
router.post("/", createCodeBlock);

//delete user
router.delete("/:id", deleteCode);

module.exports = router;
