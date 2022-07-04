import express from 'express'
import { updateController } from './controller'
import context from '@middleware/context'

const router = express.Router();
router.put('/update',context,updateController)

export default router