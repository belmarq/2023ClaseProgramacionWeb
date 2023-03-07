const fs = require("fs");
const colores = require("colors")
const crearArchivo = async(base=1, listar=false) =>{

    let salida = "";
    salida +=`Tabla de multiplicar del ${base}\n`;
    for(let i=1; i<=10; i++){
        salida += `${base} x ${i} = ${base*i}\n`;
    }

    if(listar){
        console.log(salida);
    }

    try {
        fs.writeFileSync(`tabla-${base}.txt`, salida);
    }
    catch (err){
        return err;
    }
    return `tabla-${base}.txt`;
}

module.exports ={
    crearArchivo
}