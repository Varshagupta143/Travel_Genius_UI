import { useState } from "react";

export default function Signup({ goBack, styles }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignup(e) {
    e.preventDefault();
    alert(`Account created 🎉 (UI only)\nName: ${name}\nEmail: ${email}`);
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
