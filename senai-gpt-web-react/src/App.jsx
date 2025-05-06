import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/login"
import Chat from "./pages/chat"
import NewUser from "./pages/new-user"

function App() {

  const isAuthenticad = () => {
    let token = localStorage.getItem("meuToken");
    if ( token == null){
      return false
    }else{
      return true
    }
  }

  return (
    <>

      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Login />}> </Route>
          <Route path="/login" element={<Login />}> </Route>
          <Route path= "/chat" element={isAuthenticad() == true? <Chat/> :<Login/> }> </Route>
          <Route path="*" element={<h1>Not Foud</h1>}> </Route>
          <Route path= "/new-user" element={isAuthenticad() == true? <NewUser/> :<Chat/> }> </Route>

        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
