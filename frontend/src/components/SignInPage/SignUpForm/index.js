// import { useFetchUserQuery } from "../../store";
// import { useState } from 'react';
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function SignUpForm() {
  // const email = "daniel@yahoo.com";
  // const { data, error, isLoading } = useFetchUserQuery(email);

  // console.log(data, error, isLoading);

  return (
    <Stack className="mb-3">
      <Form.Group className="mb-3">
        <Form.Label>Email Address</Form.Label>
        <Form.Control className="emailInput" type="email" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control className="password" type="password" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Confirm password</Form.Label>
        <Form.Control className="confirmPassword" type="password" />
      </Form.Group>
      <Button variant="primary" type="submit" size="lg">
        Create Profile
      </Button>
    </Stack>
  );
}

export default SignUpForm;
