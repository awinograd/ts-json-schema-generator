import { Definition } from "../Schema/Definition";
import { SubTypeFormatter } from "../SubTypeFormatter";
import { BaseType } from "../Type/BaseType";
import { ConstructorType } from "../Type/ConstructorType";
export declare class ConstructorTypeFormatter implements SubTypeFormatter {
    supportsType(type: ConstructorType): boolean;
    getDefinition(type: ConstructorType): Definition;
    getChildren(type: ConstructorType): BaseType[];
}
