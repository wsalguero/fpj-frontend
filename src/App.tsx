import { Route, Routes } from "react-router-dom"
import { Layout } from "./layout"
import Home from "./pages/home/home"
import Mcu from "./pages/mcu/mcu"
import Newton from "./pages/newton/newton"
import Gravity from "./pages/gravity/gravity"

function App() {

  return (
    <Routes>
      {/* Rutas para las diferentes paginas */}
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="/mcu" element={<Mcu />} />
        <Route path="/newton/" element={<Newton />} >
          <Route index element={<Newton.MainView />} />
          <Route path="first" element={<Newton.First />} />
          <Route path="second" element={<Newton.Second />} />
          <Route path="third" element={<Newton.Third />} />
          <Route path="*" element={<div>404</div>} />
        </Route>
        <Route path="/gravity" element={<Gravity />} />
        <Route path="*" element={<div>404</div>} />
      </Route>
    </Routes>
  )
}

export default App
