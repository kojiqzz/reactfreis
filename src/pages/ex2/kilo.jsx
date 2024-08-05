import { Link } from "react-router-dom";
import "./kilo";

export default function KilopGrama() {
  return (
    <div className="kilos-mae">
      <header className="faixa">
        <div className="inicio">
          <img src="/assets/images/logo-frei.png" alt="" />

          <h1>React FreiS</h1>
        </div>

        <div className="a">
          <Link to="/">Inicio</Link>
          <Link to="/sobre">Sobre</Link>
        </div>
      </header>
    </div>
  );
}
