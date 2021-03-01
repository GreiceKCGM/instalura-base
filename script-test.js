const shell = require('shelljs');

console.log('Ola Mundo');

const resultado =shell.exec('git diff --name-only Modulo02_Aula05..main', { silent: true });

console.log(resultado.stdout.split('\n'));
