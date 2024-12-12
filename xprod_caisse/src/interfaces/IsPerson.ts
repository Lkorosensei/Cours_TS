export interface IsPerson {
    name: string,
    age: number;
    speak(language: string): void; //signature ou contrat des méthodes
    spendMoney(money: number): number;
}