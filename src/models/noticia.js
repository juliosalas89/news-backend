import mongoose, { Schema } from "mongoose";

let noticiaSchema = new Schema ({
    titulo: {
        type: String,
        maxlength: 200, 
        required: true,
        unique: true
    },
    descripcion: {
        type: String,
        maxlength: 200, 
        required: true,
        unique: true
    },
    cuerpo: {
        type: String,
        maxlength: 200, 
        required: true,
        unique: true
    },
    foto: {
        type: String,
        required: true,
    },
    pieDeFoto: {
        type: String,
        required: true,
        maxlength: 200
    },
    categoria: {
        type: String,
        required: true
    },
    autor: {
        type: String,
        required: true
    },
    fecha: {
        type: String,
        required: true
    }
})

let Noticia = mongoose.model('noticia', noticiaSchema);

export default Noticia;