<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>inscription</title>
</head>
<body>

<form method="post" action="../index.php?controller=ControllerUtilisateur&action=signUp">
    <fieldset>

        <!-- Form Name -->
        <legend>Inscription</legend>

        <!--  Nom input -->
        <div>
            <label for="Nominput">Nom</label>
            <div>
                <input id="Nominput" name="nom" type="text" placeholder="Hector" required >
            </div>
        </div>

        <!--  adrmail input -->
        <div>
            <label for="mailinput">Adresse Mail</label>
            <div>
                <input id="mailinput" name="mail" type="text" placeholder="hector@gmail.com" required >
            </div>
        </div>

        <!-- Login input-->
        <div>
            <label for="textinput">Login</label>
            <div >
                <input id="textinput" name="login" type="text" placeholder="hector" required>
            </div>
        </div>



        <!-- Password input-->
        <div >
            <label for="passwordinput">Password</label>
            <div>
                <input id="passwordinput" name="mdp" type="password" placeholder="******" required>
            </div>
        </div>

        <!-- Button -->
        <div>
            <div>
                <button id="singlebutton" name="button">S'inscrire</button>
            </div>
        </div>

    </fieldset>
</form>

</body>
</html>