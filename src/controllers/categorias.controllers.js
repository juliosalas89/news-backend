import Categoria from "../models/categoria.js"

let categoriasCTRL = {};

categoriasCTRL.crearCategoria = async (req,res) => {
    try {
        let {nombre, destacada} = req.body;
        let categoriaNueva = new Categoria ({
            nombre,
            destacada
        })
        await categoriaNueva.save()
        res.status(201).json({
            respuesta: "la categoria se agregó exitosamente a la base de datos"
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            respuesta: "Algo salió mal.. intentalo de nuevo."
        })
    }
}

categoriasCTRL.listarCategorias = async (req,res) => {
    try {
        let datosBD = await Categoria.find();
        res.status(200).json(datosBD)
    } catch(error) {
        console.log(error);
        res.status(500).json({
            respuesta: "algo salió mal..."
        })
    }
}

categoriasCTRL.borrarCategoria = async (req,res) => {
    try {
        await Categoria.findByIdAndRemove(req.params.id);
        res.status(200).json({
            respuesta: "La categoría se eliminó exitosamente de la base de datos"
        }) 
    } catch(error) {
        console.log(error);
        res.status(500).json({
            respuesta: "algo salio mal..."
        })
    }
} 

categoriasCTRL.editarCategoria = async (req,res) => {
    try {
        await Categoria.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({
            respuesta: "La categoría se modificó exitosamente de la base de datos"
        }) 
    } catch(error) {
        console.log(error);
        res.status(500).json({
            respuesta: "algo salio mal..."
        })
    }
}

export default categoriasCTRL;