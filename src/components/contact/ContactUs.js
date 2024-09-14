"use client";
import React, { useState } from "react";
import styles from "./contact.module.css";
import { Playfair_Display } from "next/font/google";

const logoFnt = Playfair_Display({
  subsets: ["latin-ext"],
  weight: ["400"],
  style: ["italic"],
});

const ContactUs = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const validate = () => {
    const errors = {
      name: !formState.name,
      email: !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formState.email),
      subject: !formState.subject,
      message: !formState.message,
    };
    return errors;
  };

  const errors = validate();

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.mainTitle}>
          <h1 className={logoFnt.className}>Contact Us</h1>
        </div>
        <p className={styles.para}>
          If you have any questions, feel free to reach us by filling out the
          form below.
        </p>
        <div className={styles.contentWrapper}>
          <form
            className={styles.form}
            onSubmit={(e) => {
              e.preventDefault();
              if (!Object.values(errors).includes(true)) {
                console.log("Form submitted");
              }
            }}
          >
            <div className={styles.inputs}>
              <div className={styles.input}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  onBlur={() => setTouched((prev) => ({ ...prev, name: true }))}
                  className={styles.inputBox}
                  required
                  aria-required="true"
                  aria-describedby="nameError"
                />
                {touched.name && errors.name && (
                  <span id="nameError" className={styles.errorMessage}>
                    Please enter your name.
                  </span>
                )}
              </div>
              <div className={styles.input}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  onBlur={() =>
                    setTouched((prev) => ({ ...prev, email: true }))
                  }
                  className={styles.inputBox}
                  required
                  aria-required="true"
                  aria-describedby="emailError"
                />
                {touched.email && errors.email && (
                  <span id="emailError" className={styles.errorMessage}>
                    Please enter a valid email address.
                  </span>
                )}
              </div>
              <div className={styles.input}>
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  placeholder="Enter Subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  onBlur={() =>
                    setTouched((prev) => ({ ...prev, subject: true }))
                  }
                  className={styles.inputBox}
                  required
                  aria-required="true"
                  aria-describedby="subjectError"
                />
                {touched.subject && errors.subject && (
                  <span id="subjectError" className={styles.errorMessage}>
                    Please enter a subject.
                  </span>
                )}
              </div>
            </div>
            <div className={styles.textarea}>
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                placeholder="Enter Your Message"
                value={formState.message}
                onChange={handleChange}
                onBlur={() =>
                  setTouched((prev) => ({ ...prev, message: true }))
                }
                className={styles.textareaBox}
                rows="6"
                required
                aria-required="true"
                aria-describedby="messageError"
              />
              {touched.message && errors.message && (
                <span id="messageError" className={styles.errorMessage}>
                  Please enter your message.
                </span>
              )}
            </div>
            <button className={styles.btn} type="submit">
              Send Message
            </button>
          </form>
          <div className={styles.contactInfo}>
            <div>
              <h3>Call Us:</h3>
              <p className={styles.phoneNumber}>+91-8072205480</p>
            </div>
            <div>
              <h3>Hours:</h3>
              <p>Mon-Fri: 11am – 8pm</p>
              <p>Sat, Sun: 9am – 10pm</p>
            </div>
            <div>
              <h3>Our Location:</h3>
              <p>5, Street I live</p>
              <p>Area I Live, Chennai</p>
              <p>Tamil Nadu, India</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
