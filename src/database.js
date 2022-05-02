import mongoose from "mongoose";

const urlDB = "mongodb://localhost:27017/noticias";

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