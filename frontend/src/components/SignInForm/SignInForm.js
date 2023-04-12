import { useSignInUserMutation } from '../../store';
import { useState } from 'react';

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
    // signInUser(emailInput, passwordInput);
    // signInUser('daniel-505@yahoo.com', 'fghfdhjhjh');
    signInUser('daniel-505@yahoo.com', 'fhgruefR5$hj').unwrap().then(fulfilled => console.log(fulfilled)).catch(rejected => console.error(rejected));
		console.log(results.data);
  };

  return (
    <div>
      <form>
        <label>Email</label>
        <p>
          <input
            className="emailInput"
            value={emailInput}
            onChange={handleEmailInputChange}
          />
        </p>
        <label>Password</label>
        <p>
          <input
            className="password"
            value={passwordInput}
            onChange={handlePasswordInputChange}
          />
        </p>
        <button onClick={handleSignInUser}>Sign In</button>
      </form>
      {content}
    </div>
  );
}

export default SignInForm;
