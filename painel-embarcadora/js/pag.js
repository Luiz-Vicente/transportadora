function abrirContratar(){
    document.getElementById('contratar').style.display = 'flex';
    document.getElementById('viagem').style.display = 'none';
    document.getElementById('sinistro').style.display = 'none';
    document.getElementById('transportadora-contratada').style.display = 'none';
}
function abrirViagem(){
    document.getElementById('viagem').style.display = 'flex';
    document.getElementById('contratar').style.display = 'none';
    document.getElementById('sinistro').style.display = 'none';
    document.getElementById('transportadora-contratada').style.display = 'none';
}
function abrirSinistro(){
    document.getElementById('sinistro').style.display = 'flex';
    document.getElementById('viagem').style.display = 'none';
    document.getElementById('contratar').style.display = 'none';
    document.getElementById('transportadora-contratada').style.display = 'none';
}

function abrirPedido(){
    document.getElementById('transportadora-contratada').style.display = 'flex';
    document.getElementById('viagem').style.display = 'none';
    document.getElementById('contratar').style.display = 'none';
    document.getElementById('sinistro').style.display = 'none';
}
function fecharPedido(){
    document.getElementById('transportadora-contratada').style.display = 'none';
    document.getElementById('viagem').style.display = 'flex';
    document.getElementById('contratar').style.display = 'none';
    document.getElementById('sinistro').style.display = 'none';
}