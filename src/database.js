import mongoose from "mongoose";

const urlDB = "mongodb+srv://juliosalas89:jasv3397@cluster0.g3ciq.mongodb.net/test";

mongoose.connect(urlDB, {
  autoIndex: false,
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
  family: 4
});

const connection = mongoose.connection;

connection.once("open", () => {
    console.log("Base de Datos conectada")
})