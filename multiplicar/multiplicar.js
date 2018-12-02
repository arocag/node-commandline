const fs = require('fs');
var colors = require('colors');

let data = '';

let listarTabla = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`La base ${base} no es un numero.`);
        }

        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${base*i}\n`);
        }

        resolve(data);
    });
}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`La base ${base} no es un numero.`);
        }

        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${base*i}\n`);
        }

        fs.writeFile(`tablas/tabla_${base}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve('El archivo a sido creado!')
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}