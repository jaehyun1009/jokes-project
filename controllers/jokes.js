import { Joke } from '../models/joke.js'

export {
    index,
    show,
    newJoke as new,
    create
}

function index(req, res){
    Joke.find({}).then(jokes => {
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
    Joke.findById(req.params.id).then(joke => {
        res.render('jokes/show', {
            title: `Joke #${req.params.id}`,
            user: req.user,
            joke
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

}