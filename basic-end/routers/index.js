var express = require("express")
var router = express.Router()

// demo 
router.get("/", (req, res, next) => {
    res.send("Hello word router index")
})

module.exports = router;