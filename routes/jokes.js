import { Router } from 'express'
import * as jokesCtrl from '../controllers/jokes.js'

export {
  router
}

const router = Router()

router.get('/', jokesCtrl.index)
router.get('/new', jokesCtrl.new)
router.get('/:id', jokesCtrl.show)

router.post('/', jokesCtrl.create)

router.delete('/:id', jokesCtrl.delete)