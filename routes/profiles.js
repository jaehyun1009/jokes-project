import { Router } from 'express'
import * as profilesCtrl from '../controllers/profiles.js'

export {
  router
}

const router = Router()

router.get('/', profilesCtrl.index)
router.get('/:id', profilesCtrl.show)
router.get('/:id/follow', isLoggedIn, profilesCtrl.follow)
router.get('/:id/unfollow', isLoggedIn, profilesCtrl.unfollow)
router.get('/:id/followers', profilesCtrl.showFollowers)

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}