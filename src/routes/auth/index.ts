import express, {Router}  from 'express'; 
import {createUser, login, logout} from '../../controllers/index';
import authenticateJWT from '../../middleware/authenticate';
const router: Router = Router()

router.post("/register", createUser);
router.post("/login", login);
router.post("/logout",  authenticateJWT,  logout);


export default router;  