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
        res.render('profiles/show', {
            title: `Single Profile`,
            user: req.user
        })
    }).catch(error => {
        res.redirect('/profiles')
    })
}