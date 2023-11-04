import React, { useState } from 'react';
import '../style/form.css';
import Comment from './comments';

export default function Form() {
  const [alertMessage, setAlertMessage] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (fullName !== fullName.toLowerCase() || email !== email.toLowerCase()) {
      setAlertMessage('Full Name and Email must be in lowercase');
    } else {
      setAlertMessage('Form submitted');
    }
  };

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className="form-container">
      <div className="form-h2">
        <h2>
          I&apos;m always interested in hearing about new projects, so if you&apos;d like
          to chat please get in touch.
        </h2>
      </div>
      <div>
        <form
          action="https://formspree.io/f/mrgvjnke"
          method="POST"
          id="form"
          onSubmit={handleSubmit}
        >
          <div className="intouch-container">
            <input
              className="fullName"
              type="text"
              name="fullName"
              placeholder="Full Name"
              maxLength="100"
              value={fullName}
              onChange={handleFullNameChange}
            />
            <input
              className="email"
              type="email"
              name="email"
              placeholder="Email Address"
              maxLength="100"
              value={email}
              onChange={handleEmailChange}
            />
            <button className="submit" type="submit">
              Get in touch
            </button>
          </div>
          <span className="alert">{alertMessage}</span>
        </form>
        <Comment />
      </div>
    </div>
  );
}
