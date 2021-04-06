
const router = require("express").Router();
const path = require("path");

//index HTML
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));

});

//exercise HTML
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'));

});

//stats HTML
router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'));

});

module.exports = router;