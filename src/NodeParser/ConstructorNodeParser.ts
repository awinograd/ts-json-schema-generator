import * as ts from "typescript";
import { Context } from "../NodeParser";
import { SubNodeParser } from "../SubNodeParser";
import { BaseType } from "../Type/BaseType";
import { ConstructorType } from "../Type/ConstructorType";

export class ConstructorNodeParser implements SubNodeParser {
    public supportsNode(node: ts.ConstructorTypeNode): boolean {
        return node.kind === ts.SyntaxKind.ConstructorType;
    }
    public createType(node: ts.KeywordTypeNode, context: Context): BaseType {
        return new ConstructorType();
    }
}
