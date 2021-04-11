import { EntityType } from "../../../types/enums";

function isValidEntity(entity:string): boolean{
    let isValid = Object.values(EntityType).includes(entity as EntityType);
    return isValid;
}
export default isValidEntity;