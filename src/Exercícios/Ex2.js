import { useState } from 'react';
import './../App.css';
import { Link } from 'react-router-dom';

function Exercicio2() {

  const [num, setNum] = useState(0);

  const Fibo = (num) => {
    //variaveis para guardar os primeiros numeros da sequencia
    let a =  0;
    let b =  1;

    while (b < num) { //loop que realiza a operaçao de soma de fibonacci até b seja igual ou maior q o número fornecido pelo usuário
      let fibo = a; 
      a = b; //
      b = fibo + b;
    }

    return b === num;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const result = Fibo(num);
    if (result) {
      alert(`O número ${num} faz parte da sequência Fibonacci.`);
    } else {
      alert(`O número ${num} não faz parte da sequência Fibonacci.`);
    }
  }

  return (
    <div className="App">
      <h1>EX 2</h1>
      <form onSubmit={handleSubmit}>
        <p>Insira um número para verificar se é um número Fibonacci:</p>
        <input type="number" value={num} onChange={(e) => setNum(parseInt(e.target.value))} required />
        <button type="submit">Verificar</button>
      </form>
      <br/>
      <Link to='/exercicio3'>Exercício 3</Link>
      <br/>
      <Link to='/exercicio4'>Exercício 4</Link>
    </div>
  );
}

export default Exercicio2;
