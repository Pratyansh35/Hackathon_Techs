import express from 'express'
import agencyModel from '../model/agencyModel.js';

const router=express.Router();

router.post('/addagency',async(req,res)=>{
    const {agencyname,location,city,state,address,specializedarea,resources}=req.body;
    const agency=agencyModel({
        agencyname:agencyname,
        location:location,
        city:city,
        state:state,
        address:address,
        specializedarea:specializedarea,
        resources:resources
    })
    try {
        agency.save()
        .then(()=>{
            res.json(agency)
        })
    } catch (error) {
        console.error(error)
    }
})



export {router as agencyRegistrationRoute}