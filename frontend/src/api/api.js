import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

//!Obtiene todos los posts.
export const getPosts = async () => {
    try {
      const response = await axios.get(`${API_URL}/posts`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener las publicaciones:', error);
    }
  };

  //! Crear un nuevo post
export const createPost = async (postData) => {
  try {
      const response = await axios.post(`${API_URL}/posts`, postData);
      return response.data;
  } catch (error) {
      console.error('Error al crear el post', error);
      throw error; 
  }
};

//! Actualizar un post
export const updatePost = async (id, postData) => {
  try {
      const response = await axios.put(`${API_URL}/${id}`, postData);
      return response.data; 
  } catch (error) {
      console.error('Error al actualizar el post', error);
      throw error; 
  }
};

//! Eliminar un post
export const deletePost = async (id) => {
  try {
      const response = await axios.delete(`${API_URL}/posts/${id}`);
      return response.data;
  } catch (error) {
      console.error('Error al eliminar el post', error);
      throw error;
  }
};

//!Obtener post por ID:
export const getPostById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/posts/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error al obtener el post con ID ${id}:`, error);
    throw error;
  }
};