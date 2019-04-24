"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ConstructorType_1 = require("../Type/ConstructorType");
class ConstructorTypeFormatter {
    supportsType(type) {
        return type instanceof ConstructorType_1.ConstructorType;
    }
    getDefinition(type) {
        return { type: "constructor" };
    }
    getChildren(type) {
        return [];
    }
}
exports.ConstructorTypeFormatter = ConstructorTypeFormatter;
//# sourceMappingURL=ConstructorTypeFormatter.js.map