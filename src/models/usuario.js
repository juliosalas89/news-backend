import mongoose, { Schema } from "mongoose";

let usuarioSchema = new Schema ({
    apellido: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    localidad: {
        type: String,
        required: true
    },
    codigoPostal: {
        type: Number,
        required: true
    },
    telefono: {
        type: Number,
        required: true
    },
    mail: {
        type: String,
        required: true
    },
    nombreUsuario: {
        type: String,
        required: true
    },
    contraseña: {
        type: String,
        required: true
    },
    estado: {
        type: String,
        required: true
    }
})

let Usuario = mongoose.model('usuario', usuarioSchema);

export default Usuario;