<?php
// chargement du modèle
// on charge la classe ModelVoiture
$path = File::build_path(array("model","ModelProduit.php"));
require_once "{$path}";


class ControllerProduit {
    public static function readAll(){
        // appel au modèle pour gerer la BD
        $tab_p = ModelProduit::getAllProduits();
        // redirige vers la vue
        require(File::build_path(array("view","voiture","list.php")));
    }

    public static function read($imma){
        $v = ModelProduit::getVoitureByImmat($imma);
        if ($v == null){
            require ('../view/voiture/error.php');
        }else{
            require ('../view/voiture/detail.php');
        }

    }
    public static function create(){
        require('../view/voiture/create.php');
    }

    public static function created(){
       $vroum =  new ModelProduit($_GET['marque'], $_GET['couleur'] , $_GET['immatriculation']);
       /* echo "<pre>";
        print_r($vroum);
        echo "</pre>";*/
       $vroum->save();
       ControllerProduit::readAll();
    }

    public static function delete($imma){
        ModelProduit::deleteVoiture($imma);
        ControllerProduit::readAll();

    }
}




?>