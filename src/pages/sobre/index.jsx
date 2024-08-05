import "./index.scss";
import { Link } from "react-router-dom";

export default function Sobre() {
  return (
    <div className="sobre-mae">
      <header className="faixa">
        <div className="inicio">
          <img src="/assets/images/logo-frei.png" alt="" />

          <h1>React FreiS</h1>
        </div>

        <div className="a">
          <Link to="/">Inicio</Link>
          <Link to="/sobre"> Sobre</Link>
        </div>
      </header>

      <div className="sobre-texto">
        <h3>Sobre</h3>

          <p>
          Bem-vindo à nossa plataforma de exercícios! Aqui, nosso objetivo é
          ajudar você a aprimorar suas habilidades em Node.js e lógica de
          programação de forma prática e envolvente. Acreditamos que a prática
          constante é essencial para o aprendizado e o aperfeiçoamento em
          tecnologia. Nossa missão é fornecer um ambiente onde você possa
          praticar e testar seus conhecimentos em Node.js e lógica de
          programação, permitindo que você avance no seu próprio ritmo e de
          acordo com suas necessidades. 
          Seja qual for seu nível de experiência,
          nossa plataforma é o lugar ideal para você crescer e desenvolver suas
          habilidades. Estamos ansiosos para ver seu progresso e sucesso!
        </p>
        
      </div>
    </div>
  );
}
