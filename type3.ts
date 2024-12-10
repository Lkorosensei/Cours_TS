// Si l'on déclare une variable sans lui affecter une valeur, son type = any
// Dans ce cas, on peut lui affecter n'importe quel valeur, son type sera toujours any
// => Ceci implique qu'on peut lui réaffecter une valeur d'un autre type.

let x; //Type any

console.log("type de x : " + typeof x);
console.dir("type de x : " + typeof x);

x = 4; //x est encore de type any mais sa valeur est 4, les types de x dans TS et JS sont donc différents

console.log("type de x : " + typeof x);
console.dir("type de x : " + typeof x);

x = "toto"; //instruction valide : x est de type any et vaut "toto"

console.log("type de x " + typeof x);

//On peut imposer le type d'une variable lors de sa déclaration :
let y : number; // y de type number mais sa valeur est undefined
y = 4;          //OK 4 est bien un nombre
y = "titi";     //Erreur de compilation : 'titi' n'est pas un nombre



