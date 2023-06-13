import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const DB_OPTIONS = {
      dbName: "School",
    };
    let connect = await mongoose.connect(process.env.MONGO_URL, DB_OPTIONS);
    console.log(`Connected to DB successfully`, connect.connection.host);
  } catch (error) {
    console.log(error);
    res.send({
      status: false,
      message: "Error while connecting to DB",
    });
  }
};
export default connectDB;
