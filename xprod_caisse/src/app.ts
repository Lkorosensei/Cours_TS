import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";

const payOne = new Payment('Samba Gandega', 700, "Achat des livres");
const payTwo = new Payment('Louis Cabanes', 900, "Achat des Dvds");
const payThree = new Payment('Lucas Maniewsky', 1700, "Achat des fruits");

console.log(payOne, payTwo, payThree);
let payements : Payment[] = []; //tableau vide de paiements : ici la classe Payement devient un type Payement

payements.push(payOne);
payements.push(payTwo);
payements.push(payThree);
//Comment afficher tous les éléments du tableau ?
payements.forEach(

    pay => {
        console.log(pay.recipient, pay.amount, pay.format());
        
    }
);

//Exercice: refaire avec invoice
const invOne = new Invoice("Jean Dupond","achat des livres", 300);
const invTwo = new Invoice("Sadaf Ghadiri","achat des sacs chanel", 5000);
const invThree = new Invoice("Bachir Diaw","achat des lentilles", 5);

console.log(invOne,invTwo,invThree);
let invoice : Invoice[] = [];

invoice.push(invOne);
invoice.push(invTwo);
invoice.push(invThree);

invoice.forEach(

    data => {
        console.log(data.client, data.amount, data.format());
        
    }
);

//Formulaire
const form = document.getElementById('myForm') as HTMLInputElement;

//Inputs
const type = document.querySelector("#type") as HTMLInputElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

console.log(form.children);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    console.log(type.value, tofrom.value,details.value,amount.value);
    
});

