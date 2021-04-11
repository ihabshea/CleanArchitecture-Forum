import { UserLoginInput, UserJWT, User } from "../../types";
import {userModel} from '../../models';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import { signJWT } from "./authorization";
dotenv.config();

const login = async(req:any, res:any): Promise<void> => {
    // console.log("Here")
    try{
        const body = req.body as UserLoginInput;
        let {email, password} = body;
        let findUser = await userModel.findOne({email});
        if(findUser){
            const passwordMatch = await findUser.comparePasswords(findUser.password, bcrypt, password);
            if(passwordMatch){
                let userObject: Pick<User, "id" | "name"> = {
                    id: findUser._id,
                    name: findUser.name
                };
                let token: string = await signJWT(userObject);
                let user: UserJWT = {
                    userId: findUser._id,
                    token,
                    name: findUser.name,
                    expiresIn: '1d'
                }
                res.status(200)
                .json({user: user});
            }else{
                res.status(400)
                .json({error: "Invalid password or email."});
            }
        }else{
            res.status(400)
            .json({error: "Invalid information"});
        }
      
    }catch(error){
        res.status(400).json({error:error.message});
        console.error(JSON.stringify(error)) 

    }
}
export default login;