import { useState } from 'react'
import './App.scss'
import ModalComponent from './Modal/modal'
import store from './Redux/Store/store'


function App() 
{
  const [show, setShow] = useState(false)
  const showFunc = ()=>
  {
    setShow(true)
  }

  const hideFunc = ()=>
    {
      setShow(false)
    }

  return (
    <>
      <div className='Container'>
        {!show && (
          <button onClick={showFunc}>Click</button>
        )}
          {show &&(
            <ModalComponent 
            onClick={hideFunc}/>
          )
          }
      </div>
    </>
  )
}

export default App
