<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>connexion</title>
</head>
<body>

<form class="form-horizontal" method="post" action="../index.php?controller=ControllerUtilisateur&action=signIn">
    <fieldset>

        <!-- Form Name -->
        <legend>Connexion</legend>

        <!-- Text input-->
        <div class="form-group">
            <label class="col-md-4 control-label" for="textinput">Login</label>
            <div class="col-md-4">
                <input id="textinput" name="login" type="text" placeholder="login" class="form-control input-md">
            </div>
        </div>

        <!-- Password input-->
        <div class="form-group">
            <label class="col-md-4 control-label" for="passwordinput">Password</label>
            <div class="col-md-4">
                <input id="passwordinput" name="mdp" type="password" placeholder="******" class="form-control input-md">
            </div>
        </div>

        <!-- Text input-->
        <!--        <div class="form-group">
                    <label class="col-md-4 control-label" for="textinput">Nom</label>
                    <div class="col-md-4">
                        <input id="textinput" name="nom" type="text" placeholder="placeholder" class="form-control input-md">
                    </div>
                </div>
        -->
        <!-- Text input-->
        <!--         <div class="form-group">
                    <label class="col-md-4 control-label" for="textinput">Adresse Mail</label>
                    <div class="col-md-4">
                        <input id="textinput" name="mail" type="text" placeholder="placeholder" class="form-control input-md">
                    </div>
                </div>
-->
        <!-- Button -->
        <div class="form-group">
            <div class="col-md-12 text-center">
                <button id="singlebutton" name="button" class="btn btn-primary">Se connecter</button>
            </div>
        </div>

    </fieldset>
</form>

</body>
</html>