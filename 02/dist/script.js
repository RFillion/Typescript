var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Invoice = /** @class */ (function () {
    function Invoice(client, product, price) {
        this.client = client;
        this.product = product;
        this.price = price;
    }
    return Invoice;
}());
var facture = new Invoice('Dora', 'Template', 45);
var arrFacture = [];
/* ======================================================================================================================================================================================== */
var Mother = /** @class */ (function () {
    function Mother(n, h, e) {
        this.name = n;
        this.hair = h;
        this.eyes = e;
    }
    Mother.prototype.speak = function () {
        console.log("Je suis ".concat(this.name, " et j'ai des cheveux ").concat(this.hair));
    };
    return Mother;
}());
var Children = /** @class */ (function (_super) {
    __extends(Children, _super);
    function Children() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Children.prototype.speak = function () {
        console.log("I am ".concat(this.name, " and I have ").concat(this.hair, " hair"));
    };
    Children.prototype.speakMotherLanguage = function () {
        _super.prototype.speak.call(this);
    };
    return Children;
}(Mother));
var person_01 = new Mother('Rhea', 'maron', 2);
person_01.speak();
var person_02 = new Children('Déméter', 'brown', 2);
person_02.speakMotherLanguage();
/* ======================================================================================================================================================================================== */
