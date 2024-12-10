// var empName : string = "Sadaf";
//Tuple
var employee = [1, "Sadaf"];
var personne = [2, "Sadaf", true];
var user; //Déclaration d'un tuple
user = [1, "Pierre", true, 22, "Admin"]; //Initialiser mon tuple de variable
//Tableau de tuples
var salarie;
salarie = [[1, "WIlliam"], [2, "Bill Clinton"], [3, "Jeff Bezos"]];
console.log(salarie);
console.log(salarie[1]);
console.log(salarie[1][1]);
console.table(salarie);
salarie.push([3, "Elon Musk"]);
console.table(salarie);
console.table();
salarie.pop();
console.table(salarie);
salarie[0][1] = salarie[0][1].concat(" Nyacka");
console.table(salarie);
// var test : [[number, string], [string, boolean, number ] , [string, string, number]];
