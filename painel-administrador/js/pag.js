function abrirEmbarcadora(){
    document.getElementById('embarcadora').style.display = 'flex';
    document.getElementById('transportadora').style.display = 'none';
    document.getElementById('autonomo').style.display = 'none';
    document.getElementById('anunciante').style.display = 'none';
}
function abrirTransportadora(){
    document.getElementById('transportadora').style.display = 'flex';
    document.getElementById('embarcadora').style.display = 'none';
    document.getElementById('autonomo').style.display = 'none';
    document.getElementById('anunciante').style.display = 'none';
}
function abrirAutonomo(){
    document.getElementById('autonomo').style.display = 'flex';
    document.getElementById('transportadora').style.display = 'none';
    document.getElementById('embarcadora').style.display = 'none';
    document.getElementById('anunciante').style.display = 'none';
}
function abrirAnunciante(){
    document.getElementById('anunciante').style.display = 'flex';
    document.getElementById('transportadora').style.display = 'none';
    document.getElementById('autonomo').style.display = 'none';
    document.getElementById('embarcadora').style.display = 'none';
}


function abrirCadEmbarcadora(){
    document.getElementById('cad-embarcadora').style.display = 'flex';
    document.getElementById('embarcadora').style.display = 'none';
}
function fecharCadEmbarcadora(){
    document.getElementById('cad-embarcadora').style.display = 'none';
    document.getElementById('embarcadora').style.display = 'flex';
}