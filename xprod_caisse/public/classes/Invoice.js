var Invoice = /** @class */ (function () {
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return "".concat(this.client, " doit ").concat(this.amount, "\u20AC pour ").concat(this.details);
    };
    return Invoice;
}());
export { Invoice };
