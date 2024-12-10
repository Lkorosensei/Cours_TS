// On peut imposer le type d'une variable avec l'opérateur : type
let x : number = 4; //superflu, 4 impliquaut déjà que x étaint un number 
// x = false; //erreur de compilation : false n'est pas un nombre

let y : any = 4; //impose que y soit any, même s'il vaut le nombre 4

console.log("type de y : " + typeof y);

y = "toto"; //valide puisque y est de type any

console.log("type de y : " + typeof y);

let z = undefined; // z est de type undefined
console.log("type de z : " + typeof z);

let u : undefined = undefined; //u de type undefined et restera toujours undefined
console.log("type de u : " + typeof u);

u = 3;
console.log("type de u : " + typeof u);

let w1 : number = undefined