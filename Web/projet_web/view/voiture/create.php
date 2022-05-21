
<form method="get" action="../controller/routeur.php?action=created">
    <fieldset>
        <!-- pour rajouter action=created à l'URL -->
        <input type='hidden' name='action' value='created'>
        <legend>Mon formulaire :</legend>
        <p>
            <label for="immat_id" >Immatriculation</label> : <!-- le for du label contient l'id du input -->
            <input type="text" placeholder="256AB34" name="immatriculation" id="immat_id" required/>
        </p>    <!-- on récupere les infos avec $_GET['name'] -->
        <p>
            <label for="marque_id" >Marque</label> :
            <input type="text" placeholder="Tesla" name="marque" id="marque_id" required/>
        </p>
        <p>
            <label for="couleur_id" >Couleur</label> :
            <input type="text" placeholder="Rouge" name="couleur" id="couleur_id" required/>
        </p>
        <p>
            <input type="submit" value="Envoyer" />
        </p>
    </fieldset>
</form>
<?php
