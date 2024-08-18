import './App.css'

import { BrowserRouter,Routes,Route } from "react-router-dom";

import Layout from "./layout/Layout.jsx"
import Vault from './pages/Vault.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Vault/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
