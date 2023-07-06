import "./App.css"
import {Routes, Route} from "react-router-dom"
import {Home} from "./pages/Home"
import {Store} from "./pages/Store"
import {About} from "./pages/About"
import {Navbar} from "./components/Navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"

function App() {

  return (

    <ShoppingCartProvider>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/store" element={<Store />} ></Route>
        <Route path="/about" element={<About />} ></Route>
      </Routes>
    </ShoppingCartProvider>
  )
}

export default  App
