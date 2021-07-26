import { Profile } from '../models/profile.js'
import { Joke } from '../models/joke.js'
import { Trivia } from '../models/trivia.js'

export {
    index,
    show
}

function index(req, res){
    Profile.find({}).then(profiles => {
        res.render('profiles/index', {
            title: "Profiles",
            user: req.user,
            profiles
        })
    }).catch(error => {
        res.redirect('/')
    })
}

function show(req, res){
    Profile.findById(req.params.id).then(profile => {
        Joke.find({}).then(jokes => {
            Trivia.find({}).then(trivias => {
                res.render('profiles/show', {
                    title: `${profile.name}'s Profile`,
                    user: req.user,
                    profile,
                    jokes,
                    trivia: trivias
                })
            })
        })
    }).catch(error => {
        res.redirect('/profiles')
    })
}