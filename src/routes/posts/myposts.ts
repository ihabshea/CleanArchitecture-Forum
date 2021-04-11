import express, {Router}  from 'express'; 
import { listMyPosts } from '../../controllers';
import authenticateJWT from '../../middleware/authenticate';
const router: Router = Router()

router.get("/user/posts", authenticateJWT, listMyPosts);

export default router;