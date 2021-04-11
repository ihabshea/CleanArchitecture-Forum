import { deviceModel, loginModel, tokenModel } from "../../models";
import { Device, LoginDetails, Token } from "../../types";

// import { invalidateJWT } from "./authorization";
const logoutFromDevice = async (req: any, res: any): Promise<void> => {
    let { device_id } = req.body;
    let findDevice: Device | null = await deviceModel.findById(device_id);
    if (!findDevice) {
        res.status(404).json({ error: "Device not found." })
    }

    if (findDevice) {
        if (findDevice?.loggedOut) {
            res.status(400).json({ error: "This device was logged out already." });
            return;
        }
        if (findDevice?.kickedOut) {
            res.status(400).json({ error: "This device was kicked out already." });
            return;
        }
        let findLogin: LoginDetails | null = await loginModel.findOne({ device: findDevice });
        if (findLogin) {
            let findToken: Token | null = await tokenModel.findById(findLogin.token);
            if (findToken) {
                findDevice.kickedOut = true;
                findLogin.terminated = true;
                await findDevice.save();
                await findLogin.save();
                res.status(200).send();
            } else {
                res.status(500).json({ error: "Unexpected error: token doesn't exist." });
                return;
            }
        } else {
            res.status(500).json({ error: "Unexpected error: login session doesn't exist." });
            return;
        }
    }
}
const listLoggedInDevices = async (req: any, res: any): Promise<void> => {
    let { userId } = req.user;

    let devices = await deviceModel.find({ user_id: userId });
    res.status(200)
        .json({
            devices
        });

}
const listPastDevices = async (req: any, res: any): Promise<void> => {
    let { userId } = req.user;

    let devices = await deviceModel.find({ user_id: userId, $or: [{ loggedOut: true }, { kickedOut: true }] });
    res.status(200)
        .json({
            devices
        });

}

export { logoutFromDevice, listPastDevices, listLoggedInDevices };