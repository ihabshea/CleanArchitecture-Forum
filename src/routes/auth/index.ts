import express, {Router}  from 'express'; 
const router: Router = Router()
import {createUser, login, logoutFromDevice, logout} from '../../controllers/index';
import { listLoggedInDevices, listPastDevices } from '../../controllers/users';

import authenticateJWT from '../../middleware/authenticate';


router.post("/register", createUser);
router.post("/login", login);
router.post("/logout",  authenticateJWT, logout);
router.get('/user/devices', authenticateJWT, listLoggedInDevices);
router.get('/user/devices/past', authenticateJWT, listPastDevices);
router.delete('/user/device', logoutFromDevice);

router.post("/logoutDevice",  authenticateJWT, logoutFromDevice);



export default router;  