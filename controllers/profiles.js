import { Profile } from '../models/profile.js'
import { Joke } from '../models/joke.js'
import { Trivia } from '../models/trivia.js'

export {
    index,
    show,
    follow,
    unfollow,
    showFollowers
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
        Joke.find({creator: req.params.id}).then(jokes => {
            Trivia.find({creator: req.params.id}).then(trivias => {

                let totalLikes = 0
                jokes.forEach(joke => {
                    totalLikes += joke.likedBy.length
                })
                trivias.forEach(trivia => {
                    totalLikes += trivia.likedBy.length
                })
                
                res.render('profiles/show', {
                    title: `${profile.name}'s Profile`,
                    user: req.user,
                    profile,
                    jokes,
                    totalLikes,
                    trivia: trivias
                })

            })
        })
    }).catch(error => {
        res.redirect('/profiles')
    })
}

function follow(req, res){
    Profile.findById(req.params.id).then(profile => {
        profile.followedBy.push(req.user.profile)
        profile.save().then(() => {
            res.redirect(`/profiles/${req.params.id}`)
        })
    }).catch(error => {
        res.redirect('/profiles')
    })
}

function unfollow(req, res){
    Profile.findById(req.params.id).then(profile => {
        profile.followedBy.remove({_id: req.user.profile._id})
        profile.save().then(() => {
            res.redirect(`/profiles/${req.params.id}`)
        })
    }).catch(error => {
        res.redirect('/profiles')
    })
}

function showFollowers(req, res){
    Profile.findById(req.params.id).populate('followedBy').then(profile => {
        res.render(`profiles/followers`, {
            title: 'Profile',
            user: req.user,
            profile
        })
    }).catch(error => {
        res.redirect('/profiles')
    })
}