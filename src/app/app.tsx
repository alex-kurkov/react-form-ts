import { useState } from 'react';
import './styles.css';
import { SignIn } from '../signin';
import { SignUp } from '../signup';

export function App() {
  const [showRegister, setShowRegister] = useState(false);

  const handleSubmit: OnFormSubmit = (data) => {
    console.log('Submitting data: ', data);
  }

  return (
    <div className="app">
      <header className="app__header">
        {!showRegister && (
          <>
            <SignIn submitButtonText="Войти" onFormSubmit={handleSubmit} />
            <p
              className="app__switch-text"
              onClick={() => setShowRegister(true)}>
              Еще не зарегистрированы?
            </p>
          </>
        )}
        {showRegister && (
          <>
            <SignUp
              submitButtonText="Зарегистрироваться"
              onFormSubmit={handleSubmit}
            />
            <p
              className="app__switch-text"
              onClick={() => setShowRegister(false)}>
              Уже зарегистрированы?
            </p>
          </>
        )}
      </header>
    </div>
  );
}
