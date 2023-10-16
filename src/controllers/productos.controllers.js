import Producto from "../models/producto";

export const listarProductos = (req, res) => {
    res.send("esto es una prueba de una peticion get")
  };

  export const crearProductos = async(req, res) => {
    try{
        console.log(req.body)
        //tomar el body y validarlo
    
        //Guardar ese obejeto en la base db
        const productoNuevo = new Producto(req.body);
        await productoNuevo.save();
        res.status(201).json({
            message: "Se agrego el producto correctamente"
        })
        
    }catch(error){
        console.log(error) ;
        res.status(404).json({
            message: "ocurrio un error al intentar agregar un producto"
        })
    }
  };
