import { Profile } from '../models/profile.js'

export {
    index,
    show
}

function index(req, res){
    res.render('profiles/index', {
        title: "Profile Page",
        user: req.user
    })
}

function show(req, res){
    Profile.findById(req.params.id).then(profile => {
        console.log(profile)
        res.render('profiles/show', {
            title: `${profile.name}'s Profile`,
            user: req.user,
            profile: req.params.id
        })
    }).catch(error => {
        res.redirect('/profiles')
    })
}