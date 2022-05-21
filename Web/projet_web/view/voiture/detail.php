<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Détails de la voiture</title>
</head>
<body>
<?php

if (!empty($v)){
        $voiture = $v[0];
          echo "<p>la marque est ". $voiture->getMarque() ." </p>";
          echo "<p id='couleur'>la couleur est ". $voiture->getCouleur()."</p>";
          echo "<p>l'immatriculation est : ". $voiture->getImmatriculation()."</p>";
}

?>

</body>
<script>
    couleur = "white"
    couleurDuTexte = "black"
    texteCouleur = document.getElementById("couleur").innerText
    if (texteCouleur.includes("Rouge")){
        couleur = "red"
    } else if (texteCouleur.includes("Jaune")){
        couleur = "yellow"
    }
    else if (texteCouleur.includes("Noir")){
        couleur = "black"
        couleurDuTexte = "white"
    }

    document.body.style.backgroundColor = couleur;
   paragraphe =  document.getElementsByTagName('p')
    for(let i = 0; i<paragraphe.length; i++){
        paragraphe[i].style.color = couleurDuTexte;
    }
</script>
</html>