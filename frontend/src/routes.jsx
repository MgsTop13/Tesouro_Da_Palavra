import {BrowserRouter, Routes, Route} from "react-router"
import Home from "./pages/home/home"
import Insert from "./pages/InsertVersicle/Insert"
import Edit from "./pages/EditVersicle/Edit"
import Remove from "./pages/RemoveVersicle/Remove"
import VersiclesGlobal from "./pages/Versicles/VersiclesGlobal"
import YourVersicles from "./pages/YoursVersicles/YourVersicles"


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