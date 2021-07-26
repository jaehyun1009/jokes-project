import { Router } from 'express'
import * as triviaCtrl from '../controllers/trivias.js'

export {
  router
}

const router = Router()

router.get('/', triviaCtrl.index)
router.get('/new', triviaCtrl.new)
router.get('/:id', triviaCtrl.show)
router.get('/:triviaId/comments/:commentId/edit', triviaCtrl.editComment)

router.post('/', isLoggedIn, triviaCtrl.create)
router.post('/:id', isLoggedIn, triviaCtrl.createComment)

router.delete('/:id', isLoggedIn, triviaCtrl.delete)
router.delete('/:triviaId/comments/:commentId', triviaCtrl.deleteComment)

router.put('/:triviaId/comments/:commentId', triviaCtrl.updateComment)

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}