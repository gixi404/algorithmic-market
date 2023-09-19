import mongoose from "mongoose";

async function connectDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://AlgorithmicMarket:hRGx4SFBtYqbRgJ@cluster0.mvyno5f.mongodb.net/AlgorithmicMarket?retryWrites=true&w=majority"
    );
    console.log("DB conectado");
  } catch (err) {
    throw new Error("Conexión con DB fallida: " + err.message);
  }
}

export { connectDB };
