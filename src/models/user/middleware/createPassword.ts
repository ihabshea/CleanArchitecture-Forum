import { User } from "../../../types";

async function createPassword(password: string, bcrypt: any, saltRounds: number): Promise<string> {
      return await bcrypt.hash(password, saltRounds);
}

export default createPassword;