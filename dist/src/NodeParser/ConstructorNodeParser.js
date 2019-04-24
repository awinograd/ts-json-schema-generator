"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts = require("typescript");
const ConstructorType_1 = require("../Type/ConstructorType");
class ConstructorNodeParser {
    supportsNode(node) {
        return node.kind === ts.SyntaxKind.ConstructorType;
    }
    createType(node, context) {
        return new ConstructorType_1.ConstructorType();
    }
}
exports.ConstructorNodeParser = ConstructorNodeParser;
//# sourceMappingURL=ConstructorNodeParser.js.map