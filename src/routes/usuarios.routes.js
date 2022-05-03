import { Router } from "express";
import usuariosCTRL from "../controllers/usuarios.controllers";

let { listarUsuarios, crearUsuario, borrarUsuario, editarUsuario } = usuariosCTRL;
let router = Router();

router.route("/").get(listarUsuarios).post(crearUsuario);
router.route("/:id").delete(borrarUsuario).put(editarUsuario);

export default router;