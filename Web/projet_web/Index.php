<?php
session_start();
error_reporting(E_ALL);
ini_set('display_errors',1);
?>

<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="./view/style.css">
    <title>Test</title>
</head>
<body>


<?php
if (isset($_SESSION["nom"])){
    echo "<h2 class='titre'>Bienvenue ". $_SESSION["nom"]  . " sur jesuispasencoresurdunom.com</h2>";
}
else{
    echo "<h2 class='titre'>Bienvenue sur jesuispasencoresurdunom.com</h2>";
}
?>
<div class="liens">
<a class="touslesproduits" href="index.php?controller=ControllerProduit&action=readAll">voir tous les produits</a>
<?php
if (isset($_SESSION["nom"])){
    echo "<a href='view/deconnexion.php'>se déconnecter</a>";
}
else{
    echo "<a href='view/authentification.php'>se connecter</a>";
}
?>
<a href="view/inscription.php">s'inscrire</a>
</div>
</body>
<script src="view/jquery-3.6.0.min.js"></script>
<script src="view/script.js" ></script>
</html>
<?php
require_once "./lib/File.php";
require File::build_path(array("controller","routeur.php"));



