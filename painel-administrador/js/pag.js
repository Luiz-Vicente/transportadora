function abrirEmbarcadora(){
    document.getElementById('embarcadora').style.display = 'flex';
    document.getElementById('transportadora').style.display = 'none';
    document.getElementById('autonomo').style.display = 'none';
    document.getElementById('parceiro').style.display = 'none';
}
function abrirTransportadora(){
    document.getElementById('transportadora').style.display = 'flex';
    document.getElementById('embarcadora').style.display = 'none';
    document.getElementById('autonomo').style.display = 'none';
    document.getElementById('parceiro').style.display = 'none';
}
function abrirAutonomo(){
    document.getElementById('autonomo').style.display = 'flex';
    document.getElementById('transportadora').style.display = 'none';
    document.getElementById('embarcadora').style.display = 'none';
    document.getElementById('parceiro').style.display = 'none';
}
function abrirParceiro(){
    document.getElementById('parceiro').style.display = 'flex';
    document.getElementById('transportadora').style.display = 'none';
    document.getElementById('autonomo').style.display = 'none';
    document.getElementById('embarcadora').style.display = 'none';
}