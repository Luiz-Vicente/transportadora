function abrirAnuncios(){
    document.getElementById('anuncio').style.display = 'flex';
    document.getElementById('add-anuncio').style.display = 'none';
    document.getElementById('rem-anuncio').style.display = 'none';
}
function addAnuncio(){
    document.getElementById('add-anuncio').style.display = 'flex';
    document.getElementById('anuncio').style.display = 'none';
    document.getElementById('rem-anuncio').style.display = 'none';
}
function remAnuncio(){
    document.getElementById('rem-anuncio').style.display = 'flex';
    document.getElementById('add-anuncio').style.display = 'none';
    document.getElementById('anuncio').style.display = 'none';
}