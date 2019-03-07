import { Definition } from "../Schema/Definition";
import { SubTypeFormatter } from "../SubTypeFormatter";
import { BaseType } from "../Type/BaseType";
import { SymbolType } from "../Type/SymbolType";

export class SymbolTypeFormatter implements SubTypeFormatter {
    public supportsType(type: SymbolType): boolean {
        return type instanceof SymbolType;
    }
    public getDefinition(type: SymbolType): Definition {
        return {type: "symbol"};
    }
    public getChildren(type: SymbolType): BaseType[] {
        return [];
    }
}
