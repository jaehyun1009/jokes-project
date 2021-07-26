import { Trivia } from '../models/trivia.js'

export {
    index,
    show,
    newTrivia as new,
    create,
    deleteTrivia as delete
}

function index(req, res){
  Trivia.find({}).populate('creator').then(trivias => {
      res.render('trivia/index', {
          title: "Trivia",
          user: req.user,
          trivia: trivias
      })
  }).catch(error => {
      res.redirect('/')
  })
}

function show(req, res){
  Trivia.findById(req.params.id).populate('creator').then(trivia => {
      res.render('trivia/show', {
          title: `Trivia #${req.params.id}`,
          user: req.user,
          trivia,
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
  Trivia.findByIdAndDelete(req.params.id).then(trivia => {
      res.redirect('/trivia')
  })
}