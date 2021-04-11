import { UserLoginInput } from "../../../types";
import { DeviceType } from "../../../types/enums";

const preFlightChecks = async(body: UserLoginInput): Promise<boolean> =>{
    let {email, password, device_name, device_type} = body;
    if(!email || !password){
       throw Error("You have to include the email and the password");
    }
    if(!Object.values(DeviceType).includes(device_type as DeviceType)){
        throw Error("Unknown device. What is this sorcery?");
    }
    if(!device_name){
        throw Error("Device name unknown"); //probably should be handled way better than this;
    }
    return true;
}
export default preFlightChecks;