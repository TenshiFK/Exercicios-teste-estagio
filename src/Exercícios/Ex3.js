import { useEffect, useState } from 'react';
import './../App.css';
import data from './dados.json';
import { Link } from 'react-router-dom';

function Exercicio3() {
    const [minFaturamento, setMinFaturamento] = useState(null);
    const [maxFaturamento, setMaxFaturamento] = useState(null);
    const [diasAcimaMedia, setDiasAcimaMedia] = useState(0);
  
    useEffect(() => {
      const faturamentos = data.map(item => item.valor); // Dados são mapeados para obter apenas os valores de faturamento.
      const media = faturamentos.reduce((total, valor) => total + valor,  0) / faturamentos.length;
      //Calcula a média dos valores de faturamento somando todos eles e dividindo pelo número total de valores
      
      setMinFaturamento(Math.min(...faturamentos)); //Encontra o menor valor de faturamento usando o operador (...) para passar todos os valores de faturamento para Math.min e atualiza o estado minFaturamento com esse valor.
      setMaxFaturamento(Math.max(...faturamentos)); //Encontra o maior valor de faturamento usando o operador (...) para passar todos os valores de faturamento para Math.max e atualiza o estado maxFaturamento com esse valor.
      setDiasAcimaMedia(faturamentos.filter(valor => valor > media).length); //Filtra os valores de faturamento para encontrar aqueles que são maiores que a média e conta o número desses dias, atualizando o estado diasAcimaMedia.
    }, []);

  return (
    <div className="App">
      <h1>EX 3</h1>
      <h3>Análise de Faturamento</h3>
      <p>Menor valor de faturamento: {minFaturamento}</p>
      <p>Maior valor de faturamento: {maxFaturamento}</p>
      <p>Número de dias com faturamento acima da média: {diasAcimaMedia}</p>

        <Link to='/'>Voltar</Link>
    </div>
  );
}

export default Exercicio3;
