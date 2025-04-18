import mongoose from 'mongoose';
import dotenv from 'dotenv';


const dbConnection=()=>{
    try {
        mongoose.connect(process.env.MONGO_URI);
        console.log('Database connected successfully');
    } catch (error) {
        
    }
}
dotenv.config();
export default dbConnection;