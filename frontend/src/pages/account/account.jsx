import Cabecalho2 from "../../components/headerPages"
import Footer from "../../components/footer/footer"
import { useState } from "react"
import "../../scss/global.scss"
import "./account.scss"
export default function Account() {
    const [edit, setEdit] = useState(false);
    const [name, setName] = useState('Mgs');
    const [date1, setDate1] = useState('2009-10-16');
    const [email, setEmail] = useState('mgs350084@gmail.com');
    const [palavraRecuperacao, setPalavraRecuperacao] = useState('Potato10!');

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

    return (
        <main className="accountPage">
            <Cabecalho2 />
            <seciton className="dadosUsuario">
                <div className="name">

                    <h2 className="title">Nome:</h2>
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

                <button onClick={() => setEdit(!edit)}>
                    {edit ? 'salvar' : 'editar'}
                </button>
            </seciton>
            <Footer />
        </main>
    )
}