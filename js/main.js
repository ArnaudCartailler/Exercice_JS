// /*Hello World*/
//
// console.log("Hello World");
//
// /*Calculatrice*/
//
// var a = 3*3;
// console.log(a);
// var b = 12/0;
// console.log(b);
// var c = 4+9+78;
// console.log(c);
// var d = 12-7;
// console.log(d);
// var e = 5^4;
// console.log(e);
//
// /*comm*/
//
// var prenom = prompt("Quel est ton prénom ?");
// console.log("Bienvenue " + prenom);
//
// /*Nom + prénom*/
//
// var prenom = "Arnaud";
// var nom = "Cartailler";
// console.log("Bonjour" +" " + prenom + " " + nom);

/*myNumber*/
//
// var myNumber = "123";
// var myNumber = parseInt("123");
// console.log(myNumber);

/*Maj & Min*/
//
// var str = "salut";
// var str = str.toUpperCase(str);
// console.log(str);
//
// var rt = "SALUT";
// var rt = str.toLowerCase(rt);
// console.log(rt);

/*Bool*/

// var a =5;
// var b = "";
//
// if (b === ""){
//   console.log("true");
// }else{
//   console.log("false");
// }

/*calcul age*/
//
  // var nait = prompt("Ton année de naissance ?");
// var annee = prompt("En quelle année est on ?");
// console.log(annee - nait);

/*Pb de chaussures*/

// var chaussures = 70;
// var jean = 59;
// var tee = 20;
// var reduc = 1-20/100;
// var total = (chaussures + jean + tee) * reduc;
// console.log(total);
// console.log(chaussures + jean + tee);

/*Calculatrice*/

// var prem = Number(prompt("Quel est votre premier chiffre ?"));
// var deux = Number(prompt("Quel est le deuxième ?"));
// console.log(prem + deux);

/*proprio*/
//
// var prenom = prompt("Prenom ?");
// var nom = prompt("Nom ?");
//
// alert("votre prénom comment par " + prenom.substr(0,1) + " et finit par " + prenom.substr(-1));
// alert("votre nom comment par " + nom.substr(0,1) + " et finit par " + nom.substr(-1));
// alert(prenom.substr(0,1) + prenom.substr(-1) + nom.substr(0,1) + nom.substr(-1));
//
// var age = prompt("Age ?");
// var age = age/33;
// alert(Math.round(age));

/* + grand */

// var un = 1;
// var deux = 2;
// var trois = 3;
// var quatre = 4;
//
// console.log(Math.max(un, deux, trois, quatre));

/*âge*/
// var age = Number(prompt("Quel âge as tu ?"));
//
// if (age < 0){
//   alert("Entrez votre âge réel");
// } else if (age >= 21) {
//   alert("accès autorisé");
// } else{
//   alert("accès refusé");
// }
//
//   if (age/2 === Math.round(age/2)){
//   alert("votre âge est pair");
// } else{
//   alert("Il est impair");
// }
//
// if (Number.isInteger(Math.sqrt(age)) === true){
//   alert("votre âge est un carré");
// } else{
//   alert("rien de ouf");
// }

/*Jeu nbre caché*/

// var cach = 42;
// var uti = Number(prompt("Devine le nombre"));
//
// while (uti != cach){
//   if (uti < cach){
//   alert("trop petit");
//   uti = prompt("réessaye");
// } else{
//   alert("Trop grand");
//   uti = prompt("réessaye");
// }
// }
//
// alert("gagné");

/*nbre boucle ligne*/

// for (var i = 1; i <= 100; i++) {
//   console.log(i);
// }

/*Remplir piscine*/
//
// for (var i = 1; i <= 100 ; i++) {
//   if (i%2 == 0)
//   console.log(i);
// }

/*remplir piscine*/


// function piscine (){
//     var longueur = prompt("Entrez la longueur");
//     var largeur = prompt("Entrez la largeur");
//     var profondeur = prompt("Entrez la profondeur");
//     var debit = prompt("Entrez le debit");
//     var resultat = longueur*largeur*profondeur*(debit*1000);
//     return resultat;
// }
//
// alert(piscine());

/*Calcul cercle*/
//
// function perimetre(){
//   var rayon = prompt("Rayon ?");
//   var resultat = Math.PI*rayon;
//   return resultat;
// }
//
// function aire(){
//   var rayon = prompt("Rayon ?");
//   var resultat = 2*Math.PI*rayon;
//   return resultat;
// }
//
// alert(perimetre());
// alert(aire());

/*Pyramide*/
//
//
// var star="*";
// var pyramide=""
// function pyr(){
//   for (i=1; i<=5;i++){
//     pyramide=pyramide+star;
//     console.log(pyramide);
//   }
//
// }
//
// pyr();

/*FIZZ BUZZ*/

// for (var i = 1; i <= 17; i++) {
//   if (Number.isInteger(i/3)){
//     console.log("FIZZ");
//   }else if (Number.isInteger(i/5)){
//     console.log("BUZZ");
//   }else{
//   console.log(i);
// }
// }

/*échiquier*/

// var size = 8;
//
// var board = "";
//
// for (var i = 0; i < size; i++) {
//   for (var j = 0; j < size; j++) {
//     if ((j + i) % 2 == 0)
//       board += " ";
//     else
//       board += "#";
//   }
//   board += "\n";
// }
//
// console.log(board);

/*MATRIX*/

// var x = 1;
// var y = 0;
// var dot = "-----";
//
// for(i=0; i<4; i++){
//   for(j=0; j<4; j++){
//     if(j === i){
//       console.log(x);
//     }
//     else{
//       console.log(y);
//     }
//   }
//   console.log(dot);
// }

/*Nbre pair ?*/

// var x = Number(prompt("Quel est le nombre ?"));
//
// function pay(x){
//   if(x/2 === Math.round(x/2)){
//     console.log("true");
//   }
//   else{
//     console.log("false");
//   }
// }
//
// pay(x);

/*Factorielle*/
//
// function factorielle(nombre){
//
//   if (nombre === Number.isInteger(nombre)){
//
//     var chiffre = nombre ;
//     for (i=1;i<chiffre;i++){
//       nombre = nombre*i;
//     }
//     return nombre;
//   }
//   else {
//     var error ="false";
//     return error;
//   }
// }
//
// console.log(factorielle(5.1));
//
//
// /*tirets*/
//
// function underscore(facture){
//
//   if (typeof facture === "string"){
//     facture = facture.replace(/-/g,"_");
//   }
//   else{
//     console.log("La facture n'est pas une string");
//   }
//   return facture;
// }
// var facture = (underscore(prompt("Quelle est votre facture")));
// console.log(facture);
//
// /*Tableaux*/
//
// var courses = ["salade", "tomate", "oignons"];
//
// console.log(courses[0]);
// console.log(courses[courses.length-1]);
// console.log(courses[1]);

/*Homme*/

// var nom = "cartailler";
// var prenom = "arnaud";
// var age = 25;
// var date = "31 mars 1993";
// var homme = [nom, prenom, age, date];
//
// function tab(homme){
//   console.log(nom);
// }
//
// tab();

/*max tableau*/

// var nbr = Math.max([2, 48, 35, 5])
//
// function read(table){
//
// for (var i = 0; i < table.length; i++) {
//     console.log(table[i]);
// }
// }
// read(nbr);

////////////////////////////////

// var nombres = [10, 3, 17, 2, 9, 12];
//
// var max = nombres[0];
//
// for (i = 1; i < nombres.length; i++) {
//     if (nombres[i] > max) {
//         max = nombres[i];
//     }
// }
//
// console.log("Le nombre maximal est " + max);
//
// // string tableau
//
// var chaines = ["chou","bi","dou","waaaaa"];
//
// var maxi = chaines[0].length;
//
// for (j = 1; j < chaines.length; j++) {
//     if (chaines[j].length > maxi) {
//         maxi = chaines[j].length;
//         var maxString = chaines[j];
//     }
// }
// console.log("La string la plus longue est "+maxString+" et contient "+maxi+" caractère(s)");

/////////////////

/*To do list*/
//
// var doit = prompt("Que vas tu faire ?");


/*PFC*/

var scoreUtilisateur = 0;
var scoreOrdinateur = 0;
var scoreFinal = 0;

function comparer (choix1, choix2) {

//Egalité
    if (choix1 === choix2) {
        return "Egalité " + choixUtilisateur;
    }

//Différences
    else if (choix1 === 'pierre') {

        if (choix2 === 'ciseaux') {
            scoreUtilisateur++;
            return "La pierre gagne ! Tu gagnes 1 point !";
        }
        else {
            scoreOrdinateur++;
            return "La feuille gagne ! L''ordinateur gagne 1 point";
        }
    }

    else if (choix1 === 'feuille') {

        if (choix2 === 'pierre') {
            scoreUtilisateur++;
            return "La feuille gagne ! Tu gagnes 1 point !";
        }
        else {
            scoreOrdinateur++;
            return "Le ciseaux gagnent ! L'ordinateur gagne 1 point";
        }
    }

    else if (choix1 === 'ciseaux') {

        if (choix2 === 'feuille') {
            scoreUtilisateur++;
            return "Le ciseaux gagne ! Tu gagnes 1 point !";
        }
        else {
            scoreOrdinateur++;
            return "La pierre gagne ! L'ordinateur gagne 1 point";
        }

    }

}

while (scoreFinal != 3){

var username = prompt("Quel est ton nom ?").toLowerCase();

var choixUtilisateur = prompt("Pierre, feuille, ciseaux ?").toLowerCase();

var erreur = 1 ;
while (erreur === 1){
  if ((choixUtilisateur === "pierre")||(choixUtilisateur ==="ciseaux")||(choixUtilisateur === "feuille")){

    erreur = 0;
  }
  else {
    console.log("Erreur de saisie ?");
    choixUtilisateur = prompt("Pierre, feuille, ciseaux ?");
  }
}


//choix de l'ordi
  var choixOrdi = Math.random();


  if (choixOrdi <= 0.33) {
      choixOrdi = 'pierre';
  }
  else if (choixOrdi <= 0.66) {
      choixOrdi = 'feuille';
  }
  else {
  choixOrdi = 'ciseaux';
  }


  console.log("L''ordinateur a choisi " + choixOrdi);


//lancement de la comparaison
  console.log(comparer(choixUtilisateur,choixOrdi));

  //affichage du score
  console.log("User "+scoreUtilisateur+"-"+scoreOrdinateur+" Ordinateur");

  if ((scoreUtilisateur===3)||(scoreOrdinateur===3)){
    scoreFinal = 3 ;
  }

}

if (scoreUtilisateur===3){
  console.log("Bravo ! Vous avez gagné !!");
}
else {
  console.log("Dommage..");
}
