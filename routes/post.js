router.post('/', async (req,res) =>{
    //console.log (req.body; se utiliza para la respuesta
    // del pos en la consola)
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    try {
        const savedPost = await post.save();//metodo que guarda en la base de datos
        res.json(savedPost);
    }catch(error) {
        res.json ({message:error});
    }
});

/**
 * Bloque para mostrar solo post por el id
 */
router.get('/:postId', async (req,res) =>{
    try{
        const post = await Post.findById(req.params.postId
            ); //encuentra por Id
            res.json(post);
    } catch (error) {
        res.json({message: error});
    }
});
/**
 * Bloque para borrar post
 */
router.delete('/postId', async (req, res)=> {
    try {
        const removePost = await Post.remove({_id: req.params.postId}); //borra
        res.json(removePost);
        } catch (error){
            res.json({message: error});
        }
});
/**
 * Actualizar el post
 */
router.patch('/:postId', async (req, res)=>{
    try{
        const updatePost = await Post.updateOne(
            {_id: req.params.postId},
            {$set: {title: req.body.title}});
            res.json(updatePost);
    } catch (error) {
        res.json({message: error});
    }
});

module.exports = router; // devuelve lo que se le asigna router