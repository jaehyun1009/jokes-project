import { Router } from 'express'
import * as profileCtrl from '../controllers/profiles.js'

export {
  router
}

const router = Router()

router.get('/', profileCtrl.index)
router.get('/:id', profileCtrl.show)