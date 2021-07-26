import { Router } from 'express'
import * as triviaCtrl from '../controllers/trivias.js'

export {
  router
}

const router = Router()

router.get('/', triviaCtrl.index)
router.get('/new', triviaCtrl.new)
router.get('/:id', triviaCtrl.show)

router.post('/', triviaCtrl.create)

router.delete('/:id', triviaCtrl.delete)