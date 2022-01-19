<?php
include ('conexao.php');

private $pdo;
public $msgErro = "";
public function conectar($nome, $host, $usuario, $senha){

    global $pdo;
    
    try{
        $pdo = new PDO("msql:dbname=".$nome.";host=".$host,$usuario,$senha);
    } catch(PDOExeption $e){
        $msgErro = $e->getMessage();
    }
    
}

public function cadastrar($email, $senha){
    
    global $pdo;
    //verificar se o email já está cadastrado
    $sql = $pdo->prepare("SELECT * FROM `usuario` WHERE email :e");
    //substitui o primeiro valor pelo segundo
    $sql->bindValue(":e", $email);
    $sql->execute();
    if($sql->rowCount() > 0){
        return false; //já está cadastrado
    }else{
        //caso não esteja cadastrado, cadastrar
        $sql = $pdo->prepare("INSERT INTO email (nome, senha) VALUES (:e, :s)");
        $sql->bindValue(":e", $email);
        $sql->bindValue(":s", md5($senha));
        $sql->execute();
        return true;
    }

}

public function logar($usuario, $senha){
    
    global $pdo;

    $sql = $pdo->prepare("SELECT * FROM `usuario` WHERE email = :e AND senha = :s");
    $sql->bindValue(":e", $email);
    $sql->bindValue(":s", md5($senha));
    $sql->execute();

    if($sql->rowCount()>0){
        //entrar na sessão
        $dado = $sql->apc_fetch(key) //transforma em um array com os nomes das colunas
        session_start();
        $_SESSION['id_usuario'] = $dado['id_usuario'];
        return true;
    }else{
        return false;
    }
}

?>