import "./login.css"

import logo from "../../assets/imgs/chat2t.png"
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
    if (response.ok == true) {
      alert("login realizado com sucesso");
      console.log(response)
      let json = await response.json()
      let token = json.accessToken;
      let userId = json.user.id;
      
      console.log("token:" + token);
      localStorage.setItem("meuToken", token);
      localStorage.setItem("meuId", userId)

      
      //function setcookie(nome, value, days) {
        //const date = new date();
        //date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        //const expires = "expires=" + date.toUTCString();
        //document.cookie = `${nome}=${value};${expires};path=/`;


     // }
     // setcookie("meuToken", token, 7);
     window.location.href = "/chat";

    } else {

      if (response.status == 401) {
        alert("credeciais nao encontrada");
      } else {
        alert("erro inesperado")
      }
    }

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


          <input className="inpt" valeu={email} onChange={event => setEmail(event.target.value)} type="email" placeholder=" insira o e-mail" />

          <input className="inpt" valeu={password} onChange={event => setpassword(event.target.value)} type="password" placeholder="senha" />

          <button className="btn" onClick={() => onLoginClick()}>enviar</button>

        </div>

      </main>



    </>
  )
}

export default Login;

// rest api
// get serve para trazer uma lista de infomações
// post serve para envir as inforçãoes
// put serve pata fazer atualização
// delete e ultilizado para remover

//  erros
// 200 a 299 tudo certo
// 400 a 499 erro do front
// 500 a 599 erro do back