import { useState } from 'react'
import { Coffee, Image, Tag } from 'lucide-react'
import { createPost } from '../../api/api.js'


export const CoffeeBlogForm = ({ onPostCreated }) => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    image: '',
    category: ''
  });


  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newPost = await createPost(formData);
      console.log('Post creado correctamente', newPost);
      setFormData({
        title: '',
        content: '',
        image: '',
        category: ''
      });
      if (onPostCreated){
        onPostCreated();
      }
    } catch (error) {
      console.error('Error al crear el post', error);
    }
  }

  return (
    <div className="min-h-screen bg-amber-600 flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-2xl">
        <div>
          <Coffee className="mx-auto h-12 w-auto text-amber-700" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Nueva Publicacion</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="title" className="sr-only">Título</label>
              <input
                id="title"
                name="title"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm"
                placeholder="Título"
                value={formData.title}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="content" className="sr-only">Contenido</label>
              <textarea
                id="content"
                name="content"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm"
                placeholder="Contenido"
                rows={4}
                value={formData.content}
                onChange={handleChange}
              ></textarea>
            </div>
            <div>
              <label htmlFor="image" className="sr-only">URL de la Imagen</label>
              <div className="flex">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                  <Image className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </span>
                <input
                  id="image"
                  name="image"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm"
                  placeholder="URL de la Imagen"
                  value={formData.image}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <label htmlFor="category" className="sr-only">Categoría</label>
              <div className="flex">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                  <Tag className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </span>
                <select
                  id="category"
                  name="category"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm"
                  value={formData.category}
                  onChange={handleChange}
                >
                  <option value="">Selecciona una categoría</option>
                  <option value="espresso">Espresso</option>
                  <option value="latte">Latte</option>
                  <option value="cappuccino">Cappuccino</option>
                  <option value="americano">Americano</option>
                  <option value="historia">Historia</option>
                  <option value="salud">Salud y Bienestar</option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition duration-150 ease-in-out"
            >
              Publicar Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}


