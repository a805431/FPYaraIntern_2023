import { useSignInUserMutation } from '../../store';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

function SignInForm() {
  // // test query with hardcoded email
  // const email = "daniel-505@yahoo.com";
  // const { data, error, isLoading } = useFetchUserQuery(email);

  // console.log(data, error, isLoading);

  // test query with hardcoded email and password
  // const email = 'daniel-505@yahoo.com';
  // const password = 'fhgruefR5$hj';

  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const [signInUser, results] = useSignInUserMutation();

  let content = '';

  const handleEmailInputChange = (event) => {
    setEmailInput(event.target.value);
    console.log(emailInput);
  };

  const handlePasswordInputChange = (event) => {
    setPasswordInput(event.target.value);
  };

  const handleSignInUser = (event) => {
    event.preventDefault();

    signInUser({email: 'daniel-505@yahoo.com', password: 'fhgruefR5$hj'})
      .unwrap()
      .then((fulfilled) => console.log(fulfilled))
      .catch((rejected) => console.error(rejected));
    console.log(results.data);
  };

  return (
      <Container fluid="md" className='p-5 mb-4 mt-5 bg-info rounded-3'>
        <form>
          <label>Email</label>
          <p>
            <input
              className="emailInput"
              type="text"
              value={emailInput}
              onChange={handleEmailInputChange}
            />
          </p>
          <label>Password</label>
          <p>
            <input
              className="password"
              type="text"
              value={passwordInput}
              onChange={handlePasswordInputChange}
            />
          </p>
          <Button onClick={handleSignInUser}>Sign In</Button>
        </form>
        {content}
      </Container>
  );
}

export default SignInForm;
