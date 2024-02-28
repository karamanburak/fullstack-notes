import React from 'react'
import Events from './1-events-hookIntro/Events'
import "bootstrap/dist/css/bootstrap.min.css";
import Hooks from './2-functionalCompHooks/Hooks';
import Counter from './2-classComponents/Counter';
import Form from './3-Form/Form';
import FormObject from './3-Form/FormObject';
import MouseKeyboard from './4-mouse-keyboard/MouseKeyboard';


const App = () => {
  return (
    <div>
  {/* <Events/> */}
  {/* <Hooks/> */}

  {/* <Counter/>
  <Counter count={20}/> */}

  {/* <Form/> */}
  {/* <FormObject/> */}
  <MouseKeyboard/>

    </div>
  )
}

export default App
