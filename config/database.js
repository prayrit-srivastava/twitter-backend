import mongoose from "mongoose";

const baseUrl = "mongodb+srv://sriprayrit:Password1@twitter.dyj5plg.mongodb.net/";

export const connectToDb = async () => {
  try {
    await mongoose.connect(`${baseUrl}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected using mongoose");
  } catch (err) {
    console.log(err);
  }
};
