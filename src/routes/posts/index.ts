import express, {Router}  from 'express'; 
import myPostsRoutes from './myposts'
import allPostsRoutes from './allposts'

const router: Router = Router()

router.use(myPostsRoutes);
router.use(allPostsRoutes);


export default router;