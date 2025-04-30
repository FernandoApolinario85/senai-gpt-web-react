import "./chat.css";
import chaat from "../../assets/imgs/chat.svg";
import claer from "../../assets/imgs/claer.svg";
import escudo from "../../assets/imgs/escudo.svg";
import exemple from "../../assets/imgs/exemple.svg";
import star from "../../assets/imgs/star.svg";
import seta from "../../assets/imgs/seta.svg";
import setas from "../../assets/imgs/setas.svg";
import chatt from "../../assets/imgs/chattt.png";
import luz from "../../assets/imgs/luz.png";
import accountt from "../../assets/imgs/accountt.png";
import enviar from "../../assets/imgs/enviar.svg";
import { useEffect, useState } from "react";



function Chat() {
  const [chats, setChats] = useState([]);
  const [chatSelecionado, setChatselecionado] = useState(null);
  const [userMessage, setUserMessage] = useState("");

  useEffect(() => {
    getChats();
    //executa todas as vezes que aber a tela
  }, []);
}
  const getChats = async () => {
    let response = await fetch(
      "https://senai-gpt-api.azurewebsites.net/Chats",
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("meuToken"),
        },
      }
    );
    console.log(response);
    if (response.ok == true) {
      let json = await response.json(); // pega informcaoes do chat
      setChats(json);
    } else {
      if (response.status == 401) {
        alert(" Token Invalido. Faca login Novamente.");
        window.location.href = "/login";
      }
    }
  };
  const onlogOutclick = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  const clickChat = (chat) => {
    setChatselecionado(chat);
    console.log(chat);
  };

  const chatGPT = async (message) => {
    // Configurações do endpoint e chave da API
    const endpoint = "https://ai-testenpl826117277026.openai.azure.com/";
    const apiKey =
      "DCYQGY3kPmZXr0lh7xeCSEOQ5oiy1aMlN1GeEQd5G5cXjuLWorWOJQQJ99BCACYeBjFXJ3w3AAAAACOGol8N";
    const deploymentId = "gpt-4"; // Nome do deployment no Azure OpenAI
    const apiVersion = "2024-05-01-preview"; // Verifique a versão na documentação

    // URL para a chamada da API
    const url = `${endpoint}/openai/deployments/${deploymentId}/chat/completions?api-version=${apiVersion}`;

    // Configurações do corpo da requisição
    const data = {
      messages: [{ role: "user", content: message }],
      max_tokens: 50,
    };

    // Cabeçalhos da requisição
    const headers = {
      "Content-Type": "application/json",
      "api-key": apiKey,
    };

    // Faz a requisição com fetch
    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const result = await response.json();
      const botMessage = result.choices[0].message.content;
      return botMessage;
    }
  };

  const enviarMensagen = async (message) => {
    console.log("mensagem", message);
    let userId = localStorage.getItem("meuId");

    let novaMensagemUsuario = {
      text: message,
      id: crypto.randomUUID(),
      userId: userId,
    };


    let novoChatselecionado = { ...chatSelecionado };
    novoChatselecionado.messages.push(novaMensagemUsuario);
    setChatselecionado(novoChatselecionado);


    let respostaGPT = await chatGPT(message);
    let novaMessagenChatGPT = {
      text: respostaGPT,
      id: crypto.randomUUID(),
      userId: "chatbot"
    };



    novoChatselecionado = { ...novoChatselecionado };
    novoChatselecionado.messages.push(novaMessagenChatGPT);
    setChatselecionado(novoChatselecionado);

    let response = await fetch("https://senai-gpt-api.azurewebsites.net/chats/" + chatSelecionado.id, {
      method: "PUT",
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("meuToken"),
        "content-type": "application/json"
      },
    });

    if (response.ok == false) {
      console.log("Salvar o chat deu errado");
    }


  };
  const novoChat = async () => {
    let novoTitulo = prompt("insirao titulo do chat:");
    if (novoTitulo == null || novoTitulo == "") {
      alert("insira um titulo.");
      return;

      let userId = localStorage.getItem("meuId");
      let nChat = {

        chatTitle: novoTitulo,
        id: crypto.randomUUID(),
        userId: userId,
        messages: [],

      }
      let response = await fetch("https://senai-gpt-api.azurewebsites.net/chats", {
        method: "POST",
        headers: {
          "Authorization": "Bearer" + localStorage.getItem("meuToken"),
          "content-type": "application/json"
        },
        if(response.ok) {
          await getChats();

    }

  }),
}

return (
  <>
    <div className="conteiner">
      <header className="esq-pnl">
        <div className="topo">
          <button onClick={""} className="btn-topo">+ New Chat</button>

          {chats.map((chat) => (
            <button
              className="btn-secundarios"
              onClick={() => clickChat(chat)}
            >
              <img src={chaat} alt="btn-secundarios" />
              {chat.chatTitle}
            </button>
          ))}
        </div>

        <div className="bxo">
          <button className="btn-topo">Clear Conversacio</button>

          <button className="btn-secundarios">
            <img src={claer} alt="claer-icon" />
            Clear conversations
          </button>

          <button className="btn-secundarios">
            <img src={luz} alt="Light icon" />
            Light mode
          </button>

          <button className="btn-secundarios">
            <img src={accountt} alt="account-icon" />
            My account
          </button>

          <button className="btn-secundarios">
            <img src={seta} alt="seta-icon" />
            Updates & FAQ
          </button>

          <button className="btn-secundarios" onClick={() => onlogOutclick()}>
            <img src={setas} alt="seta-s-icon" />
            Log out
          </button>
        </div>
      </header>

      <main className="chat-main">
        {chatSelecionado == null && (
          <>
            <div className="img-main">
              <img src={chatt} alt="chat-imagem" />
            </div>

            <div className="txt-main">
              <div className="txt-items">
                <h1>
                  <img src={exemple} alt="exemple-icon" />
                  Examples
                </h1>

                <p>"Explain quantum computing insimple terms"</p>
                <p>"Got any creative ideas for a 10year old's birthday?"</p>
                <p>"How do I make an HTTP requestin Javascript?"</p>
              </div>

              <div className="txt-items">
                <h1>
                  <img src={star} alt="star-icon" />
                  Capabilities
                </h1>

                <p>Remembers what user saidearlier in the conversation.</p>
                <p>Allows user to provide follow-up corrections.</p>
                <p>Trained to decline inappropriate requests.</p>
              </div>

              <div className="txt-items">
                <h1>
                  <img src={escudo} alt="escudo-icon" />
                  Limitations
                </h1>

                <p>May occasionally generate incorrect information.</p>
                <p>
                  May occasionally produce harmful instructions or biased
                  content.
                </p>
                <p>Limited knowledge of world andevents after 2021.</p>
              </div>
            </div>
          </>
        )}

        {chatSelecionado != null && (
          <>
            <div className="chat-container">
              <div className="chat-header">
                <h2>{chatSelecionado.chatTitle} </h2>
              </div>

              <div className="chat-messages">
                {chatSelecionado.messages.map((message) => (
                  <p
                    className={
                      "message-item " +
                      (message.userId == "chatbot" ? "chatbot" : "")
                    }
                  >
                    {message.text}{" "}
                  </p>
                ))}
              </div>
            </div>
          </>
        )}

        <div className="input-conteiner">
          <input
            value={userMessage}
            onChange={(event) => setUserMessage(event.target.value)}
            type="text"
            placeholder=" type mensage"
            className="input-chat"
          />

          <img
            onClick={() => enviarMensagen(userMessage)}
            src={enviar}
            alt="send"
          />
        </div>
      </main>
    </div>
  </>
);
}
export default Chat;
