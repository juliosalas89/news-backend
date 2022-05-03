import Usuario from "../models/usuario.js";

let usuariosCTRL = {};

usuariosCTRL.listarUsuarios = async (req, res) => {
  try {
    let datosBD = await Usuario.find();
    res.status(200).json(datosBD);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      mensaje: "algo salió mal...",
    });
  }
};

usuariosCTRL.crearUsuario = async (req, res) => {
  try {
    let {
      apellido,
      nombre,
      direccion,
      localidad,
      codigoPostal,
      telefono,
      mail,
      nombreUsuario,
      contraseña,
      estado,
    } = req.body;
    let usuarioNuevo = new Usuario({
      apellido,
      nombre,
      direccion,
      localidad,
      codigoPostal,
      telefono,
      mail,
      nombreUsuario,
      contraseña,
      estado,
    });
    await usuarioNuevo.save();
    res.status(201).json({
      mensaje: "el usuario fue registrado correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      mensaje: "algo salio mal...",
    });
  }
};

usuariosCTRL.borrarUsuario = async (req,res) => {
    try {
        await Usuario.findByIdAndDelete(req.params.id)
        res.status(200).json({
            mensaje: "El usuario se borró con éxito."
        })
    } catch(error) {
        console.log(error);
        res.status(500).json({
            mensaje: "algo salio mal..."
        })
    }
}

usuariosCTRL.editarUsuario = async (req,res) => {
    try {
        await Usuario.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({
            mensaje: "Se actualizaron los datos correctamente."
        })
    } catch(error) {
        console.log(error);
        res.status(500).json({
            mensaje: "algo salio mal..."
        })
    }
}

export default usuariosCTRL;
