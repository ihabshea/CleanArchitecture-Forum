import { User } from "../../../types";

async function comparePasswords(encrypted_password: string, bcrypt: any, candidatePassword: string):Promise<boolean>{
    console.log("A7a")
    const match = await bcrypt.compare(candidatePassword, encrypted_password);
    console.log(match); 
    return match;
}
export default comparePasswords;