import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'; 
import { getPostById } from '../../api/api'; 
import { Clock, Tag, User } from 'lucide-react';

export const PostDetail = () => {
  const { id } = useParams(); 
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const fetchedPost = await getPostById(id);
        setPost(fetchedPost); 
      } catch (error) {
        setError('Error al cargar la publicacion')
      }
    };

    fetchPost();
  }, [id]);

  if (!post) {
    return <p>Cargando...</p>; 
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <article className="bg-white shadow-2xl rounded-lg overflow-hidden">
      {post.image && (
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-64 object-cover object-center"
        />
      )}
      <div className="p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
        <div className="flex items-center text-sm text-gray-500 mb-6">
          <User className="mr-2 h-4 w-4" />
          <span className="mr-4">{post.author}</span>
          <Clock className="mr-2 h-4 w-4" />
          <span className="mr-4">{post.date}</span>
          <Tag className="mr-2 h-4 w-4" />
          <span>{post.category}</span>
        </div>
        <div className="prose max-w-none">
          <p className="text-gray-700 leading-relaxed">{post.content}</p>
        </div>
        <div className="mt-8">
        <Link
          to="/"
          className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Volver al Inicio
        </Link>
      </div>
      </div>
    </article>
  </div>
  );
};
