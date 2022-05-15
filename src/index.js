import express from "express";
import path from "path";
import "./database.js";
import routerNoticias from "./routes/noticias.routes";
import routerUsuarios from "./routes/usuarios.routes";
import routerCategorias from "./routes/categorias.routes";

const app = express();

app.use(function(req, res, next) {
    req.headers['if-none-match'] = 'no-match-for-this';
    next();    
  });

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

app.use("/api/noticias", routerNoticias)
app.use("/api/usuarios", routerUsuarios)
app.use("/api/categorias", routerCategorias)