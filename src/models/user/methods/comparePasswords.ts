import { User } from "../../../types";

async function comparePasswords(encrypted_password: string, bcrypt: any, candidatePassword: string):Promise<boolean>{
    return await bcrypt.compare(candidatePassword, encrypted_password);
}
export default comparePasswords;