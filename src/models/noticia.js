import mongoose, { Schema } from "mongoose";

let noticiaSchema = new Schema ({
    titulo: {
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
    cuerpo: {
        type: String,
        required: true
    }
})

let Noticia = mongoose.model('noticia', noticiaSchema);

export default Noticia;