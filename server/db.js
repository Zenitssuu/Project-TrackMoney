import mongoose from "mongoose";

export const dbConnect = async ()=>{
    try {    
        const connectionInstance = await mongoose.connect(process.env.MONGO_URI);
        console.log("connection with DB is successfull: ",connectionInstance.connection.host);        
    } catch (error) {
        console.log("error while connecting DB ", error);
        return ({title:"connection error"})
    }
}