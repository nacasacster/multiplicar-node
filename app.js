//requireds
const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crearArchivo, listartabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {

    case 'Listar':
        listartabla(argv.b, argv.limite);
        break;
    case 'Crear':
        //console.log(argv);
        crearArchivo(argv.b, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
        //break;        

}