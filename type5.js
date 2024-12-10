// Dabs les tableaux, on précise le type d'éléments que ceux ci contiennent
var x = [1, 2]; //x est de type number[] : ne peut contenir que des entiers
x[2] = 3;
// x[3] = "toto"; //Erreur : "toto" n'est pas un entier 
console.log(x);
console.dir(x);
var y = [];
y[0] = 3; //OK : 3 est un entier
console.log("y est : " + y);
var z = []; //tableau vide contenant des entiers ou des décimauw
z[0] = 'toto'; //OK : 'toto' est une string
z[1] = 3; //OK : 3 est un nombre
// z[2] = false; //Erreur : false n'est ni un entier ni un string
console.log("z = " + z);
console.log("z est un " + typeof z);
var t = null; //tuple dont le T1 est un nombre et T2 est un string
t = [3, "toto"]; //OK : l'ordre est correcte
// t = ["toto",3]; // Erreur : l'ordre n'est pas respecte T1 != number et T2 != string
// t = [3, "toto", "tata"] //Erreur : t = couple not  un triplet
