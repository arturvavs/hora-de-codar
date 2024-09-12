import React from 'react'

const Button = () => {
    const handleClick = () => {
        console.log('Clicou!')
    };

  return (
    <div>
      <button onClick={() => handleClick()}>
        Clique
      </button>
    </div>
  )
}

export default Button
