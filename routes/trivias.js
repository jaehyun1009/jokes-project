import { Router } from 'express'
import * as triviaCtrl from '../controllers/trivias.js'

export {
  router
}

const router = Router()

router.get('/', triviaCtrl.index)
router.get('/new', isLoggedIn, triviaCtrl.new)
router.get('/:id', triviaCtrl.show)
router.get('/:id/like', isLoggedIn, triviaCtrl.like)
router.get('/:id/unlike', isLoggedIn, triviaCtrl.unlike)
router.get('/:triviaId/comments/:commentId/edit', isLoggedIn, triviaCtrl.editComment)

router.post('/', isLoggedIn, triviaCtrl.create)
router.post('/:id', isLoggedIn, triviaCtrl.createComment)

router.delete('/:id', isLoggedIn, triviaCtrl.delete)
router.delete('/:triviaId/comments/:commentId', isLoggedIn, triviaCtrl.deleteComment)

router.put('/:triviaId/comments/:commentId', isLoggedIn, triviaCtrl.updateComment)

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}