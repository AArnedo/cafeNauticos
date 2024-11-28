import { deletePost } from '../api/api';

export const handleDeletePost = async (id, setPosts) => {
  try {
    await deletePost(id); 
    setPosts(prevPosts => prevPosts.filter(post => post._id !== id));
    console.log('Post eliminado correctamente')
  } catch (error) {
    console.error('Error al eliminar el post:', error);
  }
};