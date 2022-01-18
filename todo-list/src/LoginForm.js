import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const username = useFormInput('')
  const password = useFormInput('')
  const [error] = useState(null);
  const [loading] = useState(false);
  const history = useNavigate();

  // handle button click of login form
  const handleLogin = () => {
    history("/dashboard");
  };


  const handleFormSubmit = () => {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      Login
      <br />
      <br />
      <div>
        Username
        <br />
        <input
          name="username"
          {...username}
        />
      </div>
      <div style={{ marginTop: 10 }}>
        Password
        <br />
        <input
          type="password"
          {...password}
        />
      </div>
      {error && (
        <>
          <small style={{ color: "red" }}>{error}</small>
          <br />
        </>
      )}
      <br />
      <input
        type="submit"
        value={loading ? "Loading..." : "Login"}
        onClick={handleLogin}
        disabled={loading}
      />
    </form>
  );
};

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);
  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}

export default Login;
