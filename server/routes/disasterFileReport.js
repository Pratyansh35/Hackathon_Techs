import express from 'express'
import disasterModel from '../model/disasterfileModel.js'
import bodyParser from 'body-parser';
const router=express.Router();
router.use(bodyParser.urlencoded({extended:true}));
router.use(bodyParser.json())
router.post('/fileuserreport',async(req,res)=>{
    const {name,phone,address,disaster_type,lat,lng,city,state}= await req.body;
    const location={lat,lng}
    const filedreport=disasterModel({name:name,phone:phone,disaster_type:disaster_type,location:location,address:address,city:city,state:state});
    try {
        filedreport.save();
        res.json({
            message:"Report Submitted"
        });
    } catch (error) {
        console.error(error)
    }
})



export {router as disasterFileRoute}