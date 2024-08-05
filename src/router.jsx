import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from './pages/inicio'
import Sobre from "./pages/sobre";
import Cupom from "./pages/ex1/cupom";
import KilopGrama from "./pages/ex2/kilo";

function Navigation() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Inicio />} />
                <Route path='/sobre' element={<Sobre />} />
                <Route path='/ex1' element={<Cupom />} />
                <Route path='/ex2' element={<KilopGrama />} />
                
                
            </Routes>
        </BrowserRouter>
    );
}

export { Navigation }