import express, {Router}  from 'express'; 
import { listMyPosts, listPostsByDevice } from '../../controllers';

import authenticateJWT from '../../middleware/authenticate';
const router: Router = Router()

router.get("/user/posts", authenticateJWT, listMyPosts);
router.get("/user/privacy/posts", authenticateJWT, listPostsByDevice);

export default router;