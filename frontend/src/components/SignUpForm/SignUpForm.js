function SignUpForm() {
  return (
    <div>
      <form>
        <label>Email</label>
        <p>
          <input className="emailInput" />
        </p>
        <label>Password</label>
        <p>
          <input className="userName" />
        </p>
        <label>Confirm password</label>
        <p>
          <input className="userName" />
        </p>
      </form>
    </div>
  );
}

export default SignUpForm;
