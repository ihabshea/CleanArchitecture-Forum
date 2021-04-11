import express, {Router}  from 'express'; 
import myPostsRoutes from './myposts'
const router: Router = Router()

//Authorization paths
router.use(myPostsRoutes);

export default router;