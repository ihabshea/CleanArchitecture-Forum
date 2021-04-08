import { User, UserInput } from "../../types";
import {userSchema} from '../../models';
const makeUser = async(input: UserInput): Promise<User> => {
    try{
    let newUser = await new userSchema(input).save();
    return newUser;
    }catch(err){
        // res.status()
        throw Error(err);
    }
}

const createUser = async(req:any, res:any): Promise<void> => {
    // console.log("Here")
    try{
        const body = req.body as UserInput;
        let userCreated: User = await makeUser(body);

        res.status(200)
        .json({user: userCreated});
    }catch(error){
        res.status(400).json({error:error.message});
        console.error(JSON.stringify(error)) 

    }
}
export default createUser;