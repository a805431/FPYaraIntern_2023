import { useFetchUserQuery } from "../../store";
// import { useState } from 'react';

function SignUpForm() {
  const email = "daniel@yahoo.com";
  const { data, error, isLoading } = useFetchUserQuery(email);

  console.log(data, error, isLoading);

  return (
    <div>
      <form>
        <label>Email</label>
        <p>
          <input className="emailInput" />
        </p>
        <label>Password</label>
        <p>
          <input className="password" />
        </p>
        <label>Confirm password</label>
        <p>
          <input className="password" />
        </p>
      </form>
    </div>
  );
}

export default SignUpForm;
