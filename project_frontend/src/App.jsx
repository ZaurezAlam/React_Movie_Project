import Home from "./pages/home.jsx"
import {Routes , Route} from "react-router-dom"
import Favorites from "./pages/Favorites.jsx"
import NavBar from "./components/Navbar.jsx"
import { MovieProvider } from "./context/MovieContext.jsx"
import "./css/App.css"
function App() {


  return (
    <MovieProvider>
      <NavBar/>
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/favorites" element={<Favorites />}/>
      </Routes>
    </main>
    </MovieProvider>
  )
}

export default App
