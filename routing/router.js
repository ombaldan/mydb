const express = require('express');
const router = express();

router.get("/login", (req, res) => {
    res.render("login");   
});

router.get("/404", (req, res) => {
    res.render("404");  
});

module.exports = router;