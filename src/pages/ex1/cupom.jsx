import { Link } from "react-router-dom";
import './cupom.scss'
import { useState } from "react";





export default function Cupom() {


    const [valorProduto, setValorProduto]= useState(0);

    const [valorProduto1, setValorProduto1]= useState(0);
    
    const [total, setTotal]= useState(0);
    
    function Calculo(){
        let soma = valorProduto - valorProduto1
        setTotal(soma)
    }

  

  return (


    <div className="cupom-mae">
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



    <div className="calculo-cupom">
        <div className="digite-valor">
            <label>Digite o valor:</label>
            <input type="text" placeholder="Insira o valor" onChange={e=>setValorProduto(e.target.value)} />
        </div>
        <div className="digite-cupom">
            <label>Digite o Cupom:</label>
            <input type="text" placeholder="Insira o cupom" onChange={e=>setValorProduto1(e.target.value)}  />
        </div>

        <button onClick={Calculo}> Executar </button>
        <div>
            O total ficou R${total}
        </div>
    </div>
      
    </div>
  );
}
