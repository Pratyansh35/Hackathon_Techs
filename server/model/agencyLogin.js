import mongoose from "mongoose";

const agencyLoginSchema=mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

export default mongoose.model("AgencyAccounts",agencyLoginSchema);