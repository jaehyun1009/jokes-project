import { Joke } from '../models/joke.js'

export {
    index
}

function index(req, res){
    res.render('jokes/index', {
        title: "Jokes Page",
        user: req.user ? req.user : null
    })
}