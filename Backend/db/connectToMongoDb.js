// import mongoose from "mongoose";
// import dotenv from "dotenv";

// dotenv.config(); // Load .env variables

// const connectToMongoDb = async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_DB_URI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log("✅ Connected to MongoDB!");
//     } catch (error) {
//         console.error("❌ Error connecting MongoDB:", error.message);
//         console.log("🔍 MONGO_DB_URI from env:", process.env.MONGO_DB_URI);
//     }
// };

// export default connectToMongoDb;


import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env

const connectToMongoDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("✅ Connected to MongoDB!");
    } catch (error) {
        console.error("❌ Error connecting MongoDB:", error.message);
        console.log("🔍 MONGO_DB_URI from env:", process.env.MONGO_DB_URI);
    }
};

export default connectToMongoDb;
