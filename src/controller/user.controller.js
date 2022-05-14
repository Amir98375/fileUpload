const path =require("path")
const express = require("express")

const router= express.Router()
const User = require("../models/user.models")
const uploads=require("../middleware/upload")


router.get("",async(req,res)=>{
    try {
        const user = await User.find().lean().exec()
        return res.status(200).send(user)
    } catch (error) {
        return res.status(400).send({message:error.message})
    }
})
router.post("",uploads.single("profile"),async(req,res)=>{
    try {
        const user = await User.create({
            first_name: req.body.first_name,
             profile: req.file.path,
        
        })

        
      //console.log(req.body)
      //console.log(path.join(__dirname ,"../uploads"))
        return res.status(200).send(user)
    } catch (error) {
        return res.status(400).send({message:error.message})
    }
})

module.exports=router;