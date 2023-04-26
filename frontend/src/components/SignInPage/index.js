import { useSignInUserMutation } from '../../store';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignInForm from './SignInForm';
import Tab from 'react-bootstrap/Tab';
import SignUpForm from './SignUpForm';
import { StyledTabs, StyledContainer } from './style.css';

function SignInPage() {
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

  const navigate = useNavigate();

  const handleEmailInputChange = (event) => {
    setEmailInput(event.target.value);
    console.log('Email Input: ', emailInput);
  };

  const handlePasswordInputChange = (event) => {
    setPasswordInput(event.target.value);
    console.log('Password Input: ', passwordInput);
  };

  const handleSignInUser = (event) => {
    event.preventDefault();

    // signInUser({email: 'daniel-505@yahoo.com', password: 'fhgruefR5$hj'});//test line
    signInUser({ email: emailInput, password: passwordInput });
    // .unwrap()
    // .then((fulfilled) => console.log(fulfilled))
    // .catch((rejected) => console.error(rejected));
    console.log('Response results: ', results);
  };

  if (results.isLoading) {
    content = <div>Loading...</div>;
  } else if (results.isError) {
    content = <div>{results.error.data.message}</div>;
  } else if (results.status === 'fulfilled' && results.isSuccess) {
    content = <div>Welcome, {results.data.email} !</div>;
    const emailWithoutDomain = results.data.email.substring(
      0,
      results.data.email.indexOf('@')
    );
    navigate('/userPage', {
      replace: true,
      state: { email: emailWithoutDomain },
    });
  }

  console.log('Response results after if statement: ', results);

  return (
    <StyledContainer fluid="md" className="p-5 mb-4 mt-5 bg-info rounded-3">
      <StyledTabs
        defaultActiveKey="sign-in"
        id="home-page-tabs"
        className="mb-3"
        justify
      >
        <Tab eventKey="sign-in" title="Sign In">
          <SignInForm
            emailInput={emailInput}
            handleEmailInputChange={handleEmailInputChange}
            passwordInput={passwordInput}
            handlePasswordInputChange={handlePasswordInputChange}
            handleSignInUser={handleSignInUser}
          />
          {content}
        </Tab>
        <Tab eventKey="sign-up" title="Sign Up">
          <SignUpForm />
        </Tab>
      </StyledTabs>
    </StyledContainer>
  );
}

export default SignInPage;
