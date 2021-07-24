import { Profile } from '../models/profile.js'

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
        res.render('profiles/show', {
            title: `${profile.name}'s Profile`,
            user: req.user,
            profile
        })
    }).catch(error => {
        res.redirect('/profiles')
    })
}