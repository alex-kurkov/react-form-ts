import './App.css';
import { SignIn } from './signin';
import { SignUp } from './signup';

function App() {

  const handleSignInSubmit: OnFormSubmit = (data) => {
    console.log('Submitting data: ', data);
  }

  return (
    <div className="App">
      <header className="App-header">
        <SignIn
          submitButtonText='sign in'
          onFormSubmit={handleSignInSubmit}
        />
        <SignUp
          submitButtonText='sign in'
          onFormSubmit={handleSignInSubmit}
        />
      </header>
    </div>
  );
}

export default App;
