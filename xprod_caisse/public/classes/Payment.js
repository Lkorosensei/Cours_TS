var Payment = /** @class */ (function () {
    //Deuxième méthode pour créer une classe
    function Payment(recipient, amount, details) {
        this.recipient = recipient;
        this.amount = amount;
        this.details = details;
        this.recipient = recipient;
        this.amount = amount;
        this.details = details;
    }
    Payment.prototype.format = function () {
        return "".concat(this.recipient, " re\u00E7oit ").concat(this.amount, "\u20AC pour ").concat(this.details);
    };
    return Payment;
}());
export { Payment };
