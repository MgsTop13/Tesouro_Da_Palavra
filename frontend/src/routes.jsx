import {BrowserRouter, Routes, Route} from "react-router"

//SITE
    import Home from "./pages/home/home"
    import About from "./pages/about/about"
    import Login from "./pages/login/login"
    import Cadastro from "./pages/cadastro/cadastro"
    import VersiclesGlobal from "./pages/VersiculosGlobal/VersiclesGlobal"

//Usuario
    import Account from "./pages/account/account"
    //Versiculos
        import Insert from "./pages/user/InsertVersicle/Insert"
        import Remove from "./pages/user/RemoveVersicle/Remove"
        import YourVersicles from "./pages/user/YoursVersicles/YourVersicles"
        import PaginaDeVersiculosFavoritos from "./pages/user/favoritos/favoritos"
    
    //Jejuns
        import JejumHome from "./pages/user/jejuns/jejumhome"
        import RemoverJejum from "./pages/user/jejuns/removerJejum/removerJejum"
        import InserirJejum from "./pages/user/jejuns/inserirJejum/inserirJejum"

/*
    Deixei mais organizado pra entender mais facil bele? nao sei quem vai tar lendo no futuro,
    bem provavel que vai ser eu por causa de erro de rotas kk - MgsTop13
*/



export default function NavegationRouter(){
    return(
        <BrowserRouter>
            <Routes>
                {/*Site */}
                    <Route path="/" element={<Home />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Account" element={<Account />} />
                    <Route path="/Register" element={<Cadastro />} />
                    <Route path="/VersiclesGlobal" element={<VersiclesGlobal />} />
                    
                {/*Usuario */}
                    {/*Versiculos */}
                        <Route path="/Remove" element={<Remove />} />
                        <Route path="/Insert" element={<Insert />} />
                        <Route path="/YourVersicles" element={<YourVersicles />} />
                        <Route path="/Favoritos" element={<PaginaDeVersiculosFavoritos />} />
                    
                    {/*Jejuns */}
                        <Route path="/Jejuns" element={<JejumHome />} />
                        <Route path="/InserirJejum" element={<InserirJejum />} />
                        <Route path="/RemoverJejum" element={<RemoverJejum />} />
            </Routes>
        </BrowserRouter>
    )
}