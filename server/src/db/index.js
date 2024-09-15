import mongoose from "mongoose"

export const connectDB = async()=>{
    try {
        mongoose.set('strictQuery',false);
        await mongoose.connect(process.env.MONGO_URI);
        console.log('connected to DB');
    } catch (error) {
        console.log('connection error');
        process.exit(1);        
    }
}