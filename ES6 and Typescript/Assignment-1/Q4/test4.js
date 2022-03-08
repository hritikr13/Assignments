"use strict";
exports.__esModule = true;
var arrow = function (names) {
    var out = [];
    for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
        var color = names_1[_i];
        var row = {};
        row.name = color;
        row.length = color.length;
        out.push(row);
    }
    return out;
};
var names = ["Hritik", "Ruchika", "Roshni"];
document.write(arrow(names));
