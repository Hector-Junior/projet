<?php
// chargement du modèle
// on charge la classe ModelVoiture
$path = File::build_path(array("model","ModelUtilisateur.php"));
require_once "{$path}";


class ControllerUtilisateur {
    public static function signIn($login,$mdp){

        // appel au modèle pour gerer la BD
        $user = ModelUtilisateur::signIn($login,$mdp);
        // redirige vers la vue
            header('Location:index.php');
       // require(File::build_path(array("view","voiture","list.php")));
    }

    public static function signUp($login,$mdp,$nom,$mail){
       if (ModelUtilisateur::signUp($login,$mdp,$nom,$mail) == 1){
          // header('Location:view/inscription.php');

       }else{
         //  header('Location:view/authentification.php');

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