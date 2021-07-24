import { Joke } from '../models/joke.js'

export {
    index
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