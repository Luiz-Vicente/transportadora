function abrirEmbarcadora(){
    document.getElementById('embarcadora').style.display = 'flex';
    document.getElementById('transportadora').style.display = 'none';
    document.getElementById('autonomo').style.display = 'none';
    document.getElementById('anunciante').style.display = 'none';
    document.getElementById('cad-embarcadora').style.display = 'none';
    document.getElementById('cad-transportadora').style.display = 'none';
    document.getElementById('cad-autonomo').style.display = 'none';
    document.getElementById('cad-anunciante').style.display = 'none';
}
function abrirTransportadora(){
    document.getElementById('transportadora').style.display = 'flex';
    document.getElementById('embarcadora').style.display = 'none';
    document.getElementById('autonomo').style.display = 'none';
    document.getElementById('anunciante').style.display = 'none';
    document.getElementById('cad-embarcadora').style.display = 'none';
    document.getElementById('cad-transportadora').style.display = 'none';
    document.getElementById('cad-autonomo').style.display = 'none';
    document.getElementById('cad-anunciante').style.display = 'none';
}
function abrirAutonomo(){
    document.getElementById('autonomo').style.display = 'flex';
    document.getElementById('transportadora').style.display = 'none';
    document.getElementById('embarcadora').style.display = 'none';
    document.getElementById('anunciante').style.display = 'none';
    document.getElementById('cad-embarcadora').style.display = 'none';
    document.getElementById('cad-transportadora').style.display = 'none';
    document.getElementById('cad-autonomo').style.display = 'none';
    document.getElementById('cad-anunciante').style.display = 'none';
}
function abrirAnunciante(){
    document.getElementById('anunciante').style.display = 'flex';
    document.getElementById('transportadora').style.display = 'none';
    document.getElementById('autonomo').style.display = 'none';
    document.getElementById('embarcadora').style.display = 'none';
    document.getElementById('cad-embarcadora').style.display = 'none';
    document.getElementById('cad-transportadora').style.display = 'none';
    document.getElementById('cad-autonomo').style.display = 'none';
    document.getElementById('cad-anunciante').style.display = 'none';
}


function abrirCadEmbarcadora(){
    document.getElementById('cad-embarcadora').style.display = 'flex';
    document.getElementById('embarcadora').style.display = 'none';
}
function fecharCadEmbarcadora(){
    document.getElementById('cad-embarcadora').style.display = 'none';
    document.getElementById('embarcadora').style.display = 'flex';
}

function abrirCadTransportadora(){
    document.getElementById('cad-transportadora').style.display = 'flex';
    document.getElementById('transportadora').style.display = 'none';
}
function fecharCadTransportadora(){
    document.getElementById('cad-transportadora').style.display = 'none';
    document.getElementById('transportadora').style.display = 'flex';
}

function abrirCadAutonomo(){
    document.getElementById('cad-autonomo').style.display = 'flex';
    document.getElementById('autonomo').style.display = 'none';
}
function fecharCadAutonomo(){
    document.getElementById('cad-autonomo').style.display = 'none';
    document.getElementById('autonomo').style.display = 'flex';
}

function abrirCadAnunciante(){
    document.getElementById('cad-anunciante').style.display = 'flex';
    document.getElementById('anunciante').style.display = 'none';
}
function fecharCadAnunciante(){
    document.getElementById('cad-anunciante').style.display = 'none';
    document.getElementById('anunciante').style.display = 'flex';
}