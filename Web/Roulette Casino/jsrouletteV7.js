$(document).ready(function () {


    (function ($) {
        class CaseNum {

            frequence = 1;
            mise = 0;
            gain = 36;

            constructor(valeur, couleur, parite, douzaine, moitie) {
                this.valeur = valeur;
                this.couleur = couleur;
                this.parite = parite;
                this.douzaine = douzaine;
                this.moitie = moitie;


            }
        }
        //        valeur / couleur / parité / douzaine / moitié 
        // allCase[12].couleur par exemple
        var allCase = [case_0 = new CaseNum(0, "Green", "duaphin", 0, 0),
        case_1 = new CaseNum(1, "Red", "Odd", "1st_12", "1-18"),
        case_2 = new CaseNum(2, "Black", "Even", "1st_12", "1-18"),
        case_3 = new CaseNum(3, "Red", "Odd", "1st_12", "1-18"),
        case_4 = new CaseNum(4, "Black", "Even", "1st_12", "1-18"),
        case_5 = new CaseNum(5, "Red", "Odd", "1st_12", "1-18"),
        case_6 = new CaseNum(6, "Black", "Even", "1st_12", "1-18"),
        case_7 = new CaseNum(7, "Red", "Odd", "1st_12", "1-18"),
        case_8 = new CaseNum(8, "Black", "Even", "1st_12", "1-18"),
        case_9 = new CaseNum(9, "Red", "Odd", "1st_12", "1-18"),
        case_10 = new CaseNum(10, "Black", "Even", "1st_12", "1-18"),
        case_11 = new CaseNum(11, "Black", "Odd", "1st_12", "1-18"),
        case_12 = new CaseNum(12, "Red", "Even", "1st_12", "1-18"),
        case_13 = new CaseNum(13, "Black", "Odd", "2nd_12", "1-18"),
        case_14 = new CaseNum(14, "Red", "Even", "2nd_12", "1-18"),
        case_15 = new CaseNum(15, "Black", "Odd", "2nd_12", "1-18"),
        case_16 = new CaseNum(16, "Red", "Even", "2nd_12", "1-18"),
        case_17 = new CaseNum(17, "Black", "Odd", "2nd_12", "1-18"),
        case_18 = new CaseNum(18, "Red", "Even", "2nd_12", "1-18"),
        case_19 = new CaseNum(19, "Red", "Odd", "2nd_12", "19-36"),
        case_20 = new CaseNum(20, "Black", "Even", "2nd_12", "19-36"),
        case_21 = new CaseNum(21, "Red", "Odd", "2nd_12", "19-36"),
        case_22 = new CaseNum(22, "Black", "Even", "2nd_12", "19-36"),
        case_23 = new CaseNum(23, "Red", "Odd", "2nd_12", "19-36"),
        case_24 = new CaseNum(24, "Black", "Even", "2nd_12", "19-36"),
        case_25 = new CaseNum(25, "Red", "Odd", "3rd_12", "19-36"),
        case_26 = new CaseNum(26, "Black", "Even", "3rd_12", "19-36"),
        case_27 = new CaseNum(27, "Red", "Odd", "3rd_12", "19-36"),
        case_28 = new CaseNum(28, "Black", "Even", "3rd_12", "19-36"),
        case_29 = new CaseNum(29, "Black", "Odd", "3rd_12", "19-36"),
        case_30 = new CaseNum(30, "Red", "Even", "3rd_12", "19-36"),
        case_31 = new CaseNum(31, "Black", "Odd", "3rd_12", "19-36"),
        case_32 = new CaseNum(32, "Red", "Even", "3rd_12", "19-36"),
        case_33 = new CaseNum(33, "Black", "Odd", "3rd_12", "19-36"),
        case_34 = new CaseNum(34, "Red", "Even", "3rd_12", "19-36"),
        case_35 = new CaseNum(35, "Black", "Odd", "3rd_12", "19-36"),
        case_36 = new CaseNum(36, "Red", "Even", "3rd_12", "19-36")]

        // chiffre prècis x36
        // douzaine x3
        // moitié x2

        class CaseMise {

            mise = 0;

            constructor(valeur, condition1, condition2, gain) {
                this.valeur = valeur;
                this.condition1 = condition1; // supérieur à ou égale
                this.condition2 = condition2; // inférieur à 
                this.gain = gain;
            }
        }

        var allMise = [
            mise_1_12 = new CaseMise("1st_12", 0, 13, 3),
            mise_2_12 = new CaseMise("2nd_12", 12, 25, 3),
            mise_3_12 = new CaseMise("3rd_12", 24, 37, 3),
            mise_1_18 = new CaseMise("1-18", 0, 19, 2),
            mise_19_36 = new CaseMise("19-36", 18, 37, 2),
            mise_red = new CaseMise("Red", "Red", 0, 2),
            mise_black = new CaseMise("Black", "Black", 0, 2),
            mise_even = new CaseMise("Even", "Even", 0, 2),
            mise_odd = new CaseMise("Odd", "Odd", 0, 2)]


        listeMise = [];
        everything = allCase.concat(allMise);
        //  alert(everything[38].valeur)
        thunesJoueurs = parseInt(document.querySelector('.moula').textContent);

        // ajout mise en cours + mise à jour de l'argent du joueur 
        $(".case,.casemise,.casemisebis").click(function () {
            var valeur = (this).innerHTML;
            var omc = objectForValeur(valeur); // Object Mise en Cours
            if (thunesJoueurs - valeurmisejeton >= 0) {
                if (verifDoubleMise(omc.valeur)) {
                    listeMise.push(omc); // omc.valeur
                    $(".recapMise").append("<div class='miseencours'><h3>" + omc.valeur + "</h3><div class='conteurmise" + omc.valeur + "'>" + (omc.mise + valeurmisejeton) + "</div><button class='suppr" + omc.valeur + "'>X</button></div>")
                    omc.mise += valeurmisejeton;
                } else {
                    // fait augmenter si deja dans la liste
                    omc.mise += valeurmisejeton;
                    $('.conteurmise' + omc.valeur).html(omc.mise);
                }
                // maj de l'argent en fonction de la mise
                thunesJoueurs -= valeurmisejeton
                $('.moula').html(thunesJoueurs);
            }
            else {
                alert("Tu n'as plus assez d'argent à miser...")
            }

            // suppr mise en cours
            $('.suppr' + valeur).on("click", function () {
                $(this).parents('.miseencours').remove();
                thunesJoueurs += omc.mise
                omc.mise = 0;
                $('.moula').html(thunesJoueurs);
                enleveListValeur(listeMise, omc.valeur);
            })
        })

        // Cherche l'objet associé a la valeur 
        function objectForValeur(valeur) {
            for (i = 0; i < everything.length; i++) {
                if (everything[i].valeur == valeur) {

                    return everything[i]
                }
            }
        }
        // verifie si deja dans la liste
        function verifDoubleMise(valeur) {
            c = true;
            for (i = 0; i < listeMise.length; i++) {
                if (listeMise[i].valeur === valeur) {
                    c = false;
                }
            }

            return c;
        }

        // echange celui deja dans la liste avec le dernier
        function enleveListValeur(liste, value) {
            let index = liste.indexOf(value);
            //alert(value+ "value")
            //alert(index + "index")

            let valeur_mem = liste[index];
            liste[index] = liste[liste.length - 1];
            liste[liste.length - 1] = valeur_mem;
            liste.pop();
            //alert(popped + "popped")
        }
        function enleveList(liste, index) {

            let valeur_mem = liste[index];
            liste[index] = liste[liste.length - 1];
            liste[liste.length - 1] = valeur_mem;

            liste.pop();
            //alert(popped + "popped")
        }
        voir = true;

        $(".historique").click(function () {

            if (voir == true) {
                $(".histo").css("visibility", "visible")
                voir = false;
            } else {
                $(".histo").css("visibility", "hidden")
                voir = true;
            }
        })
        var frequence = [];
        $(".spin").click(function () {
            // choisie un nombre random
            rdCaseChoice = choiceNum(allCase);
            // rajoute nombre rd à frenquence
            frequence.push(rdCaseChoice)
            // vérifie si il y en a plusieurs dans la liste
            frequenceNb(frequence);
            // rajoute le nombre random à l'historique 
            $(".histor").prepend("<div class='histo'><h3>" + rdCaseChoice.valeur + "</h3></div>")
            if (voir == false) {
                $(".histo").css("visibility", "visible");
            }
            $(".compteurHisto").html($(".histor").children().length);
            $("div").remove(".miseencours");
            // vérifie mise et gains
            verifMiseetGains(listeMise, rdCaseChoice);
            for (i = listeMise.length - 1; i >= 0; i--) {
                listeMise[i].mise = 0;
                listeMise.pop();
            }
            
        })
        // Choisie un nombre random et return ces caractèristiques
        function choiceNum(allCase) {
            nombreRD = Math.floor(Math.random() * 37);

            return allCase[nombreRD]
        }

        function frequenceNb(frequence) {

            for (i = 0; i < frequence.length; i++) {
                for (j = 0; j < frequence.length; j++) {
                    if (frequence[i].valeur == frequence[j].valeur && i != j) {
                        frequence[i].frequence++;
                        enleveList(frequence, i);
                    }
                }
            }
            longueur_freq = 0
            for (i = 0; i < frequence.length; i++) {
                longueur_freq += frequence[i].frequence
            }
            triByOrdreCroissant(frequence)
            $("div").remove(".ouik")
            for (i = 0; i < frequence.length; i++) {
                if (frequence[i].frequence > 0) {
                    $(".pourcentage").prepend("<div class='ouik'><h3>" + frequence[i].valeur + " : " + ((frequence[i].frequence / longueur_freq) * 100).toFixed(0) + "% " + frequence[i].frequence + " fois" + "</h3></div>")
                }
            }

        }
        function triByOrdreCroissant(frequence) {
            for (l = 0; l < 100; l++) {

                for (j = 1, i = 0; j < frequence.length; i++, j++) {
                    if (frequence[i].frequence > frequence[j].frequence) {
                        temp = frequence[i]
                        frequence[i] = frequence[j]
                        frequence[j] = temp
                    }
                }

            }
        }



        function verifMiseetGains(listeMise, rdCaseChoice) {

            for (j = 0; j < listeMise.length; j++) {
                var newgain = 0
                if (listeMise[j].valeur == "1st_12" || listeMise[j].valeur == "2nd_12" || listeMise[j].valeur == "3rd_12" || listeMise[j].valeur == "1-18" || listeMise[j].valeur == "19-36") {
                    if (listeMise[j].condition1 < rdCaseChoice.valeur && rdCaseChoice.valeur < listeMise[j].condition2) {
                        newgain = listeMise[j].mise * listeMise[j].gain
                        thunesJoueurs += newgain
                        $('.moula').html(thunesJoueurs);
                    }
                }
                else if (listeMise[j].valeur == "Red" || listeMise[j].valeur == "Black" || listeMise[j].valeur == "Even" || listeMise[j].valeur == "Odd") {
                    if (listeMise[j].valeur == rdCaseChoice.couleur || listeMise[j].valeur == rdCaseChoice.parite) {
                        newgain = listeMise[j].mise * listeMise[j].gain
                        thunesJoueurs += newgain
                        $('.moula').html(thunesJoueurs);
                    }
                }
                else if (listeMise[j].valeur >= 0) {
                    if (listeMise[j].valeur == rdCaseChoice.valeur) {
                        newgain = listeMise[j].mise * listeMise[j].gain
                        thunesJoueurs += newgain
                        $('.moula').html(thunesJoueurs);
                    }
                }

                alert("Vous avez misé sur " + listeMise[j].valeur + " et gagné " + newgain + "€")
            }

        }



        var boxselect = "inset 2px 2px 30px turquoise" // couleur case select 
        var boxunselect = "none"
        // case 
        $('.case').mouseenter(function () {
            $(this).css("box-shadow", boxselect);
        });
        $('.case').mouseleave(function () {
            $(this).css("box-shadow", boxunselect);
        });
        // black
        $('.black.casemisebis').mouseenter(function () {
            $(".case.black").css("box-shadow", boxselect);
        });
        $('.black.casemisebis').mouseleave(function () {
            $(".case.black").css("box-shadow", boxunselect);
        });
        // red
        $('.red.casemisebis').mouseenter(function () {
            $(".case.red").css("box-shadow", boxselect);
        });
        $('.red.casemisebis').mouseleave(function () {
            $(".case.red").css("box-shadow", boxunselect);
        });
        // Douzaine 1
        $('.casemise.douz1').mouseenter(function () {
            $(".douz1 .case").css("box-shadow", boxselect);
        });
        $('.casemise.douz1').mouseleave(function () {
            $(".douz1 .case").css("box-shadow", boxunselect);
        });
        // Douzaine 2
        $('.casemise.douz2').mouseenter(function () {
            $(".douz2 .case").css("box-shadow", boxselect);
        });
        $('.casemise.douz2').mouseleave(function () {
            $(".douz2 .case").css("box-shadow", boxunselect);
        });
        // Douzaine 3
        $('.casemise.douz3').mouseenter(function () {
            $(".douz3 .case").css("box-shadow", boxselect);
        });
        $('.casemise.douz3').mouseleave(function () {
            $(".douz3 .case").css("box-shadow", boxunselect);
        });
        // 1-18
        $('.casemisebis.18').mouseenter(function () {
            cases = document.querySelectorAll('.case');
            for (i = 0; i < cases.length; i++) {
                if (cases[i].innerHTML < 19 && cases[i].innerHTML > 0) {
                    cases[i].style.boxShadow = boxselect;
                }
            }

        });
        $('.casemisebis.18').mouseleave(function () {
            cases = document.querySelectorAll('.case');
            for (i = 0; i < cases.length; i++) {
                if (cases[i].innerHTML < 19 && cases[i].innerHTML > 0) {
                    cases[i].style.boxShadow = boxunselect;
                }
            }

        });

        // 19-36
        $('.casemisebis.36').mouseenter(function () {
            cases = document.querySelectorAll('.case');
            for (i = 0; i < cases.length; i++) {
                if (cases[i].innerHTML > 18) {
                    cases[i].style.boxShadow = boxselect;
                }
            }

        });
        $('.casemisebis.36').mouseleave(function () {
            cases = document.querySelectorAll('.case');
            for (i = 0; i < cases.length; i++) {
                if (cases[i].innerHTML > 18) {
                    cases[i].style.boxShadow = boxunselect;
                }
            }

        });
        // Even 
        $('.casemisebis.even').mouseenter(function () {
            cases = document.querySelectorAll('.case');
            for (i = 0; i < cases.length; i++) {
                if (cases[i].innerHTML % 2 == 0 && cases[i].innerHTML > 0) {
                    cases[i].style.boxShadow = boxselect;
                }
            }

        });
        $('.casemisebis.even').mouseleave(function () {
            cases = document.querySelectorAll('.case');
            for (i = 0; i < cases.length; i++) {
                if (cases[i].innerHTML % 2 == 0 && cases[i].innerHTML > 0) {
                    cases[i].style.boxShadow = boxunselect;
                }
            }

        });
        //Odd 
        $('.casemisebis.odd').mouseenter(function () {
            cases = document.querySelectorAll('.case');
            for (i = 0; i < cases.length; i++) {
                if (cases[i].innerHTML % 2 == 1) {
                    cases[i].style.boxShadow = boxselect;
                }
            }

        });
        $('.casemisebis.odd').mouseleave(function () {
            cases = document.querySelectorAll('.case');
            for (i = 0; i < cases.length; i++) {
                if (cases[i].innerHTML % 2 == 1) {
                    cases[i].style.boxShadow = boxunselect;
                }
            }

        });


        // selectionne un jeton 
        valeurmisejeton = 1;
        // Jeton 1
        $(".miser1").click(function () {
            $(this).css("border", "solid 2px #000bfd");
            $(".miser5").css("border", "dotted 2px white");
            $(".miser10").css("border", "dotted 2px white");
            $(".miser25").css("border", "dotted 2px white");
            $(".miser50").css("border", "dotted 2px white");
            $(".miserAll").css("border", "solid 2px white");
            valeurmisejeton = 1;

        })
        // Jeton 5
        $(".miser5").click(function () {
            $(this).css("border", "solid 2px white");
            $(".miser1").css("border", "dotted 2px #000bfd");
            $(".miser10").css("border", "dotted 2px white");
            $(".miser25").css("border", "dotted 2px white");
            $(".miser50").css("border", "dotted 2px white");
            $(".miserAll").css("border", "solid 2px white");
            valeurmisejeton = 5;
        })
        // Jeton 10
        $(".miser10").click(function () {
            $(this).css("border", "solid 2px white");
            $(".miser1").css("border", "dotted 2px #000bfd");
            $(".miser5").css("border", "dotted 2px white");
            $(".miser25").css("border", "dotted 2px white");
            $(".miser50").css("border", "dotted 2px white");
            $(".miserAll").css("border", "solid 2px white");
            valeurmisejeton = 10;
        })
        // Jeton 25
        $(".miser25").click(function () {
            $(this).css("border", "solid 2px white");
            $(".miser1").css("border", "dotted 2px #000bfd");
            $(".miser5").css("border", "dotted 2px white");
            $(".miser10").css("border", "dotted 2px white");
            $(".miser50").css("border", "dotted 2px white");
            $(".miserAll").css("border", "solid 2px white");
            valeurmisejeton = 25;
        })
        // Jeton 50
        $(".miser50").click(function () {
            $(this).css("border", "solid 2px white");
            $(".miser1").css("border", "dotted 2px #000bfd");
            $(".miser5").css("border", "dotted 2px white");
            $(".miser10").css("border", "dotted 2px white");
            $(".miser25").css("border", "dotted 2px white");
            $(".miserAll").css("border", "solid 2px white");
            valeurmisejeton = 50;
        })
        // Jeton ALL IN 
        $(".miserAll").click(function () {
            $(this).css("border", "solid 2px black");
            $(".miser1").css("border", "dotted 2px #000bfd");
            $(".miser5").css("border", "dotted 2px white");
            $(".miser10").css("border", "dotted 2px white");
            $(".miser25").css("border", "dotted 2px white");
            $(".miser50").css("border", "dotted 2px white");
            valeurmisejeton = thunesJoueurs;
        })


        var mdp = [];
        document.addEventListener('keyup', (event) => {
            if (mdp[mdp.length - 1] === "r" && mdp[mdp.length - 2] == "j" && mdp[mdp.length - 3] == "h") {
                    thunesJoueurs += 100;
                    $('.moula').html(thunesJoueurs);
            }
        })
        // rajoute les touches préssées dans un tableau 
        document.addEventListener('keydown', (event) => {
            const nomTouche = event.key;
            mdp.push(nomTouche);
        
            return;
        }, false);






    })(jQuery);
})

/*
                                             /\
                                            /_|\
                                           /____\
                                          /.-""-.\
                                         /< (()) >\
                                        /__`-..-'__\
                                       /___|____|___\

                                 HECTOR JR IS WATCHING YOU
                                 ᗡƎIℲSI⊥∀S ⊥ON SI ƎH ᗡN∀
                                      ________________
                                   ,'/____|_____|_____\
                                  / /__|_____|_____|___\
                                 / /|_____|_____|_____|_\
                                ' /____|_____|_____|_____\
                              .' /__|_____|_____|_____|___\
                             ,' /|_____|_____|_____|_____|_\
                            /../____|_____|_____|_____|_____\
                           '../__|_____|_____|_____|_____|___\
                          '.:/|_____|_____|_____|_____|_____|_\
   {\__/}               ,':./____|_____|_____|_____|_____|_____\         * ʞϽ*Ⅎ  </
   (._.)               /:../__|_____|_____|_____|_____|_____|___\              (˙‾˙)
    />  F*CK *        /.../|_____|_____|_____|_____|_____|_____|_\            {/‾‾\}
                     '..:/____|_____|_____|_____|_____|_____|_____\
                     \:./ _  _ ___  ____ ____ _    _ _ _ _ _  _ ___\
                     \./                                             \
                      """"""""""""""""""""""""""""""""""""""""""""""""

*/
