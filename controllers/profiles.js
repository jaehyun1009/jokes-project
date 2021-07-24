import { Profile } from '../models/profile.js'

export {
    index
}

function index(req, res){
    res.render('profiles/index', {
        title: "Profile Page",
        user: req.user
    })
}