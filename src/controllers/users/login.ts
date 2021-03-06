import { UserLoginInput, UserJWT, User, Device } from "../../types";
import {userModel} from '../../models';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import { createSession, signJWT } from "./authorization";
import { preFlightChecks, preFlightChecksForDevices } from "./utils";
import { DeviceType } from "../../types/enums";
dotenv.config();

const login = async(req:any, res:any): Promise<void> => {
    // console.log("Here")
    try{
        const body = req.body as UserLoginInput;
        await preFlightChecks(body);

        let {email, password, device_name, device_type} = body;
        let findUser: User | null = await userModel.findOne({email});
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
        
                let loggedInSuccessfully = await createSession(findUser._id, token, device_name, device_type);
                if(loggedInSuccessfully){
                res.status(200)
                .json({user: user});
                }else{
                    res.status(500).json({error:"Internal server error. Report issue to the team through Github."})
                }
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
    }
}
export default login;