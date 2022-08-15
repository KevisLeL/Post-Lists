import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import Card from '../Components/UIElements/Card';
import Footer from '../Components/UIElements/Footer';
import store from 'src/State/store';
import { ActionCreators } from '../State/actions';

import "./LoginPage.scss";

interface Login {
  email: string
  password: string
}

const HomePage: React.FC = () => {
  const [inputLoginValues, setInputLoginValues] = useState<Login>({
    email: '',
    password: ''
  })
  const [isUserLogged, setIsUserLogged] = useState<boolean>(false)

  const navigate = useNavigate();
  
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputLoginValues({
      ...inputLoginValues,
      [evt.target.name]: evt.target.value
    })
  };

  const logInUser: React.MouseEventHandler<HTMLButtonElement> = () => {
    if(inputLoginValues.email && inputLoginValues.password) {
      console.log('LOGGED!')
      setIsUserLogged(true);
      navigate("/homePage");
      store.dispatch(ActionCreators.login({
        email: inputLoginValues.email,
        password:inputLoginValues.password,
        isLogged: true
      }))
    
    //Se debería enviar request al backend con datos cifrados para checkear si el user existe.
      
    } else {
      console.log('Incorrect Email or Password. Please try again.')
      setIsUserLogged(false);
      return false 
    }
  }

  return (
    <React.Fragment>
      <Card className="authentication">
        <form className='form'>
          <label className='login__label'>Email</label>
          <input type="text" value={inputLoginValues.email} onChange={handleChange} id="email" name="email" placeholder="Email" required />

          <label className='login__label'>Password</label>
          <input type="text" value={inputLoginValues.password} onChange={handleChange} id="password" name="password" placeholder="Password" required />

        </form>
        {inputLoginValues.email && inputLoginValues.password &&
          <button
            className="post-item__button--edit"
            onClick={logInUser}
          >
            LOG IN
          </button>
        }
      </Card>
      <Footer />
    </React.Fragment>
  );
}

export default HomePage;