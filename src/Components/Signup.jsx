import { useState } from "react";
import axios from "axios";

export default function Signup({ goBack, styles }) {

  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignup(e) {
    e.preventDefault();

    const body = {
      username: name,
      mobileNumber: mobileNumber,
      email: email,
      password: password
    };

    try {
      const response = await axios.post("http://localhost:8081/auth/registerUser",
                               body
                             );

      alert("Signup successful 🎉");
      console.log(response.data);

      goBack(); // go back to login page

    } catch (error) {
      alert("Signup failed ❌");
      console.log(error);
    }
  }

  return (
    <div style={styles.card}>
      <h2 style={styles.title}>Create Account</h2>
      <p style={styles.subtitle}>Join Travel Genius and start planning.</p>

      <form onSubmit={handleSignup} style={styles.form}>

        <label style={styles.label}>Full Name</label>
        <input
          style={styles.input}
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label style={styles.label}>Mobile Number</label>
        <input
          style={styles.input}
          type="tel"
          placeholder="9876543210"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
        />

        <label style={styles.label}>Email</label>
        <input
          style={styles.input}
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label style={styles.label}>Password</label>
        <input
          style={styles.input}
          type="password"
          placeholder="Create a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button style={styles.button} type="submit">
          Create Account
        </button>

      </form>

      <button style={styles.backBtn} onClick={goBack}>
        ← Back to Login
      </button>
    </div>
  );
}