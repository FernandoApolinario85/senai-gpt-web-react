import "./login.css"

import logo from "../../assets/imgs/Chat.png"
import { useState } from "react";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const onLoginClick = async () => {
    let response = await fetch("https://senai-gpt-api.azurewebsites.net/login", {

      headers: {

        "content-Type": "application/json"


      },
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password
      })
    
    });

    console.log(response)

}


return (
  <>

    <header></header>

    <main className="page-conteiner">
      <div className="robo-image">

        <img src="../ASSETS/Rectangle 1.png" alt="" />

      </div>

      <div className="login-conteiner">

        <img className="logo" src={logo} alt="logo seneiGPT" />



        <h1 id="meutitulo" className="titulo">login</h1>


        <input className="inpt" valeu={email} onChange={event => setEmail(event.target.valeu)} type="email" placeholder=" insira o e-mail" />

        <input className="inpt" valeu={password} onChange={event => setpassword(event.target.value)} type="password" placeholder="senha" />

        <button className="btn" onClick={() => onLoginClick()}>enviar</button>

      </div>

    </main>



  </>
)
}

export default Login;