import express, {Router}  from 'express'; 
import {createUser} from '../controllers/index';
const router: Router = Router()

router.post("/register", createUser);

export default router;