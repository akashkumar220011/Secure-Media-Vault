import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        if (!process.env.MONGO_URI) {
            throw new Error("MONGO_URI is missing in .env file!");
        }

        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected successfully");
    } catch (err) {
        if (err instanceof Error) {
            console.error("MongoDB connection error:", err.message);
        } else {
            console.error("An unknown error occurred during MongoDB connection.");
        }
        process.exit(1);
    }
};

export default connectDB;
