import { HasFormatter } from "../interfaces/HasFormatter";

export class Payment implements HasFormatter {

    //Deuxième méthode pour créer une classe

    constructor(
        readonly recipient: string,
        public amount: number,
        public details: string
    ) {
        this.recipient = recipient;
        this.amount = amount;
        this.details = details;
    }
    format(): string {
        return `${this.recipient} reçoit ${this.amount}€ pour ${this.details}`;
    }
}