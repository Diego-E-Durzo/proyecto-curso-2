import React from 'react'
import Button from './Button';
import '../styles/ui.css';
import '../styles/users.css';


const ErrorModal = (props) => {
  return(
    <div className='backdrop' onClick={props.onConfirm}>
      <div className='modal' >
        <header>
          <h2>{props.title}</h2>
        </header>
        <div className='modal-div'>
          <p>{props.message}</p>
        </div>
        <footer>
          <Button onClick={props.onConfirm}>Okey</Button>
        </footer>
      </div>
    </div>
  )
};

export default ErrorModal;