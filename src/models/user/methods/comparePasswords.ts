import { User } from "../../../types";

async function comparePasswords(bcrypt: any, candidatePassword: string):Promise<boolean>{
    const match = await bcrypt.compare(candidatePassword);
    return match;
}
export default comparePasswords;