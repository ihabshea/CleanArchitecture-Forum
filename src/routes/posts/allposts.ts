import express, {Router}  from 'express'; 
// import { listMyPosts } from '../../controllers';
import { listAllPosts, createPost } from '../../controllers';
import authenticateJWT from '../../middleware/authenticate';
const router: Router = Router()

router.post("/post", authenticateJWT, createPost);
router.get("/posts", listAllPosts);

export default router;