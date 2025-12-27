import Footer from "../../components/footer/footer.jsx"
import Cabecalho2 from "../../components/headerPages"
import { useNavigate, Link } from "react-router"
import api from "../../axios.js"
import { useState } from "react"
import "../../scss/global.scss"
import "./login.scss"

export default function Login() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();

    async function Logar(){
        if(name === '' || email === '' || senha === ''){
            alert('Preencha todos os campos!')
        }
        try{
            const response = await api.post('/Login', {
                name: name,
                email: email,
                password: senha
            })
            localStorage.setItem('token', response.data.tokenGerado)
            alert(`Seja bem vindo ${name}!`)
            navigate('/')
        } catch (error){
            console.error(error.message)
            if(error.message === 'Request failed with status code 401'){
                alert('Usuário não encontrado! preencha os campos corretamente!')
            }
        }

    }
    return (
        <main className="login">
            <Cabecalho2 />
            <h1 className="title">Login</h1>

            <section className="dados-Login">

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
                    <h2>Senha</h2>
                    <input type="password"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        placeholder="*******"
                    />
                </div>
                <div className="opcoes">
                    <h3>Não tem uma conta? Faça sua conta <Link className="link" to={"/register"}>Aqui!</Link></h3>
                    <h3>Esqueceu sua senha?</h3>
                </div>
                <button className="logar" onClick={Logar}>Logar</button>
            </section>

            <Footer />
        </main>
    )
}