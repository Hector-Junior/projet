<?php

$path = File::build_path(array("model","Model.php"));
require_once "{$path}";

class ModelProduit
{

    private $nom;
    private $description;
    private $prix;
    private $id;


    public function getNom()
    {
        return $this->nom;
    }

    public function setNom($nom): void
    {
        $this->nom = $nom;
    }

    public function getDescription()
    {
        return $this->description;
    }

    public function setDescription($description): void
    {
        $this->description = $description;
    }

    public function getPrix()
    {
        return $this->prix;
    }

    public function setPrix($prix): void
    {
        $this->prix = $prix;
    }

    public function getId()
    {
        return $this->id;
    }

    public function setId($id): void
    {
        $this->id = $id;
    }



    //constructeur
    // La syntaxe ... = NULL signifie que l'argument est optionel
// Si un argument optionnel n'est pas fourni,
//   alors il prend la valeur par défaut, NULL dans notre cas
    public function __construct($n = NULL, $d = NULL, $p = NULL,$i = NULL)
    {
        if (!is_null($n) && !is_null($d) && !is_null($i) && !is_null($p)) {
            $this->nom = $n;
            $this->description = $d;
            $this->prix = $p;
            $this->id = $i;
        }

    }

    // affichage
    public function afficher()
    {
        echo "<p>Le nom du produit est : $this->nom</p>";
        echo "<p>Il coute  $this->prix €</p>";
        echo "<p>Description: $this->description</p>";

    }


    static public function getAllProduits(){
        $pdo = new Model();

        $rep = $pdo::getPDO()->query("SELECT * FROM produit");

        $rep->setFetchMode(PDO::FETCH_CLASS, 'ModelProduit');
        $tab_produit = $rep->fetchAll();
        return $tab_produit;
    }


    static public function getVoitureByImmat($immat) {
        $sql = "SELECT * from voiture WHERE immatriculation LIKE :nom_tag"; // peut remplacer le LIKE par un =

        $req_prep = Model::getPDO()->prepare($sql);

        $values = array(
            "nom_tag" => $immat,
        );
        $req_prep->execute($values);

        $req_prep->setFetchMode(PDO::FETCH_CLASS, 'ModelVoiture');
        $tab_voit = $req_prep->fetchAll();
        if (empty($tab_voit))
            return false;
        return $tab_voit;
    }


    public function save(){
        $sql = " INSERT INTO voiture (immatriculation,marque,couleur)
                VALUES ('{$this->immatriculation}','{$this->marque}','{$this->couleur}')";
        $req_prep = Model::getPDO()->prepare($sql);
       try {
           $req_prep->execute();
       } catch (PDOException $e){
           echo "Une erreur est survenue, vous essayez peut être de sauvegarder une voiture déjà existente";
           die();
       }
    }
    public static function deleteVoiture($imma){
        $sql = "DELETE FROM voiture WHERE immatriculation = :imma";

        // Préparation de la requête
        $req_prep = Model::getPDO()->prepare($sql);

        $values = array(
            "imma" => $imma,
        );
        $req_prep->execute($values);

    }
}

?>