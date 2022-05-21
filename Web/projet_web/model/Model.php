<?php

$path = File::build_path(array("config","Conf.php"));
require_once "{$path}";

class Model
{

    private static $pdo = NULL;

    public static function init(){
        $login = Conf::getLogin();
        $hostname = Conf::getHostname();
        $database_name = Conf::getDatabase();
        $password =  Conf::getPassword();
        // récupère les infos de la BDD depuis Conf
        try{
            // Connexion à la base de données
            // Le dernier argument sert à ce que toutes les chaines de caractères en entrée et sortie de MySql soit dans le codage UTF-8
            self::$pdo = new PDO("mysql:host=$hostname;dbname=$database_name",$login,$password,array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));

            // On active le mode d'affichage des erreurs, et le lancement d'exception en cas d'erreur
            self::$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch(PDOException $e) {
            if (Conf::getDebug()){
                echo $e->getMessage(); // affiche un message d'erreur
                die();
            } else {
                echo 'Une erreur est survenue <a href=""> retour a la page d\'accueil </a>';
            }
        }
    }

    static public function getPDO(){
        // vérifie si $pdo à été initialisé ou non et l'initialise si non
        if (is_null(self::$pdo)){
            self::init();
        }
        return self::$pdo;
    }


}

?>