// import mongoose from "mongoose";



// const connectToMongoDb = async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_DB_URI)
//         console.log("Connect to MongoDb!!");
//     } catch (error) {
//         console.log("Error connecting MongoDB :",error.message);
//         console.log("MONGO_DB_URI from env:", process.env.MONGO_DB_URI);
//     }
// }


// export default connectToMongoDb;    


import mongoose from "mongoose";

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




