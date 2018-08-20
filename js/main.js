
document.getElementById("validateenter").onclick = function() {name()};
function name(){
  var x = document.getElementById("enternameid").value;
  if(x.length >= 2) {
     document.getElementById("allentername").style.display="none";
     document.getElementById("playername").innerHTML = x;
   }
}


var player = 0;
var boss = 0;

var divs = document.getElementsByClassName("choice");

for (i=0; i < divs.length; i++){

  divs[i].onclick = function(){
    game(this);
  };
}


document.getElementById("IRattack").style.display = "none";
document.getElementById("IRdef").style.display = "none";
document.getElementById("thanosdef").style.display = "none";
document.getElementById("thanosattack").style.display = "none";
document.getElementById("thanosloose").style.display = "none";
document.getElementById("IRloose").style.display = "none";
document.getElementById("IRwin").style.display = "none";
document.getElementById("thanoswin").style.display = "none";
function game(element){

var liste_choix = ['rock', 'paper', 'cissors'];
  var ordi = liste_choix[Math.floor(Math.random() * liste_choix.length)];
//Egalité
    if (element.id === ordi) {
        // return "Egalité " + element.id;
    }

//Différences
    else if (element.id === 'rock') {

        if (ordi=== 'cissors') {
            player++;
            console.log("La pierre gagne ! Tu gagnes 1 point !");
            document.getElementById("IR").style.display = "none";
            document.getElementById("IRattack").style.display = "block";
            document.getElementById("IRdef").style.display = "none";
            document.getElementById("thanos").style.display = "none";
            document.getElementById("thanosdef").style.display = "block";
            document.getElementById("thanosattack").style.display = "none";
            document.getElementById("thanosloose").style.display = "none";
          document.getElementById("IRloose").style.display = "none";
          document.getElementById("IRwin").style.display = "none";
          document.getElementById("thanoswin").style.display = "none";

        }
        else {
            boss++;
            console.log("La feuille gagne ! L''ordinateur gagne 1 point");
            document.getElementById("IR").style.display = "none";
            document.getElementById("IRattack").style.display = "none";
            document.getElementById("IRdef").style.display = "block";
            document.getElementById("thanos").style.display = "none";
            document.getElementById("thanosdef").style.display = "none";
            document.getElementById("thanosattack").style.display = "block";
            document.getElementById("thanosloose").style.display = "none";
          document.getElementById("IRloose").style.display = "none";
          document.getElementById("IRwin").style.display = "none";
          document.getElementById("thanoswin").style.display = "none";

        }
    }

    else if (element.id === 'paper') {

        if (ordi === 'rock') {
              player++;
            console.log("La feuille gagne ! Tu gagnes 1 point !");
            document.getElementById("IR").style.display = "none";
            document.getElementById("IRattack").style.display = "block";
            document.getElementById("IRdef").style.display = "none";
            document.getElementById("thanos").style.display = "none";
            document.getElementById("thanosdef").style.display = "block";
            document.getElementById("thanosattack").style.display = "none";
            document.getElementById("thanosloose").style.display = "none";
          document.getElementById("IRloose").style.display = "none";
          document.getElementById("IRwin").style.display = "none";
          document.getElementById("thanoswin").style.display = "none";

        }
        else {
          boss++;
            console.log("Le ciseaux gagnent ! L'ordinateur gagne 1 point");
            document.getElementById("IR").style.display = "none";
            document.getElementById("IRattack").style.display = "none";
            document.getElementById("IRdef").style.display = "block";
            document.getElementById("thanos").style.display = "none";
            document.getElementById("thanosdef").style.display = "none";
            document.getElementById("thanosattack").style.display = "block";
            document.getElementById("thanosloose").style.display = "none";
          document.getElementById("IRloose").style.display = "none";
          document.getElementById("IRwin").style.display = "none";
          document.getElementById("thanoswin").style.display = "none";

        }
    }

    else if (element.id === 'cissors') {

        if (ordi === 'paper') {
              player++;
            console.log("Le ciseaux gagne ! Tu gagnes 1 point !");
            document.getElementById("IR").style.display = "none";
            document.getElementById("IRattack").style.display = "block";
            document.getElementById("IRdef").style.display = "none";
            document.getElementById("thanos").style.display = "none";
            document.getElementById("thanosdef").style.display = "block";
            document.getElementById("thanosattack").style.display = "none";
            document.getElementById("thanosloose").style.display = "none";
          document.getElementById("IRloose").style.display = "none";
          document.getElementById("IRwin").style.display = "none";
          document.getElementById("thanoswin").style.display = "none";

        }
        else {
          boss++;
            console.log("La pierre gagne ! L'ordinateur gagne 1 point");
            document.getElementById("IR").style.display = "none";
            document.getElementById("IRattack").style.display = "none";
            document.getElementById("IRdef").style.display = "block";
            document.getElementById("thanos").style.display = "none";
            document.getElementById("thanosdef").style.display = "none";
            document.getElementById("thanosattack").style.display = "block";
            document.getElementById("thanosloose").style.display = "none";
          document.getElementById("IRloose").style.display = "none";
          document.getElementById("IRwin").style.display = "none";
          document.getElementById("thanoswin").style.display = "none";

        }

    }

    if (player===3){
        document.getElementById("rock").style.display = "none";
        document.getElementById("paper").style.display = "none";
        document.getElementById("cissors").style.display = "none";
        document.getElementById("stateoverlay").style.display = "block";
        document.getElementById("stateoverlaywin").style.display = "block";
        document.getElementById("stateoverlayloose").style.display = "none";
        document.getElementById("thanosloose").style.display = "none";
        document.getElementById("IRattack").style.display = "none";
        document.getElementById("IRdef").style.display = "none";
        document.getElementById("thanosdef").style.display = "none";
        document.getElementById("thanosattack").style.display = "none";
        document.getElementById("IR").style.display = "none";
        document.getElementById("thanos").style.display = "none";
        document.getElementById("IRwin").style.display = "block";
        document.getElementById("thanoswin").style.display = "none";



        return;
      }
      else if (boss===3){
        document.getElementById("rock").style.display = "none";
        document.getElementById("paper").style.display = "none";
        document.getElementById("cissors").style.display = "none";
        document.getElementById("stateoverlay").style.display = "block";
        document.getElementById("stateoverlaywin").style.display = "none";
        document.getElementById("stateoverlayloose").style.display = "block";
        document.getElementById("IRloose").style.display = "block";
        document.getElementById("IRattack").style.display = "none";
        document.getElementById("IRdef").style.display = "none";
        document.getElementById("thanosdef").style.display = "none";
        document.getElementById("thanosattack").style.display = "none";
        document.getElementById("IR").style.display = "none";
        document.getElementById("thanos").style.display = "none";
        document.getElementById("IRwin").style.display = "none";
        document.getElementById("thanoswin").style.display = "block";


        return;
      }
      else {
        document.getElementById("talkplayer").innerHTML = "";
      }


document.getElementById("scorebot").innerHTML = boss;
document.getElementById("scoreplayer").innerHTML = player;
document.getElementById("choicebot").innerHTML = "Thanos choose " + ordi;

}
