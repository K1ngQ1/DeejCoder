const express = require("express");
const router = express.Router();

//import for controller functions for request logic
const {
    createCodeBlock,
    getCode,
    getSingleCode,
    deleteCode,
} = require("../controllers/codeControllers");

//middleware auth import and function below it, require auth for all code routes
const requireAuth = require("../middleware/requireAuth");
router.use(requireAuth);

//get all code
router.get("/", getCode);

//get single code
router.get("/:id", getSingleCode);

//post new code
router.post("/", createCodeBlock);

//delete code
router.delete("/:id", deleteCode);

module.exports = router;
