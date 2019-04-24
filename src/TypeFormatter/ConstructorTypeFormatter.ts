import { Definition } from "../Schema/Definition";
import { SubTypeFormatter } from "../SubTypeFormatter";
import { BaseType } from "../Type/BaseType";
import { ConstructorType } from "../Type/ConstructorType";

export class ConstructorTypeFormatter implements SubTypeFormatter {
    public supportsType(type: ConstructorType): boolean {
        return type instanceof ConstructorType;
    }
    public getDefinition(type: ConstructorType): Definition {
        return {type: "constructor"};
    }
    public getChildren(type: ConstructorType): BaseType[] {
        return [];
    }
}
