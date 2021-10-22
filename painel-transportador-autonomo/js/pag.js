function abrirViagens(){
    document.getElementById('viagens').style.display = 'flex';
    document.getElementById('dados-ajudante').style.display = 'none';
    document.getElementById('dados-caminhao').style.display = 'none';
    document.getElementById('dados-transp-autonomo').style.display = 'none';
}
function abrirDadosCaminhao(){
    document.getElementById('viagens').style.display = 'none';
    document.getElementById('dados-ajudante').style.display = 'none';
    document.getElementById('dados-caminhao').style.display = 'flex';
    document.getElementById('dados-transp-autonomo').style.display = 'none';
}
function abrirDadosAjudante(){
    document.getElementById('viagens').style.display = 'none';
    document.getElementById('dados-ajudante').style.display = 'flex';
    document.getElementById('dados-caminhao').style.display = 'none';
    document.getElementById('dados-transp-autonomo').style.display = 'none';
}
function abrirMeusDados(){
    document.getElementById('viagens').style.display = 'none';
    document.getElementById('dados-ajudante').style.display = 'none';
    document.getElementById('dados-caminhao').style.display = 'none';
    document.getElementById('dados-transp-autonomo').style.display = 'flex';
}