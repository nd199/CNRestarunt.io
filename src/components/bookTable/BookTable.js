"use client";
import React, { useState } from "react";
import styles from "./bookTable.module.css";
import { Playfair_Display } from "next/font/google";
import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("@/components/bookTable/Map"), {
  ssr: false,
});

const logoFnt = Playfair_Display({
  subsets: ["latin-ext"],
  weight: ["400"],
  style: ["italic"],
});

const getLastDayOfMonth = () => {
  const now = new Date();
  const end = new Date(now.getFullYear(), now.getMonth() + 1, 0);
  return end.toISOString().split("T")[0];
};

const BookTable = () => {
  const today = new Date().toISOString().split("T")[0];
  const endOfMonth = getLastDayOfMonth();

  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    date: today,
    time: "10:00",
    personCount: 1,
  });

  const [touched, setTouched] = useState({
    name: false,
    phone: false,
    date: false,
    time: false,
    personCount: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const validate = () => {
    const errors = {
      name: !formState.name,
      phone: !/^\+\d{2}-\d{9}$/.test(formState.phone),
      date: formState.date < today || formState.date > endOfMonth,
      time: formState.time < "10:00" || formState.time > "21:00",
      personCount: formState.personCount < 1,
    };
    return errors;
  };

  const errors = validate();

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.mainTitle}>
          <h1 className={logoFnt.className}>Book A Table</h1>
        </div>
        <p className={styles.para}>We are open for reservations.</p>
        <p className={styles.para}>
          Please reach us dialing +91 8072205480 or fill out the form below
        </p>
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
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                placeholder="+CC-XXXXXXXXX"
                name="phone"
                value={formState.phone}
                onChange={handleChange}
                onBlur={() => setTouched((prev) => ({ ...prev, phone: true }))}
                className={styles.inputBox}
                pattern="\+\d{2}-\d{9}"
                title="Phone number must be in the format: +CC-XXXXXXXXX"
                required
                aria-required="true"
                aria-describedby="phoneError"
              />
              {touched.phone && errors.phone && (
                <span id="phoneError" className={styles.errorMessage}>
                  Phone number must be in the format: +CC-XXXXXXXXX
                </span>
              )}
            </div>
            <div className={styles.input}>
              <label htmlFor="date">Date</label>
              <input
                type="date"
                name="date"
                value={formState.date}
                onChange={handleChange}
                onBlur={() => setTouched((prev) => ({ ...prev, date: true }))}
                className={styles.inputBox}
                min={today}
                max={endOfMonth}
                required
                aria-required="true"
                aria-describedby="dateError"
              />
              {touched.date && errors.date && (
                <span id="dateError" className={styles.errorMessage}>
                  Please select a valid date between today and the end of the
                  month.
                </span>
              )}
            </div>
            <div className={styles.input}>
              <label htmlFor="time">Time</label>
              <input
                type="time"
                name="time"
                value={formState.time}
                onChange={handleChange}
                onBlur={() => setTouched((prev) => ({ ...prev, time: true }))}
                className={styles.inputBox}
                min="10:00"
                max="21:00"
                required
                aria-required="true"
                aria-describedby="timeError"
              />
              {touched.time && errors.time && (
                <span id="timeError" className={styles.errorMessage}>
                  Time must be between 10:00 AM and 9:00 PM.
                </span>
              )}
            </div>
          </div>
          <div className={styles.personCount}>
            <label htmlFor="personCount">Person Count</label>
            <input
              type="number"
              name="personCount"
              value={formState.personCount}
              onChange={handleChange}
              onBlur={() =>
                setTouched((prev) => ({ ...prev, personCount: true }))
              }
              min={1}
              placeholder="1 Person"
              className={styles.personInput}
              required
              aria-required="true"
              aria-describedby="personCountError"
            />
            {touched.personCount && errors.personCount && (
              <span id="personCountError" className={styles.errorMessage}>
                Number of persons must be at least 1.
              </span>
            )}
          </div>
          <button className={styles.btn} type="submit">
            Book Now
          </button>
        </form>
      </div>
      <DynamicMap />
    </div>
  );
};

export default BookTable;
