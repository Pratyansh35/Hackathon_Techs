import mongoose from "mongoose";
const disasterModel=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    disaster_type:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    location:{
        lat:{
            type:Number,
            required:true
        },
        lng:{
            type:Number,
            required:true
        }
    },
    city:{
        type:String
    },
    state:{
        type:String
    }
})

export default mongoose.model('reports',disasterModel);