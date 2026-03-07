import Cabecalho2 from "../../components/headerPages"
import Footer from "../../components/footer/footer"
import { useNavigate } from "react-router"
import { useEffect, useState } from "react"
import api from "../../axios.js"
import "../../scss/global.scss"
import "./account.scss"
export default function Account() {
    const navigate = useNavigate();
    const [edit, setEdit] = useState(false);
    const [name, setName] = useState('');
    const [date1, setDate1] = useState('');
    const [email, setEmail] = useState('');
    const [palavraRecuperacao, setPalavraRecuperacao] = useState('');

    useEffect(() => {
        dadosUser()
    })

    const descobrirIdade = () => {
        const hoje = new Date();
        const [ano, mes, dia] = date1.split('-').map(Number);

        let idade = hoje.getFullYear() - ano;

        const mesAtual = hoje.getMonth() + 1;
        const diaAtual = hoje.getDate();

        if (mesAtual < mes || (mesAtual === mes && diaAtual < dia)) {
            idade--;
        }
        return idade;
    }
    async function dadosUser() {
        const token = localStorage.getItem('token')
        try{
            const response = await api.post('/VerifyToken', {
                token: token
            })

            const userDados = response.data.decoded            
            const formatarData = (dataISO) => {
                const data = new Date(dataISO);
                const ano = data.getFullYear();
                const mes = (data.getUTCMonth () +1).toString().padStart(2, '0');
                const dia = data.getUTCDate().toString().padStart(2, '0')
                return `${ano}-${mes}-${dia}`;
            }

            setName(userDados.name)
            setEmail(userDados.email)
            setDate1(formatarData(userDados.nasc))
            setPalavraRecuperacao(userDados.pass)
            
        } catch(error){
            console.error(error.message)
            if(error.message === "Request failed with status code 403"){
                alert('Erro na verificação, faça login novamente ou contate o suporte!')
                navigate('/Login')
            }
        }
    }

    return (
        <main className="accountPage">
            <Cabecalho2 />
            <h1 className="conta">Dados do usuário</h1>
            
            <section className="dadosUsuario">
                <div className="name">
                    <h2 className="title">Nome</h2>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        readOnly={!edit}
                    />
                </div>

                <div className="email">
                    <h2 className="title">Email</h2>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        readOnly={!edit}
                    />
                </div>

                <div className="dataNasc">
                    <h2 className="title">Data Nascimento</h2>
                    <input
                        type="date"
                        value={date1}
                        onChange={(e) => setDate1(e.target.value)}
                        readOnly={!edit}
                    />
                </div>

                <div className="palavra">
                    <h2 className="title">Palavra de Recuperação</h2>
                    <input
                        type="text"
                        value={palavraRecuperacao}
                        onChange={(e) => setPalavraRecuperacao(e.target.value)}
                        readOnly={!edit}
                    />
                </div>
                
                <button className={`${edit ? "salvar": "editar"}`} onClick={() => setEdit(!edit)}>
                    {edit ? 'Salvar' : 'Editar'}
                </button>
                

            </section>
                
            <Footer />
        </main>
    )
}