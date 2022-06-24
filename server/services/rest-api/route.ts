import { Router } from  'express'
import context  from '../middleware/context'
import { postController,updateController, getController  } from './controller';

const router = Router()


router.post('/post',context,postController)
router.put('/update',context,updateController)
router.get('/get',context,getController);

export default router;