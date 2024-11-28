
import './App.css'
import { useState } from 'react'
import { CardPost } from './components/CardPost/CardPost'
import { CoffeeBlogForm } from './components/CoffeeBlogForm/CoffeeBlogForm'
import { CoffeeBlogHero } from './components/CoffeeBlogHero/CoffeeBlogHero'
import { PostDetail } from './components/PostDetail/PostDetail'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const [refreshPosts, setRefreshPosts] = useState(false);

  const handlePostCreated = () =>{
    setRefreshPosts(!refreshPosts)
  };

  return (
    <Router>
      <Routes>
        <Route 
          path='/'
          element={
            <>
              <CoffeeBlogHero/>
              <CoffeeBlogForm onPostCreated ={handlePostCreated}/>
              <CardPost key={refreshPosts}/>
            </>
          }
        />
        <Route path='/posts/:id' element={<PostDetail/>} />
      </Routes>  
    </Router>
  )
}

export default App
