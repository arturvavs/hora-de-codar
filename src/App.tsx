import './App.css'
import Button from './components/Button';
import { Counter } from './components/Counter';
import Descricao from './components/Descricao';
import Pai from './components/Pai';
import { Soma } from './components/Soma';
import { UserInfoForm } from './components/UserInfoForm';
import UseState from './components/UseState';
import Welcome from './components/Welcome';


function App() {

  return (
    <>
      <Welcome />
      <Pai />
      <Descricao nome='Artur' idade={28}/>
      <Soma a={10} b={15}/>
      <Counter /> 
      <UserInfoForm />
      <Button />
      <UseState />
    </>
  );
}

export default App;
