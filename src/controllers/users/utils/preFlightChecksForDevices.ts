import { deviceModel, userModel } from "../../../models";
import { Device, User, UserLoginInput } from "../../../types";
import { DeviceType } from "../../../types/enums";

const preFlightChecksForDevices = async (user: User, device: Partial<Device>): Promise<boolean> => {

    // let { device_type, device_name } = device;
    // if (!Object.values(DeviceType).includes(device_type as DeviceType)) {
    //     throw Error("Unknown device. What is this sorcery?");
    // }
    // let thisDevice = await deviceModel.findOne({ device_name, user_id: user._id, device_type: device_type as DeviceType });
    // if (!thisDevice) return true;
    // if (thisDevice) throw Error("You can't log in twice from the same device.")

    return true;
}
export default preFlightChecksForDevices;