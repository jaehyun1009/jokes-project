import { Joke } from '../models/joke.js'

export {
    index,
    show,
    newJoke as new,
    create,
    deleteJoke as delete
}

function index(req, res){
    Joke.find({}).populate('creator').then(jokes => {
        res.render('jokes/index', {
            title: "Jokes",
            user: req.user,
            jokes
        })
    }).catch(error => {
        res.redirect('/')
    })
}

function show(req, res){
    Joke.findById(req.params.id).populate('creator').then(joke => {
        res.render('jokes/show', {
            title: `Joke #${req.params.id}`,
            user: req.user,
            joke,
        })
    }).catch(error => {
        res.redirect('/jokes')
    })
}

function newJoke(req, res){
    res.render('jokes/new', {
        title: `New Joke`,
        user: req.user,
    })
}

function create(req, res){

    if (!req.user){
        res.redirect('/jokes')
    }

    req.body.creator = req.user.profile._id
    Joke.create(req.body).then(() => {
        res.redirect('/jokes')
    }).catch(error => {
        res.redirect('/jokes/new')
    })

}

function deleteJoke(req, res){
    Joke.findByIdAndDelete(req.params.id).then(joke => {
        res.redirect('/jokes')
    })
}