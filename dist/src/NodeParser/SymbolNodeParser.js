"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts = require("typescript");
const SymbolType_1 = require("../Type/SymbolType");
class SymbolNodeParser {
    supportsNode(node) {
        return node.kind === ts.SyntaxKind.SymbolKeyword;
    }
    createType(node, context) {
        return new SymbolType_1.SymbolType();
    }
}
exports.SymbolNodeParser = SymbolNodeParser;
//# sourceMappingURL=SymbolNodeParser.js.map