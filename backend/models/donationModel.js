import mongoose from 'mongoose';

const donationSchema = mongoose.Schema({
    key: {
        type: mongoose.Schema.Types.ObjectId,
        // required: true
    },
    date:{
        type : Date,
        // required: true,
        default: Date(Date.now)
    },
    // images:[{
    //     type : String,
    // }],
    name:{
        type : String,
        required: true
    },
    email:{
        type : String,
        required: true
    },
    cat:{
        type : String,
        required: true
    },
    title:{
        type : String,
        required: true,
    },
    desc:{
        type : String,
        required: true,
    },
}) 

const Donation = mongoose.model('donated_products', donationSchema)  

export default Donation