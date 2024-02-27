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



  const modalStyle = {
    // display: 'none',
    // position: 'fixed',
    // top: 0,
    // left: 0,
    // width: '100%',
    // height: '100%',
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    // justifyContent: 'center',
    // alignItems: 'center',
  };

  
const modalContentStyle = {
  // backgroundColor: '#fff',
  // padding: '20px',
  // borderRadius: '5px',
};

const formStyle={
  display: "flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center"
}

const labelStyle = {
  display: 'block',
  marginBottom: '8px',
};

const inputStyle = {
  
  padding: '8px',
  marginBottom: '16px',
};
  
  const buttonStyle={
    backgroundColor:"#0000FF",
    color:"#ffffff",
    width:"100px"
  }
  const pageStyle={
    display: "flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center"
  }

  return (
    <div >
      <div style={pageStyle}>
      <h1>User Details Modal</h1>
      <button style={buttonStyle} onClick={openForm}>Open Form</button>
      </div>
      {modalOpen && (
        <div style={modalStyle} onClick={closeForm}>
          <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
            
            <form style={formStyle}>
            <h2>Fill details</h2>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                style={inputStyle}
                size="100"
              />

              <label htmlFor="email">Email Address:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={inputStyle}
                size="100"
              />

              <label htmlFor="phone">Phone Number:</label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                pattern="[0-9]{10}"
                required
                style={inputStyle}
                size="100"
              />

              <label htmlFor="dob">Date of Birth:</label>
              <input
                type="date"
                id="dob"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                required
                style={inputStyle}
                size="50"
              />

              <button
                type="button"
                onClick={submitForm}
                style={buttonStyle}
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


