import mongoose from "mongoose";

//Function to connect with MongoDB

export const connectDB = async () => {
    try{
        mongoose.connection.on('connected', ()=>console.log('Database is connected'));
        await mongoose.connect(`${process.env.MONGODB_URL}/chat-app`)
    }
    catch(error){
        console.log(error.message);
    }
}