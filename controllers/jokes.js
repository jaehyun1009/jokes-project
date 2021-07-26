import { Joke } from '../models/joke.js'
import { Comment } from '../models/comment.js'

export {
    index,
    show,
    newJoke as new,
    create,
    deleteJoke as delete,
    createComment,
    editComment,
    updateComment,
    deleteComment
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
    }).catch(error => {
        res.redirect('/jokes')
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
    Joke.findByIdAndDelete(req.params.id).then(() => {
        res.redirect('/jokes')
    })
}

function createComment(req, res){

    req.body.commenter = req.user.profile._id

    Comment.create(req.body).then(comment => {
        Joke.findById(req.params.id).then(joke => {
            joke.comments.push(comment._id)
            joke.save().then(() => {
                res.redirect(`${joke._id}`)
            })
        })
    }).catch(error => {
        res.redirect(`/jokes`)
    })

}

function editComment(req, res){
    Joke.findById(req.params.jokeId).then(joke => {
        Comment.findById(req.params.commentId).then(comment => {
            res.render(`jokes/edit`, {
                title: `Edit comment #${comment._id}`,
                user: req.user,
                joke,
                comment
            })
        })
    }).catch(error => {
        res.redirect(`/jokes`)
    })
}

function updateComment(req, res){
    Joke.findById(req.params.jokeId).then(() => {
        Comment.findByIdAndUpdate(req.params.commentId, req.body, {new: true}).then(() => {
            res.redirect(`/jokes/${req.params.jokeId}`)
        })
    }).catch(error => {
        res.redirect(`/jokes`)
    })
}

function deleteComment(req, res){
    Joke.findById(req.params.jokeId).then(() => {
        Comment.findByIdAndDelete(req.params.commentId).then(() => {
            res.redirect(`/jokes/${req.params.jokeId}`)
        })
    }).catch(error => {
        res.redirect(`/jokes`)
    })
}