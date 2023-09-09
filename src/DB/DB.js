import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://AlgorithmicMarket:hRGx4SFBtYqbRgJ@cluster0.mvyno5f.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("DB conected"); 
  } catch (e) {
    throw new Error("no se logro conectar con la base de datos");
  }
};
