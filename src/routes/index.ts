import express, {Router}  from 'express'; 
import {createUser, login} from '../controllers/index';
import auth from './auth';
import posts from './posts';
// authenticateJWT
const router: Router = Router()
//Authorization paths
router.use(auth);
router.use(posts);



export default router;