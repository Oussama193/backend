const express = require("express")
const router=express.Router()
const Accounts=require("../models/Accounts")


//add account
router.post("/adduser",(req,res)=>{
    const {name,num}=req.body;
    newaccount=new Accounts({name:name,num:num})
    newaccount.save()
    .then(data=>res.json(data))
    .catch(err=>res.status(400))
})

//show all users
router.get("/showusers",(req,res)=>{
    Accounts.find()
    .then(data=>res.send(data))
    .catch(err=>res.status(404))
})

//show user by name
router.get("/showuser",(req,res)=>{
    const {firstname}=req.body
    Accounts.find({name:firstname})
    .then(data=>res.send(data))
    .catch(err=>res.status(404))
})

//modify user
router.put("/modifyuser",(req,res)=>{
    const {id,number}=req.body
    Accounts.findByIdAndUpdate({_id:id},{num:number})
    .then(data=>res.send(data))
    .catch(err=>res.status(404))
})

//delete user
router.delete("/deleteuser",(req,res)=>{
    const {id}=req.body
    Accounts.findByIdAndDelete({_id:id})
    .then(data=>res.send(data))
    .catch(err=>res.status(400))
})

module.exports=router