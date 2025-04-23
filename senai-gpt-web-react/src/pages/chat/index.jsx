import "./chat.css"
import chat from "../../assets/imgs/chat.svg"
import claer from "../../assets/imgs/claer.svg"
import escudo from "../../assets/imgs/escudo.svg"
import exemple from "../../assets/imgs/exemple.svg"
import star from "../../assets/imgs/star.svg"





function Chat() {

    return (
        <>
            <div className="conteiner">


                <header className="esq-pnl">


                    <div className="topo">

                        <button className="btn-topo">New Chat</button>

                        <p>
                            <img src={chat} alt="primera" />
                            Al Chat Tool Ethics
                        </p>

                        <p>
                            <img src={chat} alt="segunda" />
                            Al Tool Impact Whiting

                        </p>

                        <p>
                            <img src={chat} alt="terceira" />
                            New Chat

                        </p>


                    </div>


                    <div className="bxo">

                        <button>Clear Conversacio</button>

                        <p>
                            <img src={claer} alt="claer-icon" />
                            Clear conversations

                        </p>

                        <p>
                            <img src="../ASSETS/Sun.svg" alt="Light icon" />
                            Light mode

                        </p>

                        <p>
                            <img src="../ASSETS/User.svg" alt="account-icon" />
                            My account
                        </p>

                        <p>
                            <img src="../ASSETS/seta.svg" alt="seta-icon" />
                            Updates & FAQ

                        </p>
                        <p>
                            <img src="../ASSETS/seta-s.svg" alt="seta-s-icon" />
                            Log out
                        </p>

                    </div>


                </header>



                <main>

                    <div className="img-main">

                        <img src alt="chat-imagem" />

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

                        <div class="txt-items">

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
export default Chat;
