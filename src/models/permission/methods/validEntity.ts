import { EntityType } from "../../../types/enums";

function isValidEntity(entity:string): boolean{
    let isValid = entity in EntityType;
    return isValid;
}
export default isValidEntity;