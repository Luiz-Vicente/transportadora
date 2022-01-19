<?php

$host = "localhost";
$usuario = "id17942698_admin";
$senha = "Transporte@2021";
$banco = "id17942698_login";

$conexao = new mysqli($host, $usuario, $senha, $banco);
$conexao->set_charset("utf-8");

if($conexao -> connect_errno){
    echo "Falha ao se conectar (".$conexao->connect_errno.")";
} else{
    echo "Conexão bem sucedida";
}
?>