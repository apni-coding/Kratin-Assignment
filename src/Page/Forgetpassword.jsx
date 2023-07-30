import React, { useState } from 'react';
import { auth } from '../Firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleResetPassword = async (event) => {
    event.preventDefault();

    try {
      await auth.sendPasswordResetEmail(email);
      setMessage('Password reset link sent. Check your email.');
    } catch (error) {
      setMessage('Error sending reset link. Please try again.');
    }
  };

  return (
    <section className="section">
      <div className="login-box">
        <form onSubmit={handleResetPassword}>
          <h2>Forgot Password</h2>
          <div className="input-box">
            <span className="icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            <label>Email</label>
          </div>

          <button type="submit">Reset Password</button>

          <div className="register-link">
            <p>
              Remember your password? <Link to="/signin">Signin</Link>
            </p>
          </div>
        </form>
        {message && <p className='message'>{message}</p>}
      </div>
    </section>
  );
};

export default ForgotPassword;
