import React from 'react'
import { useState } from 'react'

export const UserInfoForm = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");

    const handleSubmit = (event) => { //Essa é uma função que envia um formulário para o servidor
        event.preventDefault() //Método que previne os comportamentos padrão do navegador
        console.log(name,email)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}> {/*O formulário possui um evento chamado 'onSubmit' 
                                        no qual eu posso passar a função 'handleSubmit' 
                                        para que esse formulário envie os dados para o servidor */}
            <input 
                type="text" 
                value={name} //Armazena na varíavel 'name' no campo de input através do setName
                onChange={(e)=> setName(e.target.value)} //evento onChange é acionado sempre que o valor do input é alterado, independente do usuário ter concluído a edição do campo ou não
                placeholder='Nome'>
            </input>
            <input 
                type="email" 
                value={email} 
                onChange={(e)=> setEmail(e.target.value)}
                placeholder='Email'>
            </input>
            <button type='submit'>Submit</button>
        </form>
        
      
    </div>
  )
}


