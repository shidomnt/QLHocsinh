import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.tbiuy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
    );
    console.log("connected DB");
  } catch (error) {
    console.log(error);
  }
};

export { connectDB };
