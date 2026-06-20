import Footer from "../../components/footer/footer.jsx"
import Cabecalho2 from "../../components/headerPages"
import { useNavigate, Link } from "react-router"
import api from "../../axios.js"
import { useState } from "react"
import "../../scss/global.scss"
import "./login.scss"

export default function Login() {
    const [nameOrEmail, setNameOrEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [showPass, setShowPass] = useState(false);
    const navigate = useNavigate();

    async function Logar(){
        if(nameOrEmail === '' || senha === ''){
            
        }

        try{
            const response = await api.post('/Login', {
                name: nameOrEmail,
                email: nameOrEmail,
                password: senha
            })
            
            localStorage.setItem('token', response.data.tokenGerado)
            alert(`Seja bem vindo ${name}!`)
            navigate('/')

        } catch (error){
            console.error(error)
            if(error.message === 'Request failed with status code 401'){
            }
        }

    }

    function showP(){
        setShowPass(!showPass);
    }

    return (
        <main className="login">
            <Cabecalho2 />
            <h1 className="title">Login</h1>

            <section className="dados-Login">
                <div className="inputs">

                
                <div className="input">
                    <h2>Nome/Email</h2>
                    <input type="email"
                        value={nameOrEmail}
                        onChange={(e) => setNameOrEmail(e.target.value)}
                        placeholder="carlinhoselegal@gmail.com"
                        />
                </div>

                <div className="input">
                    <h2>Senha</h2>
                    
                    <input type={`${showPass ? "password": "text"}`}
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        placeholder="*******"
                    />

                    <img src="" alt="eye" className="showPass" onClick={showP}/>
                </div>
                </div>
                <div className="opcoes">
                    <h3>Não tem uma conta? Faça sua conta <Link className="link" to={"/register"}>Aqui!</Link></h3>
                    <h3><Link className="link">Esqueceu sua senha?</Link></h3>
                </div>
                <button className="logar" onClick={Logar}>Logar</button>
            </section>

            <Footer />
        </main>
    )
}