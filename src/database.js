import mongoose from "mongoose";

const url = "mongodb+srv://Luciaazubel:qwertymnbvcxz@cluster0.flxyhu8.mongodb.net/cafecito";
//const url = "mongodb://localhost:27017/cafecito" LOCAL
//const url = "mongodb://127.0.0.1:27017/cafecito"

mongoose.connect(url);

const datosConexion = mongoose.connection;

datosConexion.once("open", ()=>{
    console.log("bd conectada")
})