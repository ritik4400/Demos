import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}`);
        console.log(`\nMongodb connected: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error('Mongoose connection failed', error);
        process.exit(1);
    }
};

export default connectDB;
