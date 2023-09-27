import express from 'express';
import agencyModel from '../model/agencyModel.js';

const route=express.Router();

route.get("/getagencydetails",async(req,res)=>{
    agencyModel.find()
    .then(agencydetails=>{
        res.json(agencydetails);
    })
    .catch(err=>{
        console.log(err)
    })
})

export {route as getAgencyRoute}