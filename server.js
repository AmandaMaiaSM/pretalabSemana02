const express = require('express')
const cors = require('cors')
const {v4: uuid4} = require('uuid')

//criar rotas 
const  routerlinkedin = express.Router()
const PORT = 3333

//instancias 
const app = express()
app.use(express.json())
app.use(cors())

// armazenamento 
const postsLinkedin = []

// GET -> Definindo a rota do GET para listar todas as postagens
routerlinkedin.get('/linkedin', (req, res) => {
    res.json(postsLinkedin)
})

// POST -> deve ser capaz de criar um postagem
routerlinkedin.post('/linkedin', (req, res) =>{
    const {content, format, created_at} = req.body
    const newPostlinkedin = {
        id: uuid4(),
        content: content,
        format: format,
        created_at: new Date().toLocaleDateString('pt-BR')
    }
    postsLinkedin.push(newPostlinkedin)
    res.status(201).json({message: `New POST created  with success => ${content}`})
})

/*deve ser capaz de listar uma postagem especifica*/  
routerlinkedin.get('/linkedin/:id', (req, res) =>{
    const id = req.params.id
    const singlePost = postsLinkedin.find(checkText => checkText.id === id)

    if(!singlePost){
        return res.status(404).json({error: 'Post not found'})
    }

    return res.json(singlePost)
})

// patch ->deve ser capaz de editar uma postagem específica
routerlinkedin.patch('/linkedin/:id', (req, res) =>{
    const id = req.params.id
    const{ content, format} = req.body
    const singlePost = postsLinkedin.find(checkText => checkText.id === id)
    if (!singlePost){
        return res.status(404).json({error: 'Post not found'})
    }
    if(content != undefined) singlePost.content = content
    if (format != undefined) singlePost.format = format
    
    //retonar a postagem 
    return res.json(singlePost)

})
//deve ser capaz de excluir uma postagem específica 
routerlinkedin.delete('/linkedin/:id', (req, res) =>{
    const id = req.params.id
    const delettePost = postsLinkedin.findIndex(checkText => checkText.id === id )
    //res.json(delettePost)
    if (delettePost === -1){
        return res.status(404).json({error: 'Post not found'})
    }
    //metod nosso - utilizado para remover a pstagem excluida
    postsLinkedin.splice(delettePost, 1)
    res.status(200).json({message: 'post deleted successfully'})
})

app.use(routerlinkedin)
app.listen(PORT, console.log(`Server running on port ${PORT}`))