import {BrowserRouter, Routes, Route} from "react-router"
import Home from "./pages/home/home"
import Insert from "./pages/user/InsertVersicle/Insert"
import Edit from "./pages/user/EditVersicle/Edit"
import Remove from "./pages/user/RemoveVersicle/Remove"
import VersiclesGlobal from "./pages/VersiculosGlobal/VersiclesGlobal"
import YourVersicles from "./pages/user/YoursVersicles/YourVersicles"


export default function NavegationRouter(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Insert" element={<Insert />} />
                <Route path="/Edit" element={<Edit />} />
                <Route path="/Remove" element={<Remove />} />
                <Route path="/VersiclesGlobal" element={<VersiclesGlobal />} />
                <Route path="/YourVersicles" element={<YourVersicles />} />
            </Routes>
        </BrowserRouter>
    )
}