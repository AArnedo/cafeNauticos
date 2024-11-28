import { Coffee } from 'lucide-react'
import { Navbar } from '../Navbar/Navbar'

export const CoffeeBlogHero =() => {
  return (
    <div className="bg-hero-pattern  bg-cover bg-bottom min-h-screen">
      <div className='bg-black bg-opacity-65 h-[100vh]'>
      {/* Navbar */}
      <Navbar/>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24 font-principal">
        <div className="flex flex-col justify-between items-center gap-4 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6">
            Bienvenido al Rincón del Café
          </h1>
          <p className="text-lg sm:text-xl py-8 px-10 rounded-xl text-white max-w-4xl mx-auto mb-8 font-principal">
            Descubre el fascinante mundo del café, desde sus orígenes hasta las últimas tendencias en preparación. 
            Aquí encontrarás recetas, reseñas de cafeterías y consejos de expertos para disfrutar de la mejor taza.
          </p>
          <a href="#publicaciones">
            <button className="bg-amber-600 text-white font-bold py-3 px-6 rounded-full hover:bg-amber-700 transition duration-300">
              ¡Empieza a Leer!
            </button>
          </a>
        </div>
      </div>
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 opacity-10">
        <Coffee className="h-32 w-32 text-amber-800" />
      </div>
      <div className="absolute bottom-4 right-4 opacity-10">
        <Coffee className="h-24 w-24 text-amber-800" />
      </div>
      </div>
    </div>
  )
}

