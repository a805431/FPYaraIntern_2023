import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { Eye, EyeSlash } from 'react-bootstrap-icons';
import { useState } from 'react';
import { StyledButton } from './style.css';

function PasswordInput({ className, value, onChange }) {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <InputGroup className="mb-3">
      <Form.Control
        className={className}
        placeholder="Password"
        type={showPassword ? 'text' : 'password'}
        value={value}
        onChange={onChange}
      />
      <StyledButton
        id="eyeButton"
        className='form-control-append'
        onClick={handleShowPassword}
      >
        {showPassword ? <EyeSlash /> : <Eye />}
      </StyledButton>
    </InputGroup>
  );
}

export default PasswordInput;
