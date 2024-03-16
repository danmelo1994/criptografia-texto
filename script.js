const inputElemento = document.getElementById('text_input');
const outputElemento = document.getElementById('text_output');

const criptografar = () => {
    let textCrip = "";
    for(let letra of inputElemento.value) {
        if(letra === 'a') {
            letra = 'ai';
        }
        else if(letra === 'e') {
            letra = 'enter';
        }
        else if(letra === 'i') {
            letra = 'imes';
        }
        else if(letra === 'o') {
            letra = 'ober';
        }
        else if(letra === 'u') {
            letra = 'ufat';
        }

        textCrip += letra;
    }
    outputElemento.value = textCrip;
}

const descriptografar = () => {
    let textDescrip = inputElemento.value.trim();
    textDescrip = textDescrip.replace(/ai/g, 'a');
    textDescrip = textDescrip.replace(/enter/g, 'e');
    textDescrip = textDescrip.replace(/imes/g, 'i');
    textDescrip = textDescrip.replace(/ober/g, 'o');
    textDescrip = textDescrip.replace(/ufat/g, 'u');
    outputElemento.value = textDescrip;
}

const copiarTexto = () => {
    let textCopy = document.getElementById('text_output');
    textCopy.select();
    navigator.clipboard.writeText(textCopy.value);
    alert('Texto Copiado!')
}