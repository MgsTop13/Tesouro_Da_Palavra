import VersController from "./controller/versController.js";
import Cadastro from "./controller/contasController.js"

export function Rotas(api){
    api.use(VersController)
    api.use(Cadastro)
}