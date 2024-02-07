import mongoose from "mongoose";

const connectMongoDB = () => {
    try {
        mongoose.connect(process.env.MONGODB_URL);
        console.log('connected mongodb')
    }catch(error){
        console.log(error)
    }
}

export default connectMongoDB;