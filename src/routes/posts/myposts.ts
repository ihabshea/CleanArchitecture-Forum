import express, {Router}  from 'express'; 
import { listMyPosts,  deletePost, listMyDeletedPosts, listPostsByDevice } from '../../controllers';


import authenticateJWT from '../../middleware/authenticate';
const router: Router = Router()
router.get("/user/posts", listMyPosts);
router.get("/user/privacy/posts", listPostsByDevice);
router.get('/user/posts/deleted', authenticateJWT, listMyDeletedPosts)
router.delete("/user/post", authenticateJWT, deletePost);
router.put("/user/post", authenticateJWT, updatePost);


export default router;