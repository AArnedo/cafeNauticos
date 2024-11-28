import { useEffect, useState } from 'react';
import { getPosts } from '../../api/api';
import { handleDeletePost } from '../../middlewares/deletePostMiddleware';
import { Link } from 'react-router-dom';


export const CardPost = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedPosts = await getPosts();
      setPosts(fetchedPosts); 
    };

    fetchPosts();
  }, []);


  return (
    <div id='publicaciones' className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Publicaciones del Blog</h2>

      {posts.length === 0 ? (
        <p className="text-gray-500">No hay publicaciones aún.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div key={post._id} className="bg-white p-6 rounded-lg shadow-md shadow-slate-500">
              <Link to={`/post/${post._id}`}>
                <img src={post.image} alt={post.title} className="h-48 w-full object-cover mb-4 rounded-md" />
              </Link>
              <Link to={`/post/${post._id}`}>
                <h3 className="text-xl font-semibold text-gray-900">{post.title}</h3>
              </Link>
              <p className="text-gray-700 mt-2">{post.content.substring(0, 100)}...</p>
              <p className="text-sm text-gray-500 mt-2">Categoría: {post.category}</p>
              <div className='flex justify-between'>
                <Link to={`/posts/${post._id}`} className="mt-4 text-blue-500 hover:underline">
                  Leer más...
                </Link>
                <button onClick={() => handleDeletePost(post._id, setPosts)} className="mt-4 bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition">
                  Eliminar
                </button>
              </div> 
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
