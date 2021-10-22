function abrirCaminhoes(){
    document.getElementById('caminhoes').style.display = 'flex';
    document.getElementById('viagens').style.display = 'none';
    document.getElementById('sinistros').style.display = 'none';
    document.getElementById('responde-viagem').style.display = 'none';
    document.getElementById('add-sinistro').style.display = 'none';
    document.getElementById('responde-viagem').style.display = 'none';
}
function abrirViagens(){
    document.getElementById('viagens').style.display = 'flex';
    document.getElementById('caminhoes').style.display = 'none';
    document.getElementById('sinistros').style.display = 'none';
    document.getElementById('add-caminhao').style.display = 'none';
    document.getElementById('add-sinistro').style.display = 'none';
    document.getElementById('responde-viagem').style.display = 'none';
}
function abrirSinistros(){
    document.getElementById('sinistros').style.display = 'flex';
    document.getElementById('caminhoes').style.display = 'none';
    document.getElementById('viagens').style.display = 'none';
    document.getElementById('add-caminhao').style.display = 'none';
    document.getElementById('responde-viagem').style.display = 'none';
    document.getElementById('responde-viagem').style.display = 'none';
}



function abrirAddcaminhao(){
    document.getElementById('add-caminhao').style.display = 'flex';
    document.getElementById('caminhoes').style.display = 'none';
}
function fecharAddcaminhao(){
    document.getElementById('add-caminhao').style.display = 'none';
    document.getElementById('caminhoes').style.display = 'flex';
}

function abrirRespondeviagem(){
    document.getElementById('responde-viagem').style.display = 'flex';
    document.getElementById('viagens').style.display = 'none';
}
function fecharRespondeviagem(){
    document.getElementById('responde-viagem').style.display = 'none';
    document.getElementById('viagens').style.display = 'flex';
}

function abrirAddsinistro(){
    document.getElementById('add-sinistro').style.display = 'flex';
    document.getElementById('sinistros').style.display = 'none';
}
function fecharAddsinistro(){
    document.getElementById('add-sinistro').style.display = 'none';
    document.getElementById('sinistros').style.display = 'flex';
}