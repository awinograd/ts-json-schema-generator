import { Definition } from "../Schema/Definition";
import { SubTypeFormatter } from "../SubTypeFormatter";
import { BaseType } from "../Type/BaseType";
import { SymbolType } from "../Type/SymbolType";
export declare class SymbolTypeFormatter implements SubTypeFormatter {
    supportsType(type: SymbolType): boolean;
    getDefinition(type: SymbolType): Definition;
    getChildren(type: SymbolType): BaseType[];
}
