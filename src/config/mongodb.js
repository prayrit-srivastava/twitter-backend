import mongoose from "mongoose";
const url = "mongodb://127.0.0.1:27017/twitter";

const connectToDb = async () => {
    try {
      await mongoose.connect(`${url}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("MongoDB connected using mongoose");
    } catch (err) {
      console.log(err);
    }
  };
export default connectToDb;