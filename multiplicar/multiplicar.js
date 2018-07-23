const fs = require('fs');
const colors = require('colors');

//print_r(module);
let listartabla = (base, limite) => {
    //let data = '';
    // return new Promise((resolve, reject) => {
    console.log('tabla'.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base}*${i}=${base*i}\n`);
    }
    //  resolve(data);
    //});
}
let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('El valor introducido No es un número');
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base}*${i}=${base*i}\n`;
        };

        fs.writeFile(`tablas/tabla ${base}.txt`, data, (err) => {
            if (err) reject(err)
            else {
                resolve(`tabla-${base}.txt`)
            }
            // console.log('El archivo a sido creado');
        });
    });
}
module.exports = {
        crearArchivo,
        listartabla
    }
    /*let crearArchivo = async(base) => {

        let data = '';

        for (let i = 1; i <= 10; i++) {
            data += `${base}*${i}=${base*i}\n`;
        };

        fs.writeFile(`tablas/tabla ${base}.txt`, data, (err) => {
            if (err) {
                throw new Error(err);
            } else {
                return `el archivo tabla ${base}.txt a sido creado`;
            }

            // console.log('El archivo a sido creado');
        });
    }

    module.exports = {
        crearArchivo
    }*/