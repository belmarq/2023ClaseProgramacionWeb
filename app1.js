console.clear();
const {crearArchivo} = require("./modulos/multiplicar");

const var1 = require("yargs")
    .option("b",{
        alias:"base",
        type:"number",
        default:1
    })
    .option("l",{
        alias:"listar",
        type:"boolean",
        default:false
    }).argv;
//
const base = var1.base;
const listar = var1.listar;
const nombre = "jose"
crearArchivo(base,listar)
    .then(nombreArchivo => console.log("Archivo:",nombreArchivo, "creado"))
    .catch(err => console.log(err));
