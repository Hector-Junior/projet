<?php

require_once File::build_path(array("controller","ControllerProduit.php"));
require_once File::build_path(array("controller","ControllerUtilisateur.php"));



// On récupère l'action passée dans l'URL
if (!empty($_GET)){
        $action = $_GET["action"];
        $login = null;
        $mdp = null;
        $nom = null;
        $mail = null;
        $controller = $_GET["controller"];
        if(isset($_POST['login']) && isset($_POST['mdp']) ){
            $login = $_POST['login'];
            $mdp = $_POST['mdp'];
        };
        if(isset($_POST['nom']) && isset($_POST['mail']) ){
            $login = $_POST['login'];
            $mdp = $_POST['mdp'];
        };

        $controller::$action($login,$mdp,$nom,$mail);


// utilisateur et produit a mettre en parametre pour que ce soit plus facile
    // insert into panier // delete panier
    // s'inscrire
    // paiement
    // commande
    // trier
    // mettre des tags


}

?>

