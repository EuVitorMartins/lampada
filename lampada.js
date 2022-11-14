const lamOnOff = document.getElementById('lamOnOff')
const lamp = document.getElementById('lamp')

function isquebra(){
    return lamp.src.indexOf ('quebrada') > -1;
}
function lampOn () {
    if (!isquebra()){
        lamp.src = 'imagem/ligada.jpg';
    }
}
    
function lampOff(){
    if (!isquebra()){
         lamp.src ='imagem/desligada.jpg';
    }
}
function quebra(){
    lamp.src = 'imagem/quebrada.jpg';
}

function lampOnOff(){
    if (lamOnOff.textContent == 'Ligar'){
        lampOn();
        lamOnOff.textContent = 'Desligar';
    } else {
        lampOff();
        lamOnOff.textContent = 'Ligar';
    } 
}

lamOnOff.addEventListener('click', lampOnOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick',quebra);
