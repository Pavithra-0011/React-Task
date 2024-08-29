import {useState} from 'react'
import { useDispatch } from 'react-redux';
import postData from '../Redux/Action/action'
import './modal.scss'

function ModalComponent({onClick}) {
    const [details, setDetails] = useState({
        firstname : '',
        lastname : '',
        age : ''
      })
      const dispatch = useDispatch()
      const submitData = ()=>
      {
        dispatch(postData(details));
      }

      const HandleChange = (e)=>
        {
          setDetails({
            ...details,
            [e.target.name] : [e.target.value],
          })
          console.log(e.target.value)
        }
  return (
    <>
     <div className='Modal-Container'>
        <div className='Modal'>
            <div className='Modal-head'>
                <h2>Details</h2>
            </div>
            <div className='Modal-body'>
                <input name='firstname' placeholder='First Name' value={details.firstname} onChange={HandleChange}/>
                <input name= 'lastname' placeholder='Last Name' value={details.lastname} onChange={HandleChange}/>
                <input name= 'age' placeholder='Age' value={details.age} onChange={HandleChange}/>
            </div>
            <div className='Modal-footer'>
               <div className='Buttons'>
                 <button onClick={onClick}>Exit</button>
                 <button onClick={(data) => submitData(data)}>Submit</button>
               </div>
            </div>
        </div>
     </div>
    </>
  )
}

export default ModalComponent