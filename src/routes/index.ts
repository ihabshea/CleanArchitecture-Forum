import express, {Router}  from 'express'; 
import {createUser, login} from '../controllers/index';
import auth from './auth';
// authenticateJWT
const router: Router = Router()
//Authorization paths
router.use(auth);


export default router;