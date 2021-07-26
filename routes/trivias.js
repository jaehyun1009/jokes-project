import { Router } from 'express'
import * as triviaCtrl from '../controllers/trivias.js'

export {
  router
}

const router = Router()

router.get('/', triviaCtrl.index)
router.get('/new', triviaCtrl.new)
router.get('/:id', triviaCtrl.show)

router.post('/', isLoggedIn, triviaCtrl.create)

router.delete('/:id', isLoggedIn, triviaCtrl.delete)

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}