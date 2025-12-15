import Home from "./pages/home/home"
import Login from "./pages/login/login"
import Cadastro from "./pages/cadastro/cadastro"
import Edit from "./pages/user/EditVersicle/Edit"
import Remove from "./pages/user/RemoveVersicle/Remove"
import Insert from "./pages/user/InsertVersicle/Insert"
import {BrowserRouter, Routes, Route} from "react-router"
import VersiclesGlobal from "./pages/VersiculosGlobal/VersiclesGlobal"
import YourVersicles from "./pages/user/YoursVersicles/YourVersicles"

export default function NavegationRouter(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Edit" element={<Edit />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Remove" element={<Remove />} />
                <Route path="/Insert" element={<Insert />} />
                <Route path="/Register" element={<Cadastro />} />
                <Route path="/YourVersicles" element={<YourVersicles />} />
                <Route path="/VersiclesGlobal" element={<VersiclesGlobal />} />
            </Routes>
        </BrowserRouter>
    )
}