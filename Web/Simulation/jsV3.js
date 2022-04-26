
// créer le cadre 
largeur = ($(window).width()) / 10 - 10;
hauteur = ($(window).height()) / 10 - 10;
largeurbis = largeur * 10
largeurUse = parseInt(largeur)
hauteurUse = parseInt(hauteur)


$('.peinture').css("width", largeurbis);

for (i = hauteurUse; i >= 0; i--) {
    $(".peinture").prepend("<div class='ligne" + i + " skin'></div>")
}
for (l = hauteurUse; l >= 0; l--) {
    for (o = largeurUse; o >= 0; o--) {
        $(".ligne" + l).prepend("<div class='case" + o + "'></div>")
    }
}







class Animals {

    hungry = 100;
    miam = 0;
    direction = 0;
    target = false;
    YTargetApple = 0;
    XTargetApple = 0;
    constructor(vision, couleur, positionX, positionY) {
        this.vision = vision;
        this.couleur = couleur;
        this.positionX = positionX; // num case 
        this.positionY = positionY; // num ligne

    }

    // vers random 
    versOù() {
        var h = ["h", "b", "g", "d"]
        // $(".ligne" + this.positionY + " > .case" + this.positionX).css("background-color", this.couleur)
        return h[Math.floor(Math.random() * 4)]
    }
    // repère une pomme 
    aroundUs() {
        for (i = this.positionX - this.vision; i <= this.positionX + this.vision; i++) {
            for (var k = this.positionY - this.vision; k <= this.positionY + this.vision; k++) {
                if ($(".ligne" + k + " > .case" + i).css("background-color") == "rgb(255, 0, 0)") {
                    this.target = true
                    this.YTargetApple = k
                    this.XTargetApple = i                    
                }
                // $(".ligne" + k + " > .case" + i).css("background-color", "grey")
            }
        }
        
    }
    // déplace jusqu'a la pomme
    findApple() {
       // alert(this.XTargetApple+"X de la target ")
        //alert(this.YTargetApple+"Y de la target ")

        if (this.XTargetApple > this.positionX) {
            this.direction = "d"
        } else if (this.XTargetApple < this.positionX) {
            this.direction = "g"
        }
        else if (this.YTargetApple > this.positionY) {
            this.direction = "b"
        } else if (this.YTargetApple < this.positionY) {
            this.direction = "h"
        }
        if (this.XTargetApple == this.positionX && this.YTargetApple == this.positionY) {
            this.target = false
            this.hungry+= 20
        }
        var a = 0 
        var b = 0
        if (this.direction == "h") {
            a = -1
        } else if (this.direction == "g") {
            b = -1
        } else if (this.direction == "b") {
            a = 1
        } else if (this.direction == "d") {
            b = 1
        }
        $(".ligne" + this.positionY + " > .case" + this.positionX).css("background-color", "white")
        $(".ligne" + (this.positionY + a) + " > .case" + (this.positionX + b)).css("background-color", this.couleur)
        //  $(".ligne" + (this.positionY + a) + " > .case" + (this.positionX + b)).css("background-size", "10px 10px")

        this.positionY = this.positionY + a
        this.positionX = this.positionX + b

    }


    life() {
        $(".hungry").html("Faim : "+ this.hungry)
        if (this.target == true) {
            this.findApple()
        }
        else{
            this.aroundUs()
            this.deplacement()
        }
    }
    // empeche de sortir de la zone
    mur() {
        if (this.positionX == 0) {
            this.direction = "d"
        } else if (this.positionX == largeurUse - 1) {
            this.direction = "g"
        } else if (this.positionY == 0) {
            this.direction = "b"
        } else if (this.positionY == hauteurUse - 1) {
            this.direction = "h"
        }
    }

    deplacement() {
        var a = 0
        var b = 0
        

        this.direction = this.versOù()
        this.mur()    
        if (this.direction == "h") {
            a = -1
        } else if (this.direction == "g") {
            b = -1
        } else if (this.direction == "b") {
            a = 1
        } else if (this.direction == "d") {
            b = 1
        }
        $(".ligne" + this.positionY + " > .case" + this.positionX).css("background-color", "white")
        $(".ligne" + (this.positionY + a) + " > .case" + (this.positionX + b)).css("background-color", this.couleur)
        //  $(".ligne" + (this.positionY + a) + " > .case" + (this.positionX + b)).css("background-size", "10px 10px")

        this.positionY = this.positionY + a
        this.positionX = this.positionX + b
        // $(".coordX").html("X : "+ this.positionX)
        // $(".coordY").html("Y : "+ this.positionY)
        



    }
}

var meuh = "url(./images/cow.png)"
var oink = "url(./images/pig.png)"
var apple = "url(./images/apple.png)"
var alien = "url(./images/alien.png)"


var troupeau = [
    cochon = new Animals(5, "pink", positionRdX(), positionRdY()),
    vache = new Animals(5, "black", positionRdX(), positionRdY()),
    vache2 = new Animals(5, "black", positionRdX(), positionRdY()),
    cochon2 = new Animals(5, "pink", positionRdX(), positionRdY()),
    hector = new Animals(10, "cyan", positionRdX(), positionRdY())
]


var playeur = new Animals(5, "blue", positionRdX(), positionRdY());

timermoove = setInterval(simulationOn, 30);
timerfruit = setInterval(spawnFruit, 100);

function simulationOn() {
    hector.life()
    if(hector.hungry == 0){
        hector = null
    }
    hector.hungry--

   /* for (i = 0; i < troupeau.length; i++) {
        troupeau[i].life()
    }*/
}
function spawnFruit() {
    fruit()
}
// position random 
function positionRdX() {
    return Math.floor(Math.random() * (largeurUse))
}
function positionRdY() {
    return Math.floor(Math.random() * (hauteurUse))
}

// Spawn des fruits 
function fruit() {
    $(".ligne" + (positionRdY()) + " > .case" + (positionRdX())).css("background-color", "rgb(255,0,0)")

}

// compteur Time 
sec = 1;
$(".compteur").html(sec + " secondes")
sec++
setInterval(function () {
    $(".compteur").html(sec + " secondes")
    sec += 1

}, 1000)


/* pour retarder une exécution : 
 setTimeout(function(){

}, 3000);

pour répéter : 
setInterval(function(){}, 1000);
*/

$(".stop").click(function () {
    clearInterval(timermoove)
    clearInterval(timerfruit)
})
$(".relance").click(function () {
    timermoove = setInterval(moove, 100);
    timerfruit = setInterval(fruit, 1000);
})




// Contrôle du joueur 

document.addEventListener('keydown', (event) => {
    const nomTouche = event.key;
    if (nomTouche == 'ArrowUp') {
        playeur.direction = 'h'
        playeur.deplacement()
    } else if (nomTouche == 'ArrowDown') {
        playeur.direction = 'b'
        playeur.deplacement()
    } else if (nomTouche == 'ArrowLeft') {
        playeur.direction = 'g'
        playeur.deplacement()
    } else if (nomTouche == 'ArrowRight') {
        playeur.direction = 'd'
        playeur.deplacement()
    } else if (nomTouche == 'n') {
        playeur.aroundUs();
    }


    return;
}, false);


