import { useState} from 'react'

import React from 'react'

const UseState = () => {
    const [contador,setContador] = useState(0); //contador é a variável a ser alterada; setContador é a variável que irá definir o novo valor para contador através do useState; (0) é o estado inicial da variável
    const [nome,setNome] = useState('');
    const [sobrenome,setSobreNome] = useState('');
    const [check, setCheck] = useState(false);

    const incrementCounter = () => {
        setContador(contador+1) 
    }
    const handleNome = (e) =>{
        setNome(e.target.value)

    }
    const handleSobreNome = (e) =>{
        setSobreNome(e.target.value)

    }
    const hadnleDeleteAll = () => {
        setNome('')
        setSobreNome('')

    }
    const handleCheck = (e) =>{
        setCheck(e.target.checked)
    }
    
  return (
    <div>
      <p>Valor do contador: {contador}</p>
      <button onClick={() => incrementCounter()}>Aumentar contador</button>

      <p>Nome: {nome}</p>
      <p>Sobrenomme: {sobrenome}</p>
      <input value={nome} onChange={handleNome}/>
      <button onClick={() => setNome('')}>Apagar Nome</button>
      <input value={sobrenome} onChange={handleSobreNome}/>
      <button onClick={() => setSobreNome('')}>Apagar Sobrenome</button>
      <button onClick={() => hadnleDeleteAll()}>Apagar Tudo</button>
      <input type="checkbox" checked={check} onClick={handleCheck}/>
    </div>
  )
}

export default UseState
