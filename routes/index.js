import { Router } from 'express'
import fetch from 'node-fetch'
export {
  router
}
const router = Router()

let jokes = []
fetch('https://raw.githubusercontent.com/15Dkatz/official_joke_api/master/jokes/index.json')
  .then(response => response.json())
  .then(data => {
    jokes = data
  })
  .catch(error => {
    console.log('error')
})

router.get('/', function (req, res){
  let randomIdx = Math.ceil(Math.random() * jokes.length)
  res.render('index', {
    title: 'Home Page',
    user: req.user ? req.user : null,
    setup: jokes[randomIdx].setup,
    punchline: jokes[randomIdx].punchline
  })
})