const express = require('express');
const Post = require('../models/post.js');
const router = express.Router();

//!Para obtener todos los posts
router.get('/posts', async (req, res) =>{
    try {
        const posts = await Post.find();
        res.json(posts)
    } catch (error) {
        console.error(error);
        res.status(500).json({mensaje: 'Error al obtener los posts'})
    }
})

//!Obtener post por ID:
router.get('/posts/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const post = await Post.findById(id);
        if (!post) {
            return res.status(404).json({ mensaje: 'Publicación no encontrada' });
        }
        res.json(post); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al obtener la publicación' });
    }
});


//!Para Crear un post nuevo.
router.post('/posts', async(req, res) =>{
    const { title, content, image, category } = req.body

    if(!title || !content){
        res.status(400).json({mensaje: 'El titulo y el contenido del Post son obligatorios'})
    }
    try {
        const newPost = new Post ({
            title,
            content,
            image,
            category,
            id: Date.now()
        }); 
        await newPost.save();
        res.status(201).json(newPost)
    } catch (error) {
        res.status(500).json({mensaje: 'Error al crear la publicacion'})   
    }
});

//!Actualizar Posteo.
router.put('/posts/:id', async (req, res) =>{
    console.log(req.body)
    const { id } = req.params;
    const { title, content, image, category } = req.body

    console.log({title, content, image, category})

    try {
        const updatePost = await Post.findByIdAndUpdate(
            id,
            { title, content, image, category },
            {new: true, runValidators: true}
        );
        if(!updatePost){
            return res.status(404).json({mensaje: 'Post no encontrado'})
        };
        res.json(updatePost);
    } catch (error) {
        console.error(error);
        res.status(500).json({mensaje: 'Error al actualizar el post'})
    }
});

//!Eliminar Posteo
router.delete('/posts/:id', async (req,res) =>{
    const { id } = req.params;
    try {
        const deletePost = await Post.findByIdAndDelete(id)
        if(!deletePost){
            res.status(404).json({mensaje: 'No se pudo eliminar el post'})
        }
        res.status(200).json({mensaje: 'Post eliminado correctamente!'})
    } catch (error) {
        console.error(error)
        res.status(500).json({mensaje: 'No se encontro post para eliminar'})
    }
});

module.exports = router