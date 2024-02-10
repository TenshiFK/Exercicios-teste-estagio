import { useEffect, useState } from 'react';
import './../App.css';
import data from './dados.json';
import { Link } from 'react-router-dom';

function Exercicio4() {
  //Valores de faturamento por estado
  const [faturamentoPorEstado, setFaturamentoPorEstado] = useState({
    SP:  67836.43,
    RJ:  36678.66,
    MG:  29229.88,
    ES:  27165.48,
    Outros:  19849.53,
  });

  //Valor total mensal
  const [valorTotalMensal, setValorTotalMensal] = useState(null);

  //Percentuais de representação por estado
  const [percentuaisPorEstado, setPercentuaisPorEstado] = useState({});

  useEffect(() => {
    //Calcular o valor total mensal
    const total = Object.values(faturamentoPorEstado).reduce((acc, curr) => acc + curr,  0);
    setValorTotalMensal(total);

    //Calcular o percentual de representação para cada estado
    const percentuais = {};
    for (const estado in faturamentoPorEstado) {
      percentuais[estado] = ((faturamentoPorEstado[estado] / total) *  100).toFixed(2);
    }
    setPercentuaisPorEstado(percentuais);
  }, [faturamentoPorEstado]);

  return (
    <div className="App">
      <h1>EX 4</h1>
      <h3>Distribuidora - Percentuais de Representação por Estado</h3>
      {Object.entries(percentuaisPorEstado).map(([estado, percentual]) => (
        <p key={estado}>
          {estado}: {percentual}%
        </p>
      ))}
        <Link to='/'>Voltar</Link>
    </div>
  );
}

export default Exercicio4;
