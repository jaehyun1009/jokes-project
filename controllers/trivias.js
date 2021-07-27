import { Trivia } from '../models/trivia.js'
import { Comment } from '../models/comment.js'

export {
    index,
    show,
    newTrivia as new,
    create,
    deleteTrivia as delete,
    createComment,
    editComment,
    updateComment,
    deleteComment
}

function index(req, res){
  Trivia.find({}).populate('creator').then(trivia => {
      res.render('trivia/index', {
          title: "Trivia",
          user: req.user,
          trivia
      })
  }).catch(error => {
      res.redirect('/')
  })
}

function show(req, res){
  Trivia.findById(req.params.id).populate('creator').populate({
    path: 'comments',
    populate: {
      path: 'commenter'
    }
  }).then(trivia => {
      res.render('trivia/show', {
          title: `Trivia #${req.params.id}`,
          user: req.user,
          trivia,
          comments: trivia.comments
      })
  }).catch(error => {
      res.redirect('/trivia')
  })
}

function newTrivia(req, res){
  res.render('trivia/new', {
      title: `New Trivia`,
      user: req.user,
  })
}

function create(req, res){

  if (!req.user){
      res.redirect('/trivia')
  }

  req.body.creator = req.user.profile._id
  Trivia.create(req.body).then(() => {
      res.redirect('/trivia')
  }).catch(error => {
      res.redirect('/trivia/new')
  })

}

function deleteTrivia(req, res){
  Trivia.findByIdAndDelete(req.params.id).then(() => {
      res.redirect('/trivia')
  })
}

function createComment(req, res){

  req.body.commenter = req.user.profile._id

  Comment.create(req.body).then(comment => {
      Trivia.findById(req.params.id).then(trivia => {
          trivia.comments.push(comment._id)
          trivia.save().then(() => {
              res.redirect(`${trivia._id}`)
          })
      })
  }).catch(error => {
      res.redirect(`/trivia`)
  })

}

function editComment(req, res){
  Trivia.findById(req.params.triviaId).then(trivia => {
      Comment.findById(req.params.commentId).then(comment => {
          res.render(`trivia/edit`, {
              title: `Edit comment #${comment._id}`,
              user: req.user,
              trivia,
              comment
          })
      })
  }).catch(error => {
      res.redirect(`/trivia`)
  })
}

function updateComment(req, res){
  Trivia.findById(req.params.triviaId).then(() => {
      Comment.findByIdAndUpdate(req.params.commentId, req.body, {new: true}).then(() => {
          res.redirect(`/trivia/${req.params.triviaId}`)
      })
  }).catch(error => {
      res.redirect(`/trivia`)
  })
}

function deleteComment(req, res){
  Trivia.findById(req.params.triviaId).then(() => {
      Comment.findByIdAndDelete(req.params.commentId).then(() => {
          res.redirect(`/trivia/${req.params.triviaId}`)
      })
  }).catch(error => {
      res.redirect(`/trivia`)
  })
}