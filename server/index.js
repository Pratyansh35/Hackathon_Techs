import express from 'express';
import mongoose, { mongo } from 'mongoose'
import bodyParser from 'body-parser';
import { disasterFileRoute } from './routes/disasterFileReport.js';
import { getDisasterInfoROute } from './routes/getDisasterInfoRoute.js';
import { deleteReportRoute } from './routes/deleteReport.js';
import cors from 'cors'
import { agencyRegistrationRoute } from './routes/agencyRegistration.js';
import { getAgencyRoute } from './routes/getAgencyRoute.js';
import {AgencyLoginRouter} from './routes/agencyLoginRoute.js';

const app=express();
app.use(cors())

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
mongoose.connect("mongodb+srv://aravind:aravind@hackathon.ihr2wuh.mongodb.net/Hackathon");
app.use('/',disasterFileRoute)
app.use('/',getDisasterInfoROute)
app.use('/',deleteReportRoute)
app.use("/",agencyRegistrationRoute)
app.use("/",getAgencyRoute);

//For Login Details
app.use("/",AgencyLoginRouter);
app.listen(4000,()=>{
    console.log("server is up")
})