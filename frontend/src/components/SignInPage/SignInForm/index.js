import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PasswordInput from '../PasswordInput';

function SignInForm({
  emailInput,
  handleEmailInputChange,
  passwordInput,
  handlePasswordInputChange,
  handleSignInUser,
}) {
  return (
    <Stack>
      <Form.Group className="mb-3">
        <Form.Label>Email Address</Form.Label>
        <Form.Control
          className="emailInput"
          type="email"
          value={emailInput}
          onChange={handleEmailInputChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        {/* <Form.Control
          className="password"
          type="password"
          value={passwordInput}
          onChange={handlePasswordInputChange}
        /> */}
        <PasswordInput
          className="password"
          value={passwordInput}
          onChange={handlePasswordInputChange}
        />
      </Form.Group>
      <Button
        variant="primary"
        type="submit"
        size="lg"
        onClick={handleSignInUser}
      >
        Sign In
      </Button>
    </Stack>
  );
}

export default SignInForm;
