import './App.css'
import Descricao from './components/Descricao';
import Pai from './components/Pai';
import { Soma } from './components/Soma';
import Welcome from './components/Welcome';


function App() {

  return (
    <>
      <Welcome />
      <Pai />
      <Descricao nome='Artur' idade={28}/>
      <Soma a={10} b={15}/>
    </>
  );
}

export default App;
