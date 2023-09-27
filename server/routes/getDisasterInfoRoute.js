import express from 'express';
import disasterModel from '../model/disasterfileModel.js'
import bodyParser from 'body-parser';
const router=express.Router();
router.use(bodyParser.urlencoded({extended:true}));
router.use(bodyParser.json())

router.get('/getreportdata',async(req,res)=>{
    try {
        disasterModel.find()
        .then(report=>{
            res.json(report);
        })
        .catch(err=>{
            console.log(err)
        })
    } catch (error) {
        console.error(error);
    }
})

export {router as getDisasterInfoROute};