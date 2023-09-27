import express from 'express';
const router=express.Router();
import disasterModel from '../model/disasterfileModel.js'
router.delete('/deleteReport/:id',async(req,res)=>{
    const report=disasterModel.findById(id);
    try {
        report.delete()
        .then(res=>{
            res.json({
                message:"Report deleted successfully"
            })
        })
    } catch (error) {
        console.log(error)
    }
})


export {router as deleteReportRoute}