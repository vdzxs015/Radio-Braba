import { useState } from 'react'

interface InfoAlunoProps {
  nome: string;
  idade: string;
}


export default function App() {
  const [input, setInput] = useState("")
  const [idade, setIdade] = useState("")

  const [infoAluno, setInfoAluno] = useState<InfoAlunoProps>()

  const [contador, setContador] = useState(0)

  function mostraAluno() {
    setInfoAluno({ nome: input, idade: idade })
  }
  
  function adicionar() {
setContador(contador + 1)
  }

  function diminuir() {
    if (contador <= 0) {
      return
    }
    setContador(contador - 1)
  }


  return (
    <div>
      <h1>Conhecendo useStates</h1>

      <input
        placeholder="Digite seu nome"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <br /><br />
      <input
        placeholder="Digite sua idade"
        value={idade}
        onChange={(e) => setIdade(e.target.value)}
      />
      <br />
      <br />

      <button onClick={mostraAluno}>Mostrar alunos</button>

      <hr />

      <h3>Bem Vindo: {infoAluno?.nome}</h3>
      <h3>Idade: {infoAluno?.idade}</h3>

<hr />
<br />
<h1>Contador com useStates</h1>

<button onClick={adicionar}>+</button> {contador} <button onClick={diminuir}>-</button>











    </div>
  )
}

