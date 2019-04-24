import { PrimitiveType } from "./PrimitiveType";

export class ConstructorType extends PrimitiveType {
    public getId(): string {
        return "constructor";
    }
}
