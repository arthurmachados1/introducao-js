const divs = $('div');
const h2s = $('h2');
const titulo = $('#titulo');
const input = $('input');
const paragrafo = $('#paragrafo');
const elementsMarginTop2 = $('.mt-2');
console.log('Elementos com classe mt-2:', elementsMarginTop2);

console.log(input);
function alterarHtml() {
    titulo.text(input.val());
    titulo.css('color', '#ac4389');
    for (let element of elementsMarginTop2) {
        $(element).addClass('mt-4'); 
    }
        input.val=('');

        const novoP = document.createElement('p');
        novoP.textContent = 'Novo texto adicionado via JavaScript DOM';

        $(paragrafo).after(novoP);
  }