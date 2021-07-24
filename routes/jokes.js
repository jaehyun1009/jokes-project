import { Router } from 'express'
import * as jokeCtrl from '../controllers/jokes.js'

export {
  router
}

const router = Router()

router.get('/', jokeCtrl.index)