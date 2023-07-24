"use client"; // This is a client component 👈🏽
import { useState } from 'react';
import MySideBar from '../components/myside';

const styles = {
    contact: {
  marginLeft: '100px',
    width: '80%',
      padding: '20px 0',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flexstart',
      alignItems: 'center',
      gap: '30px',
    },
    // h1:{
    //   display: 'flex',
    //   justifyContent: 'flex-start',
    //   alignItems: 'flex-start'
    // },
    Form: {
      display: 'grid',
      gridGap: '20px',
      width:'100%',
      padding: '30px 0'
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column',
      padding: '15px 0',
      marginLeft: '100px'
    },
    label: {
      fontSize: '18px',
      fontWeight: 'bold',
      marginBottom: '8px',
    },
    input: {
      padding: '10px',
      fontSize: '16px',
      border: '1px solid #ccc',
      borderRadius: '4px',
    },
    textArea: {
      padding: '10px',
      fontSize: '16px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      resize: 'vertical',
    },
    submitButton: {
      padding: '10px 20px',
      backgroundColor: '#0070f3',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      fontSize: '16px',
      cursor: 'pointer',
      marginLeft: '100px'
    },
    successMessage: {
      backgroundColor: '#34d399',
      padding: '10px',
      color: '#fff',
      textAlign: 'center',
      fontSize: '18px',
      borderRadius: '4px',
    },
  };
  
  const Contact = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission logic here (not included in this example).
      setIsSubmitted(true);
    };
  
    return (
      <>
      <MySideBar />
      <div style={styles.contact}>

        <h1>Contact Us</h1>
        {isSubmitted ? (
          <div style={styles.successMessage}>Thank you! Your message has been sent.</div>
        ) : (
          <form style={styles.Form} onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
              <label htmlFor="name" style={styles.label}>
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={styles.input} />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="email" style={styles.label}>
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={styles.input} />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="subject" style={styles.label}>
                Subject:
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                style={styles.input} />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="message" style={styles.label}>
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                style={styles.textArea} />
            </div>
            <button type="submit" style={styles.submitButton}>
              Submit
            </button>
          </form>
        )}
      </div></>
    );
  };
  
  export default Contact;