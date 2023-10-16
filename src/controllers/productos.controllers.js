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


  export const obtenerProductos = async(req, res) => {
    try {
        //extraer el id de la ruta 
        console.log(req.params.id)
        //buscar en la BD el producto que coincid con el id
        const productoBuscado = await Producto.findById(req.params.id)
        //responder con el producto encontrado
        res.status(200).json(productoBuscado);
    }catch(error){
        console.log(error)
        res.status(404).json({
            mensaje:"Error! no se encontro el producto buscado"
        })
    }
  };

  export const editarProducto = async(req, res)=>{
    try {
        //extraer el parametro de la ruta y los datos del objeto
        // validar los datos y luego solicitar a la bd actualizar el producto
        await Producto.findByIdAndUpdate(req.params.id, req.body);
        //responder al frontend
        res.status(200).json({
            message: "el producto fue editado correctamente"
        })
        
    } catch (error) {
        console.log(error);
        res.status(400).json({
            mensaje: "Error al intetntar editar um producto"
        })    }
  }