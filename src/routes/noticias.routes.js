import { Router } from "express";
import noticiasCTRL from "../controllers/noticias.controllers";

let {listarNoticias, crearNoticia, borrarNoticia, editarNoticia} = noticiasCTRL;

let router = Router();

router.route('/').get(listarNoticias).post(crearNoticia);

router.route('/:id').delete(borrarNoticia).put(editarNoticia);

export default router