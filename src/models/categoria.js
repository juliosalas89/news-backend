import mongoose, {Schema} from "mongoose"

let categoriaSchema = new Schema ({
    nombre: {
        type: String,
        required: true,
        unique: true
    },
    destacada: {
        type: Boolean,
        required: true
    }
})

let Categoria = mongoose.model('categoria', categoriaSchema);

export default Categoria;