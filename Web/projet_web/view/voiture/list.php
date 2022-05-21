
<?php

if (!empty($tab_p)){
   /* echo '<pre>';
    print_r($tab_p);
    echo '</pre>';
*/
    echo "<div class='liste'>";
   foreach ($tab_p as $p){
       $src = "src/". $p->getId().".gif";
       echo "<div class='cadre'>
                    <h2>".$p->getNom()."</h2>
                    <p>". $p->getDescription() ."</p>
                    <h3>".$p->getPrix()."€</h3>
                    <img class='gif' src='".$src."'>
             </div>";
   }
    echo "</div>";
}
?>
