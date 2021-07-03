function abrirAnuncios(){
    document.getElementById('anuncio').style.display = 'flex';
    document.getElementById('add-anuncio').style.display = 'none';
}
function addAnuncio(){
    document.getElementById('add-anuncio').style.display = 'flex';
    document.getElementById('anuncio').style.display = 'none';
}
function fecharAddAnuncio() {
    document.getElementById('add-anuncio').style.display = 'none';
    document.getElementById('anuncio').style.display = 'flex';
}