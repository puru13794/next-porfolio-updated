import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const contact = (props) => {
  const [mailData, setMailData] = useState({
    email: "",
    name: "",
    message: "",
  });
  const [error, setErrors] = useState({
    email: false,
    name: false,
    message: false,
  });
  const submitHandler = async (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!mailData.name.trim()) {
      validationErrors.name = true;
    }
    if (!/^\S+@\S+\.\S+$/.test(mailData.email)) {
      validationErrors.email = true;
    }
    if (!mailData.message.trim()) {
      validationErrors.message = true;
    }

    // If there are validation errors, update the state and return
    if (Object.keys(validationErrors).length > 0) {
      // console.error('error')
      setErrors(validationErrors);
      return;
    }

    // const formData = new FormData();
    // formData.append("name", `${mailData.email}`);
    // formData.append("email", `${mailData.name}`);
    // formData.append("message", `${mailData.message}`);
    try {
      const response = await fetch("/api/contact", {
        method: "post",
        // body: formData,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(mailData),
      });

      if (!response.ok) {
        console.log("falling over");
        throw new Error(`response status: ${response.status}`);
      }
      const responseData = await response.json();
      console.log(responseData["message"]);

      // alert("Message successfully sent");
    } catch (err) {
      console.error(err);
      // alert("Error, please try resubmitting the form");
    }
    // console.log(formData);

    setErrors({
      email: false,
      name: false,
      message: false,
    });
    setMailData({
      email: '',
      name: '',
      message: '',
    });
  };

  return (
    <div id="contact" className={styles.contactWrapper}>
      <h2 className={styles.heading}>CONTACT</h2>
      <p className={styles.desc}>Feel free to contact me through below form.</p>
      <div className={styles.formWrapper}>
        <form onSubmit={submitHandler}>
          <div className={styles.inputWrapper}>
            <label for="name">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={mailData.name}
              onChange={(e) =>
                setMailData({ ...mailData, name: e.target.value })
              }
            />
          </div>
          <div className={styles.inputWrapper}>
            <label for="email">Email</label>
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              value={mailData.email}
              onChange={(e) =>
                setMailData({ ...mailData, email: e.target.value })
              }
            />
          </div>
          <div className={styles.inputWrapper}>
            <label for="message">Message</label>
            <textarea
              className={styles.messageInput}
              type="text"
              name="message"
              placeholder="Enter your message"
              value={mailData.message}
              onChange={(e) =>
                setMailData({ ...mailData, message: e.target.value })
              }
            />
          </div>
          <button type="submit" className={styles.submit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default contact;
