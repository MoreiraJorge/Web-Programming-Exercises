const express = require('express')

const path = require('path')
const fs = require('fs')

const router = express.Router()

router

    .get('/list', (req, res) => {
        const dbPath = path.resolve('db', 'posts.json')
        const posts = JSON.parse(fs.readFileSync(dbPath))
        res.render('pages/reviewsList', { list: posts })
    })


    .get('/:email/:book', (req, res) => {
        const dbPath = path.resolve('db', 'posts.json')
        const posts = JSON.parse(fs.readFileSync(dbPath))
      
        let index = undefined;
        const email = req.params.email
        const book = req.params.book

        for (let i = 0; i < posts.length; i++) {
            if (posts[i].email === email && posts[i].Book.replace(/\s/, '') === book.replace(/\s/, '')) {
                index = i;
                break;
            }
        }

        if (index == undefined) {
            res.send("Book not found!")
        }

        /*
        Outra maneira:
        
            arrayemail = []
            arraylivro = []
    
            const dbPath = path.resolve('db', 'resultados.txt')
            const post = JSON.parse(fs.readFileSync(dbPath))
            
            let mail = req.params.email
    
            for(let i=0; i < post.length; i++){
                if(post[i].email === mail){
                arrayemail.push(post[i])
            }
        }
    
        const posts = arrayemail.filter((item) => {
        return item.nomelivro.replace(/\s/, '') === req.params.livro
        })
        */
       
        res.render('pages/reviewDetails', { item: posts[index] })
    })

module.exports = router