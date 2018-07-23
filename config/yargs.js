const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
    .command('listar', 'imprime en consola la tabla multiplizar', opts)
    .command('crear', 'Crea una tabla', opts)
    .help()
    .argv;


module.exports = {
    argv
}