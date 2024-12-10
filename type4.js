// On peut imposer le type d'une variable avec l'opérateur : type
var x = 4; //superflu, 4 impliquaut déjà que x étaint un number 
// x = false; //erreur de compilation : false n'est pas un nombre
var y = 4; //impose que y soit any, même s'il vaut le nombre 4
console.log("type de y : " + typeof y);
y = "toto"; //valide puisque y est de type any
console.log("type de y : " + typeof y);
var z = undefined; // z est de type undefined
console.log("type de z : " + typeof z);
var u = undefined; //u de type undefined et restera toujours undefined
console.log("type de u : " + typeof u);
u = 3;
console.log("type de u : " + typeof u);
var w1 = console.log("type de w1 : " + typeof w1);
