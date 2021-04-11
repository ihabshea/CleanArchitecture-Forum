import { User, UserInput } from "../../types";
import {userModel} from '../../models';
type partialUser = Omit<UserInput, "name">;

const makeUser = async(input: UserInput): Promise<partialUser> => {
    try{
    let newUser: partialUser = await new userModel(input).save();
    return newUser;
    }catch(err){
        // res.status()
        throw Error(err);
    }
}

const createUser = async(req:any, res:any): Promise<void> => {
    try{
        const body: UserInput = req.body as UserInput;
        await makeUser(body);
        let userCreated:  Omit<UserInput, "password"> = body;

        res.status(200)
        .json({user: userCreated});
    }catch(error){
        res.status(400).json({error:error.message});
        console.error(JSON.stringify(error)) 

    }
}
export default createUser;