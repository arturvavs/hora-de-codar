import { useState } from "react";

export const Counter = () =>{
    //[consultar,alterar]
    const [count,setCount] = useState(0);

    return(
        <div>
            <p>Você clicou {count} vezes</p>
            <button onClick={() => setCount(count + 1)}>Click-me</button>
        </div>
    );
}