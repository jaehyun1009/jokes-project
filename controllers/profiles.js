import { Profile } from '../models/profile.js'
import { Joke } from '../models/joke.js'

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
            console.log(profile)
            console.log(jokes)
            res.render('profiles/show', {
                title: `${profile.name}'s Profile`,
                user: req.user,
                profile,
                jokes
            })
        })
    }).catch(error => {
        res.redirect('/profiles')
    })
}