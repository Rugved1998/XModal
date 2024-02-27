// App.js

import React, { useState } from 'react';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');

  const openForm = () => {
    setModalOpen(true);
  };

  const closeForm = () => {
    setModalOpen(false);
  };

  const submitForm = () => {
    if (!username || !email || !phone || !dob) {
      alert('Please fill out all the fields.');
      return;
    }

    // Email validation
    if (!email.includes('@')) {
      alert('Invalid email. Please check your email address.');
      return;
    }

    // Phone number validation
    if (!/^\d{10}$/.test(phone)) {
      alert('Invalid phone number. Please enter a 10-digit phone number.');
      return;
    }

    // Date of birth validation
    const currentDate = new Date();
    if (new Date(dob) > currentDate) {
      alert('Invalid date of birth. Date of birth cannot be in the future.');
      return;
    }

    // Form submission successful
    alert('Form submitted successfully!');
    closeForm();
  };

  return (
    <div>
      <button onClick={openForm}>Open Form</button>

      {modalOpen && (
        <div className="modal" onClick={closeForm}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Fill details</h2>
            <form>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />

              <label htmlFor="email">Email Address:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <label htmlFor="phone">Phone Number:</label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                pattern="[0-9]{10}"
                required
              />

              <label htmlFor="dob">Date of Birth:</label>
              <input
                type="date"
                id="dob"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                required
              />

              <button
                type="button"
                className="submit-button"
                onClick={submitForm}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};


