const express = require("express");
const router = express.Router();
const posts = require("../model/post");

router.get("/all",(req,res)=>{
    res.json(posts.getAll())
})
router.post("/new",express.json(),(req,res)=>{
    
    let title = req.body.title;
    let description = req.body.description;
    posts.newPost(title,description);
    res.send("Post added");

})

module.exports = router;