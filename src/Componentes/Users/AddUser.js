import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import '../styles/users.css'
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUser, setEnteredUser] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState('')

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUser.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Valores nulos',
        message: 'Por favor ingrese un usuario y una edad, no se admiten valores vacios!'
      });
      return (console.log('no puede dejar campos vacios'));
    }
    if (enteredAge < 0) {
      setError({
        title: 'Edad no valida',
        message: 'Por favor ingrese una edad mayor a "0"'
      });
      return(console.log('ingrese una edad valida'))
    }
    props.onAddUser(enteredUser ,enteredAge);
    setEnteredAge("");
    setEnteredUser("");
  };

  const usernameInputHandler = (event) => {
    setEnteredUser(event.target.value);
  };

  const ageInputHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null)
  }



  return (
    <div>
      {error && (
        <ErrorModal 
          title={error.title} 
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={usernameInputHandler}
            value={enteredUser}
          />
          <label htmlFor="age">Age (years)</label>
          <input
            id="Age"
            type="number"
            onChange={ageInputHandler}
            value={enteredAge}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
