import { HasFormatter } from "../interfaces/HasFormatter";

export class Invoice implements HasFormatter {

    readonly client: string;
    private details: string;
    public amount: number;

    constructor(
        client: string,
        details: string,
        amount: number
    ) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }

    format(): string {
        return `${this.client} doit ${this.amount}€ pour ${this.details}`;
        
    }

}