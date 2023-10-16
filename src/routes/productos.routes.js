import { Router } from "express";
import { borrarProducto, crearProductos, editarProducto, listarProductos, obtenerProductos } from "../controllers/productos.controllers";
import { check } from "express-validator";


const router = Router();

router.route("/productos").get(listarProductos)
.post(
    [check("nombreProducto")
    .notEmpty()
    .withMessage("El nombre del producto es un dato obligatorio")
    .isLength({min: 2, max: 100})
    .withMessage("El nombre del producto tiene que tener entre 2 y 100 caracteres"),
    check("precio")
    .notEmpty()
    .withMessage("El precio es un dato obligatorio")
    .isNumeric()
    .withMessage("El precio debe ser un numero")
    .custom((value)=>{
        if(value >= 1 && value<=10000){
            return true
        }else{
            throw new Error("el precio debe estar entre 1 y 10.000")
        }
    }),
    check("imagen")
    .notEmpty()
    .withMessage("La url de la imagen es un dato obligatorio")
    .matches(/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/)
    .withMessage("Debe ingresar una url valida"),
    check("categoria")
    .notEmpty()
    .withMessage("La categoria del producto es un dato obligatorio")
    .isIn(["bebida caliente", "bebida fria", "dulce", "salado"])
    .withMessage("Debe ingresar una categoria valida")
],crearProductos);
router.route("/productos/:id").get(obtenerProductos).put(editarProducto).delete(borrarProducto)



// app.get("/prueba", (req, res) => {
//   res.send("esto es una prueba de una peticion get");
// });

// app.delete("/prueba", (req, res) => {
//   res.send("aqui tendria que borrar un dato");
// });


export default router;