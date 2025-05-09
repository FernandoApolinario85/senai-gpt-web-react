import "./new-user.css";
import { useState } from "react";
import logo2 from "../../assets/imgs/chat2t.png"


function NewUser() {
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const [conpassword, setconpassword] = useState("");
    const [novoUsuario, setnovoUsuario] = useState("");
    const onNovoUsuario = async () => {

      window.location. href = "/login"
    }
    
    const onCadastro = async () => {
        let response = await fetch("https://senai-gpt-api.up.railway.app/users", {

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
           window.location.href = "/login";
      
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

                    <img className="logo" src={logo2} alt="logo seneiGPT" />



                    <h1 id="meutitulo" className="titulo">Cadastro</h1>

                    <input className="inpt" value={novoUsuario}
                        onChange={event => setnovoUsuario(event.target.value)} type="text" placeholder="Nome Do Usuario" />

                    <input className="inpt" value={email}
                        onChange={event => setEmail(event.target.value)} type="email" placeholder=" insira o e-mail" />

                    <input className="inpt" value={password}
                        onChange={event => setpassword(event.target.value)} type="password" placeholder="senha" />

                    <input className="inpt" value={ conpassword}
                        onChange={event => setconpassword(event.target.value)} type="password" placeholder="Confirme a Senha" />
                    
                    <button className="btn" onClick={() =>onCadastro ()}>Cadastrar</button>
                    <button className="btn" onClick={() =>onNovoUsuario ()}>login</button>
                    
                    
                    

                </div>

            </main>




        </>
    )
}
export default NewUser