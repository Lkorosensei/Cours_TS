// Typescript a ses propres types, compatibles avec ceux de Javascript
// Après compilation, en JS, ces variables pourront éventuellement avoir un autre type

// Typescript peut inférer des types à partir des valeurs, comme en JS

let x = 4; //Type Number
let y = 'toto'; //Type String
let z = false; //Type Boolean
let t = []; //Type ???

console.log("x : " +typeof x);
console.log("y : " +typeof y);
console.log("z : " +typeof z);
console.log("t : " + typeof t);


console.dir("x : " +typeof x);
console.dir("y : " +typeof y);
console.dir("z : " +typeof z);
console.dir("t : " + typeof t);


//Les tableaux
let tab1 = [1,2,3]; //type Number[] : tableau contenant uniquement des numbers
let tab2 = ["toto", "titi"]; //type String[] : tableau contenant uniquement des string
let tab3 = [3, "toto"]; //type (number | string)[] : tableau contenant uniquement des numbers et des string

console.log("Le type de tab1 est " + typeof tab1);
console.log("Le type de tab2 est " + typeof tab2);
console.log("Le type de tab3 est " + typeof tab3);

console.dir("Le type de tab1 est " + typeof tab1);
console.dir("Le type de tab2 est " + typeof tab2);
console.dir("Le type de tab3 est " + typeof tab3);
