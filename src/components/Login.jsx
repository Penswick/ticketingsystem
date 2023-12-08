import React, { useState } from 'react';
import '../App.scss';

function AuthPage() {
  const [isLoginView, setIsLoginView] = useState(true);
  const [userData, setUserData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });
  const [passwordError, setPasswordError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });

    // Reset password error on any change
    setPasswordError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isLoginView) {
      // Check if passwords match
      if (userData.password !== userData.confirmPassword) {
        setPasswordError('Passwords do not match.');
        return;
      }
    }
    // Proceed with form submission
    // TODO: Handle login or registration
    console.log(isLoginView ? 'Logging in:' : 'Registering:', userData);
  };

  return (
    <div className="auth-page">
      <h1>{isLoginView ? 'Login' : 'Register'}</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={userData.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={userData.password}
          onChange={handleChange}
        />

        {!isLoginView && (
          <>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={userData.confirmPassword}
              onChange={handleChange}
            />
            {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
          </>
        )}

        <button type="submit">{isLoginView ? 'Login' : 'Register'}</button>
      </form>

      <button onClick={() => setIsLoginView(!isLoginView)}>
        {isLoginView ? 'Need to register? Click here' : 'Already have an account? Login'}
      </button>
    </div>
  );
}

export default AuthPage;
