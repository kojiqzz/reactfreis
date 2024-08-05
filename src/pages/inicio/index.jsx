import "./index.scss";
import { Link } from "react-router-dom";

export default function Inicio() {
  return (
    <div className="inicial-mae">
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

      <div className="menu">
        <div className="titulo">
          <h2>Escolha um treino...</h2>
        </div>
        <div className="cards">
          <Link to="/ex1">
            <div className="card">
              <div className="retangulo laranja" />
              <h3 className="titulo">Cupom de desconto</h3>
              <h4 className="subtitulo">Exercício 1</h4>
            </div>
          </Link>
        </div>
        <div className="cards">
          <Link to="/ex2">
            <div className="card">
              <div className="retangulo verde" />
              <h3 className="titulo">Gramas para KG</h3>
              <h4 className="subtitulo">Exercício 2</h4>
            </div>
          </Link>
        </div>
      </div>
        <div className="card3">
          <Link to="/ex3">
            <div className="card">
              <div className="retangulo azul" />
              <h3 className="titulo">Gramas para KG</h3>
              <h4 className="subtitulo">Exercício 2</h4>
            </div>
          </Link>
        </div>
      </div>

   
  )
}
