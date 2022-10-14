const express = require("express");
const router = express.Router();

const {
    createCodeBlock,
    getCode,
    getSingleCode,
    deleteCode,
} = require("../controllers/codeControllers");

//get all code
router.get("/", getCode);

//get single code
router.get("/:id", getSingleCode);

//post new code
router.post("/", createCodeBlock);

//delete code
router.delete("/:id", deleteCode);

module.exports = router;
