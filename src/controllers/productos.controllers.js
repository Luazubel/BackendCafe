import Producto from "../models/producto";

export const listarProductos = async(req, res) => {
    try {
        //buscar la coleccion la lista de productos
        const productos = await Producto.find();
        //envio la respuesta al frontend
        res.status(200).json(productos);


    }catch(error){
        console.log(error)
        res.status(404).json({
            mensaje:"Error al buscar los productos"
        })
    }
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
