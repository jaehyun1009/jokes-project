import { Joke } from '../models/joke.js'
import { Comment } from '../models/comment.js'
import { Profile } from '../models/profile.js'

export {
    index,
    show,
    newJoke as new,
    create,
    deleteJoke as delete,
    createComment
}

function index(req, res){
    Joke.find({}).populate('creator').then(jokes => {
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
    Joke.findById(req.params.id).populate('creator').populate({
        path: 'comments',
        populate: {
            path: 'commenter'
        }
    }).then(joke => {
        res.render('jokes/show', {
            title: `Joke #${req.params.id}`,
            user: req.user,
            joke,
            comments: joke.comments
        })
    })
}

function newJoke(req, res){
    res.render('jokes/new', {
        title: `New Joke`,
        user: req.user,
    })
}

function create(req, res){

    if (!req.user){
        res.redirect('/jokes')
    }

    req.body.creator = req.user.profile._id
    Joke.create(req.body).then(() => {
        res.redirect('/jokes')
    }).catch(error => {
        res.redirect('/jokes/new')
    })

}

function deleteJoke(req, res){
    Joke.findByIdAndDelete(req.params.id).then(joke => {
        res.redirect('/jokes')
    })
}

function createComment(req, res){

    req.body.commenter = req.user.profile._id

    Comment.create(req.body).then(comment => {
        Joke.findById(req.params.id).then(joke => {
            joke.comments.push(comment._id)
            console.log(joke)
            joke.save().then(() => {
                res.redirect(`${joke._id}`)
            })
        })
    }).catch(error => {
        res.redirect(`${req.params.id}`)
    })

}