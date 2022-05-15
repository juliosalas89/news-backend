import { Router } from "express";
import categoriasCTRL from "../controllers/categorias.controllers";

let { listarCategorias, crearCategoria, borrarCategoria, editarCategoria } = categoriasCTRL;
let router = Router();

router.route("/").get(listarCategorias).post(crearCategoria);
router.route("/:id").delete(borrarCategoria).put(editarCategoria);

export default router;