import Noticia from "../models/noticia.js";

let noticiasCTRL = {};

noticiasCTRL.crearNoticia = async (req, res) => {
  try {
    let {
      titulo,
      descripcion,
      cuerpo,
      foto,
      pieDeFoto,
      categoria,
      autor,
      fecha,
      destacada
    } = req.body;
    let noticiaNueva = new Noticia({
      titulo,
      descripcion,
      cuerpo,
      foto,
      pieDeFoto,
      categoria,
      autor,
      fecha,
      destacada
    });
    await noticiaNueva.save();
    res.status(201).json({
      mensaje: "la noticia se guardó correctamente en la BD.",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      mensaje: "Algo salió mal...",
    });
  }
};

noticiasCTRL.listarNoticias = async (req, res) => {
  try {
    let datosBD = await Noticia.find();
    res.status(200).json(datosBD);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      mensaje: "Algo salió mal...",
    });
  }
};

noticiasCTRL.borrarNoticia = async (req, res) => {
  try {
    await Noticia.findByIdAndDelete(req.params.id);
    res.status(200).json({
      mensaje: "La noticia fué borrada exitosamente de la BD",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      mensjae: "Algo salió mal...",
    });
  }
};

noticiasCTRL.editarNoticia = async (req, res) => {
  try {
    await Noticia.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      mensaje: "La noticia se modificó exitosamente.",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      mensaje: "Algo salió mal...",
    });
  }
};

export default noticiasCTRL;
