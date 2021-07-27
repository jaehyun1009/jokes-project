import { Router } from 'express'
import * as jokesCtrl from '../controllers/jokes.js'

export {
  router
}

const router = Router()

router.get('/', jokesCtrl.index)
router.get('/new', isLoggedIn, jokesCtrl.new)
router.get('/:id', jokesCtrl.show)
router.get('/:id/like', isLoggedIn, jokesCtrl.like)
router.get('/:id/unlike', isLoggedIn, jokesCtrl.unlike)
router.get('/:jokeId/comments/:commentId/edit', isLoggedIn, jokesCtrl.editComment)

router.post('/', isLoggedIn, jokesCtrl.create)
router.post('/:id', isLoggedIn, jokesCtrl.createComment)

router.delete('/:id', isLoggedIn, jokesCtrl.delete)
router.delete('/:jokeId/comments/:commentId', isLoggedIn, jokesCtrl.deleteComment)

router.put('/:jokeId/comments/:commentId', isLoggedIn, jokesCtrl.updateComment)

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}