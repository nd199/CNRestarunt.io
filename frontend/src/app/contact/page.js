import React from "react";
import styles from "./page.module.css";
import ContactUs from "@/components/contact/ContactUs";

const Contact = () => {
  return (
    <div className={styles.container}>
      <ContactUs />
    </div>
  );
};

export default Contact;
