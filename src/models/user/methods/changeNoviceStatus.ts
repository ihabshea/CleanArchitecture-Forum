import { userModel } from "../..";
import { User } from "../../../types";

async function changeNoviceStatus(user: User):Promise<void>{
    await userModel.findOneAndUpdate({_id: user._id}, {new: false});
}
export default changeNoviceStatus;