import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
var payOne = new Payment('Samba Gandega', 700, "Achat des livres");
var payTwo = new Payment('Louis Cabanes', 900, "Achat des Dvds");
var payThree = new Payment('Lucas Maniewsky', 1700, "Achat des fruits");
console.log(payOne, payTwo, payThree);
var payements = []; //tableau vide de paiements : ici la classe Payement devient un type Payement
payements.push(payOne);
payements.push(payTwo);
payements.push(payThree);
//Comment afficher tous les éléments du tableau ?
payements.forEach(function (pay) {
    console.log(pay.recipient, pay.amount, pay.format());
});
//Exercice: refaire avec invoice
var invOne = new Invoice("Jean Dupond", "achat des livres", 300);
var invTwo = new Invoice("Sadaf Ghadiri", "achat des sacs chanel", 5000);
var invThree = new Invoice("Bachir Diaw", "achat des lentilles", 5);
console.log(invOne, invTwo, invThree);
var invoice = [];
invoice.push(invOne);
invoice.push(invTwo);
invoice.push(invThree);
invoice.forEach(function (data) {
    console.log(data.client, data.amount, data.format());
});
//Formulaire
var form = document.getElementById('myForm');
//Inputs
var type = document.querySelector("#type");
var tofrom = document.querySelector("#tofrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
console.log(form.children);
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.value);
});
