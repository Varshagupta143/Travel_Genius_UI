import { useState } from "react";
import axios from "axios";

export default function ForgotPassword({ goBack, styles }) {

  const [email, setEmail] = useState("");

  async function handleSend(e) {
    e.preventDefault();
    console.log("Email sending:", email);
    try {
      const response = await axios.post(
                             "http://localhost:8081/auth/forgot-password",
                             { email: email }
                            );

      alert(response.data);

    } catch (error) {
      alert("Email not found ❌");
      console.log(error);
    }
  }

  return (
    <div style={styles.card}>
      <h2 style={styles.title}>Reset Password</h2>
      <p style={styles.subtitle}>Enter your email to get a reset link.</p>

      <form onSubmit={handleSend} style={styles.form}>
        <label style={styles.label}>Email</label>
        <input
          style={styles.input}
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button style={styles.button} type="submit">
          Send Reset Link
        </button>
      </form>

      <button style={styles.backBtn} onClick={goBack}>
        ← Back to Login
      </button>
    </div>
  );
}