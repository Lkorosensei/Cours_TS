// Typescript a ses propres types, compatibles avec ceux de Javascript
// Après compilation, en JS, ces variables pourront éventuellement avoir un autre type
// Typescript peut inférer des types à partir des valeurs, comme en JS
var x = 4; //Type Number
var y = 'toto'; //Type String
var z = false; //Type Boolean
//Les tableaux
var tab1 = [1, 2, 3]; //type Number[] : tableau contenant uniquement des numbers
var tab2 = ["toto", "titi"]; //type String[] : tableau contenant uniquement des string
var tab3 = [3, "toto"]; //type (number | string)[] : tableau contenant uniquement des numbers et des string
