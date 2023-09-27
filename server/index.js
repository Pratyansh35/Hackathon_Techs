import express from 'express';
import mongoose, { mongo } from 'mongoose'
import bodyParser from 'body-parser';
import { disasterFileRoute } from './routes/disasterFileReport.js';
import { getDisasterInfoROute } from './routes/getDisasterInfoRoute.js';
import { deleteReportRoute } from './routes/deleteReport.js';
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
mongoose.connect("mongodb+srv://aravind:aravind@hackathon.ihr2wuh.mongodb.net/Hackathon");
app.use('/',disasterFileRoute)
app.use('/',getDisasterInfoROute)
app.use('/',deleteReportRoute)

app.listen(3001,()=>{
    console.log("server is up")
})