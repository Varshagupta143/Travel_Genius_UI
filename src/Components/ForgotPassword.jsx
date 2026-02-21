import { useState } from "react";

export default function ForgotPassword({ goBack, styles }) {
  const [email, setEmail] = useState("");

  function handleSend(e) {
    e.preventDefault();
    alert(`Reset link sent to ${email} 📩 (UI only)`);
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
