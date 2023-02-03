var Mother = /** @class */ (function () {
    function Mother(n, e) {
        this.name = n;
        this.eyes = e;
    }
    Mother.prototype.speak = function () {
        console.log("Je me pr\u00E9sente, je m'appelle ".concat(this.name));
    };
    return Mother;
}());
var henri = new Mother('Henri', 2);
henri.speak();
var helene;
helene = {
    name: 'Hélène',
    eyes: 2,
    speak: function (a) {
        return "".concat(a, " ").concat(this.name);
    }
};
var talkingPerson = function (a, b) {
    return a.speak;
};
