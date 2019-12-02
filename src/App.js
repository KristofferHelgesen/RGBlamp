import React , {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { addComment } from '@babel/types';

const App = React.memo(props =>  {

  const [redState, setRedState] = useState(240);
  const [greenState, setGreenState] = useState(100);
  const [blueState, setBlueState] = useState(60);

  const styleC = {
    backgroundColor : 'rgba(' + redState + ', ' + greenState + ', ' + blueState + ', 0.5)',
    width : "200px",
    borderRadius: "100%",
    height: "200px",
    margin: "auto",
    boxShadow: '0px 0px 110px 50px rgba(' + redState + ', ' + greenState + ', ' + blueState + ', 0.5)'
  }

  return (


    <>
 
    <div>
      <label>Red {redState}</label>
      <div onClick={ () =>  setRedState((redState  <= 255) ? redState-10: 255) }>-</div>
      <div onClick={ () =>  setRedState((redState  <= 255) ? redState+10: 255 ) }>+</div>
    </div>
    <div>
    <label>Green {greenState}</label>
      <div onClick={ () =>  setGreenState(greenState-10) }>-</div>
      <div onClick={ () =>  setGreenState(greenState+10) }>+</div>
    </div>
    <div>
    <label>Blue {blueState} </label>
      <div onClick={ () =>  setBlueState(blueState-10) }>-</div>
      <div onClick={ () =>  setBlueState(blueState+10) }>+</div>
    </div>

    <div style={styleC}>
      
    </div>
    </>
  )
});
  

export default App;
