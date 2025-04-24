import "./chat.css"
import chaat from "../../assets/imgs/chat.svg"
import claer from "../../assets/imgs/claer.svg"
import escudo from "../../assets/imgs/escudo.svg"
import exemple from "../../assets/imgs/exemple.svg"
import star from "../../assets/imgs/star.svg"
import seta from "../../assets/imgs/seta.svg"
import setas from "../../assets/imgs/setas.svg"
import chatt from "../../assets/imgs/chattt.png"
import luz from "../../assets/imgs/luz.png"
import accountt from "../../assets/imgs/accountt.png"
import { useEffect, useState } from "react"


function Chat() {

    const [chats, setChats] = useState([]);

    useEffect(() => {

        getChats();
        //executa todas as vezes que aber a tela

    }, []);

    const getChats = async () => {

        let response = await fetch("https://senai-gpt-api.azurewebsites.net/Chats", {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("meuToken")
            }
        })
        console.log(response);
        if (response.ok == true) {
            let json = await response.json(); // pega informcaoes do chat
            setChats(json)
        }
    }



    return (
        <>
            <div className="conteiner">


                <header className="esq-pnl">


                    <div className="topo">

                        <button className="btn-topo">New Chat</button>

                        {chats.map(chat => (
                            <button className="primeira">

                                <img src={chaat} alt="primera" />
                                {chat.chatTitle}
                            </button>
                        ))}


                    </div>


                    <div className="bxo">

                        <button>Clear Conversacio</button>

                        <p>
                            <img src={claer} alt="claer-icon" />
                            Clear conversations

                        </p>

                        <p>
                            <img src={luz} alt="Light icon" />
                            Light mode

                        </p>

                        <p>
                            <img src={accountt} alt="account-icon" />
                            My account
                        </p>

                        <p>
                            <img src={seta} alt="seta-icon" />
                            Updates & FAQ

                        </p>
                        <p>
                            <img src={setas} alt="seta-s-icon" />
                            Log out
                        </p>

                    </div>


                </header>



                <main className="chat-main">

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
                            <p>May occasionally produce harmful instructions or biased content.</p>
                            <p>Limited knowledge of world andevents after 2021.</p>

                        </div>

                    </div>

                    <div className="input-conteiner">


                        <input type="text" placeholder=" type mensage" />
                    </div>


                </main>


            </div>



        </>

    )


};
export default Chat