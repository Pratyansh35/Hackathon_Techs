import express from "express";
import bodyParser from "body-parser";
import AgencyAccounts from "../model/agencyLogin.js";

const router=express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:true}));

router.get("/getLogin", async(req,res)=>{
    const items=await AgencyAccounts.find();
    res.json(items);
})

router.post("/postLogin", async(req,res)=>{
    const {email,password}=req.body;
    const credentials=AgencyAccounts({
        email:email,
        password:password
    })
    try{
        credentials.save();
        res.json({"Message":"Added successfully"});
    }
    catch(err)
    {
        console.log("error adding the credentials");
        res.json({"message":"Error adding the credentials"});
    }
})

export {router as AgencyLoginRouter};