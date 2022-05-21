<?php

$path = File::build_path(array("model","Model.php"));
require_once "{$path}";

class ModelUtilisateur
{

    private $nom;
    private $login;
    private $mdp;
    private $adrmail;




    /**
     * @return mixed
     */
    public function getNom()
    {
        return $this->nom;
    }

    /**
     * @param mixed $nom
     */
    public function setNom($nom): void
    {
        $this->nom = $nom;
    }

    /**
     * @return mixed
     */
    public function getLogin()
    {
        return $this->login;
    }

    /**
     * @param mixed $login
     */
    public function setLogin($login): void
    {
        $this->login = $login;
    }

    /**
     * @return mixed
     */
    public function getMdp()
    {
        return $this->mdp;
    }

    /**
     * @param mixed $mdp
     */
    public function setMdp($mdp): void
    {
        $this->mdp = $mdp;
    }

    /**
     * @return mixed
     */
    public function getMail()
    {
        return $this->adrmail;
    }

    /**
     * @param mixed $adrmail
     */
    public function setMail($adrmail): void
    {
        $this->adrmail = $adrmail;
    }


    public function __construct($nom = NULL, $login = NULL, $mdp = NULL, $adrmail = NULL)
    {
        if (!is_null($nom) && !is_null($login) && !is_null($mdp) && !is_null($adrmail)) {
            $this->nom = $nom;
            $this->login = $login;
            $this->mdp = $mdp;
            $this->adrmail = $adrmail;
        }
    }



    // affichage
    public function afficher()
    {
        echo "<p>Nom : $this->nom</p>";
        echo "<p>login :   $this->login €</p>";
        echo "<p>Mail: $this->mail</p>";

    }


    static public function signIn($login,$motdepasse){
        $pdo = new Model();

        $rep = $pdo::getPDO()->prepare("SELECT * FROM user WHERE login=:login AND mdp=:mdp");

        $values = array(
            "login"=>$login,"mdp"=>$motdepasse
        );

        $rep->execute($values);
        $rep->setFetchMode(PDO::FETCH_CLASS, 'ModelUtilisateur');
        $nb_user = $rep->fetchAll();

        $_SESSION['nom'] = $nb_user[0]->nom;
        $_SESSION['login'] = $nb_user[0]->login;
        $_SESSION['adrmail'] = $nb_user[0]->adrmail;
        $_SESSION['mdp'] = $nb_user[0]->mdp;


        return $nb_user;
    }

    static public function signUp($login,$motdepasse,$nom,$mail){
        try {
        $sql = " INSERT INTO user (login,mdp,nom,adrmail)
                VALUES (:login,:motdepasse,:nom,:mail);";
        $req_prep = Model::getPDO()->prepare($sql);

        $values = array(
            "login"=>$login,
            "motdepasse"=>$motdepasse,
            "nom"=>$nom,
            "mail"=>$mail
        );

            $req_prep->execute($values);
        } catch (PDOException $e){
            return 1;
        }

        return 0;
    }


}

?>