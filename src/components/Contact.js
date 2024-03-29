import React from 'react';
import "./contact.css"
import arrow from"../arrow.png"
import tony from "../tony.png"
const Contact = () => {
  return (
    <div className='contact-container-main'>
    <div className="contact-container">
      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        className="contact-left"
      >
        <div className="contact-left-title">
          <h2>Drop Us a Line</h2>
          <hr />
        </div>
        <input
          type="hidden"
          name="access_key"
          value="7618369d-7e44-4ff3-a957-b836621323b5"
        />
        <input
          type="text"
          name="name"
          placeholder="Enter your name..."
          className="contact-inputs"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email... "
          className="contact-inputs"
          required
        />
        <textarea
          name="message"
          placeholder="Enter your message..."
          className="contact-inputs"
          required
        ></textarea>
        <button type="submit">
          Submit <img  src={arrow} alt="arrow icon" />
        </button>
      </form>
      <div className="contact-right">
      <img  src={tony} alt="right Icon" />
      </div>
    </div>
    </div>
  );
}

export default Contact;
