import { Router } from 'express'
import * as jokesCtrl from '../controllers/jokes.js'

export {
  router
}

const router = Router()

router.get('/', jokesCtrl.index)
router.get('/new', jokesCtrl.new)
router.get('/:id', jokesCtrl.show)
router.get('/:jokeId/comments/:commentId/edit', jokesCtrl.editComment)

router.post('/', isLoggedIn, jokesCtrl.create)
router.post('/:id', isLoggedIn, jokesCtrl.createComment)

router.put('/:jokeId/comments/:commentId', jokesCtrl.updateComment)

router.delete('/:id', isLoggedIn, jokesCtrl.delete)
router.delete('/:jokeId/comments/:commentId', jokesCtrl.deleteComment)

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}