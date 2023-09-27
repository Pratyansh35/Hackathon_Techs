import mongoose from 'mongoose';

const agencyModel=mongoose.Schema({
    agencyname:{
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
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    specializedarea:[
        {
            type:String
        }
    ],
    resources:[
        {
            resourcetype:{
                type:String
            },
            count:{
                type:String
            },
            manpower:{
                type:String
            }
        }
    ]
})

export default mongoose.model('agencydata',agencyModel)