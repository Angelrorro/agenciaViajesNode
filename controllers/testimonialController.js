import { Testimonial } from "../models/Testimoniales.js";

const guardarTestimonial = async (req, res) => {
    // Validar
    const { nombre, correo, mensaje} = req.body; // lo que el usuario escriba en el formulario

    const errores = [];

    if (nombre.trim() === '') { // trim quita los espacios en blanco al inicio y al final
        errores.push({mensaje: 'El nombre esta vacio'});
    }

    if (correo.trim() === '') { // trim quita los espacios en blanco al inicio y al final
        errores.push({mensaje: 'El correo esta vacio'});
    }

    if (mensaje.trim() === '') { // trim quita los espacios en blanco al inicio y al final
        errores.push({mensaje: 'El mensaje esta vacio'});
    }

    if(errores.length > 0) {

        // Consultar testimonailes existentes
        const testimoniales = await Testimonial.findAll();

        // Mostrar la vista con errores
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        });
    } else {
        // Almacenarlo en la bd
        try {
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            });
            
            res.redirect('/testimoniales');
        } catch (error) {
            console.log(error);
        }
    }
}

export {
    guardarTestimonial
} 