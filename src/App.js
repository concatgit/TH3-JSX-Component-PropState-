import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

//State
/*
function App() {
  const [age,setAge]=useState(0);     //thiết lập giá trị cho state:age
  const onIncreaseAge=()=>
  {
      setAge(age+1);
  };
  return (
    <div className='container'>
      <div>{age}</div>
      <div onClick={onIncreaseAge}>Tăng lên 1</div>
    </div>
  );
}
*/
//Props
const Component=(props)=>
{
  return (
    <div>
    <div>Đây là tuổi:{props.age}</div>
    <div>Đây là tên:{props.displayName}</div>
    </div>
  );
}
function App()
{
  const [name,setName]=useState('Cee');  //Định dạng của HookState
  const [age,setAge]=useState(0);

  const stateAge=()=>
  {
    setAge(age+1);
  }
    return (
          <div className='container'>
            <div>{age}</div>
            <div onClick={stateAge}>Tăng lên 1</div>  {/*State*/}
            <Component age={age} displayName={name}/>   {/*Props*/}
          </div>
    );
}


export default App;
