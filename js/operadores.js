const numero1 = 32;
const numero2 = 24;
const numero3 = 44;
const numero4 = 67;
const stringNumero = '1';

if(numero3 >= numero4){
    console.log('Número 3 é maior');
} else if(numero2 > numero3) {
    console.log('Numero 2 é maior')
}else {
    console.log('Número 4 é maior');
}

switch(numero4) {
    case 65:
        console.log('Sessenta e cinco');
        break;
    case 89:
        console.log('Oitenta e nove');
        break;
    case 32:
        console.log('Trinta e dois');
        break;
    default:
        console.log('Numero não encontrado');
        break;
}