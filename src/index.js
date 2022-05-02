import express from "express";
import path from "path";
import "./database.js";
import router from "./routes/noticias.routes";
const app = express();

app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
    console.log("estoy escuchando el puerto "+ app.get("port"));
})

//midlewares
const morgan = require("morgan");
app.use(morgan('dev'));
const cors = require("cors")
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "../public")));

app.use("/api/noticias", router)