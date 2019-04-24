import * as ts from "typescript";
import { Context } from "../NodeParser";
import { SubNodeParser } from "../SubNodeParser";
import { BaseType } from "../Type/BaseType";
export declare class ConstructorNodeParser implements SubNodeParser {
    supportsNode(node: ts.ConstructorTypeNode): boolean;
    createType(node: ts.KeywordTypeNode, context: Context): BaseType;
}
