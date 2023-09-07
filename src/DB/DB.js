import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://algorithmicmarket:inssOPGpboy5SpFs@algorithnicmarket.hk7cd85.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("DB conected");
  } catch (e) {
    throw new Error("no se logro conectar con la base de datos");
  }
};
