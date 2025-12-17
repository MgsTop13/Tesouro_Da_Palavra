import "./cadastro.scss"
import "../../scss/global.scss"
import { useState } from "react"
import { Link, useNavigate } from "react-router"
import Footer from "../../components/footer/footer.jsx"
import Cabecalho2 from "../../components/headerPages"

export default function Cadastro() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [palavraRecuperacao, setPalavraRecuperacao] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaConfirmacao, setSenhaConfirmacao] = useState('');

    async function Cadastro(){
        if(senha !== senhaConfirmacao){
            alert("As senhas não estão iguais!")
            return;
        } else if(name === '' || email === '' || date === '' || palavraRecuperacao === '' || senha === ''){
            alert("Preencha todos os campos!")
            return;
        }
    }
    
    return (
        <main className="cadastro">
            <Cabecalho2 />
            <h1 className="title">Cadastro</h1>

            <section className="dados">
                <div className="coluna1">
                    <div className="input">
                        <h2>Nome</h2>
                        <input type="text" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            placeholder="Carlinhos de pereira" 
                        />
                    </div>

                    <div className="input">
                        <h2>Email</h2>
                        <input type="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="carlinhoselegal@gmail.com" 
                        />
                    </div>

                    <div className="input">
                        <h2>Data de nascimento</h2>
                        <input type="date" 
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>
                </div>

                <div className="coluna2">
                    <div className="input">
                        <h2>Palavra de Recuperação</h2>
                        <input type="text" 
                            value={palavraRecuperacao}
                            onChange={(e) => setPalavraRecuperacao(e.target.value)}
                            placeholder="PaoComOvo" 
                        />
                    </div>

                    <div className="input">
                        <h2>Senha</h2>
                        <input type="password" 
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            placeholder="*******" 
                        />
                    </div>

                    <div className="input">
                        <h2>Confirmação de Senha</h2>
                        <input type="password" 
                            value={senhaConfirmacao}
                            onChange={(e) => setSenhaConfirmacao(e.target.value)}
                            placeholder="*******" 
                        />
                    </div>
                </div>

            <button className="cadastrar" onClick={Cadastro}>Fazer cadastro</button>
            </section>
            <Footer />
        </main>
    )
}