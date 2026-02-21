import { useState } from "react";
import ForgotPassword from "./ForgotPassword";
import Signup from "./Signup";

export default function Login() {
  const [page, setPage] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    alert("Login clicked 🚀");
  }

  return (
    <div style={styles.page}>
      {/* LEFT SIDE */}
      <div style={styles.left}>
        <div style={styles.overlay}>
          <h1 style={styles.heroTitle}>Explore the World</h1>
          <p style={styles.heroText}>
            Discover destinations. Plan trips. Travel smarter.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div style={styles.right}>
        {/* ✅ LOGIN */}
        {page === "login" && (
          <div style={styles.card}>
            <div style={styles.logoBox}>🌍</div>
            <h2 style={styles.title}>Travel Genius</h2>
            <p style={styles.subtitle}>Plan smarter. Travel better.</p>

            <form style={styles.form} onSubmit={handleLogin}>
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
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button style={styles.button} type="submit">
                Login
              </button>

              <div style={styles.links}>
                <span style={styles.link} onClick={() => setPage("forgot")}>
                  Forgot password?
                </span>

                <span style={styles.linkStrong} onClick={() => setPage("signup")}>
                  Create account
                </span>
              </div>
            </form>
          </div>
        )}

        {/* ✅ FORGOT */}
        {page === "forgot" && (
          <ForgotPassword goBack={() => setPage("login")} styles={styles} />
        )}

        {/* ✅ SIGNUP */}
        {page === "signup" && (
          <Signup goBack={() => setPage("login")} styles={styles} />
        )}
      </div>
    </div>
  );
}

const styles = {
  page: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    fontFamily: "sans-serif",
    overflow: "hidden", // ✅ prevents weird scrolling/overlap
  },

  /* LEFT SIDE */
  left: {
    flex: 1,
    background:
      "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600') center/cover no-repeat",
    position: "relative",
  },

  overlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(0,0,0,0.45)",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingLeft: "60px",
  },

  heroTitle: { fontSize: "42px", fontWeight: "900", marginBottom: "10px" },
  heroText: { fontSize: "18px", opacity: 0.9 },

  /* RIGHT SIDE */
  right: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #0ea5e9, #6366f1, #a855f7)",
    padding: "24px", // ✅ keeps spacing on small screens
  },

  // ✅ SAME CARD USED BY LOGIN, FORGOT, SIGNUP
  card: {
    width: "100%",
    maxWidth: "420px",
    background: "rgba(255,255,255,0.18)",
    backdropFilter: "blur(18px)",
    borderRadius: "22px",
    padding: "28px",
    boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
    color: "white",
  },

  logoBox: { fontSize: "36px", marginBottom: "10px" },
  title: { margin: 0, fontSize: "26px", fontWeight: "800" },
  subtitle: { fontSize: "14px", marginBottom: "20px", opacity: 0.85 },

  form: { display: "flex", flexDirection: "column", gap: "12px" },
  label: { fontSize: "13px", fontWeight: "600" },

  input: {
    width: "100%",
    height: "46px",
    borderRadius: "12px",
    border: "none",
    padding: "0 12px",
    outline: "none",
  },

  button: {
    height: "50px",
    borderRadius: "14px",
    border: "none",
    fontWeight: "800",
    fontSize: "16px",
    cursor: "pointer",
    background: "white",
    color: "#0b1220",
    marginTop: "8px",
  },

  links: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "12px",
    fontSize: "13px",
  },

  link: { cursor: "pointer", opacity: 0.9 },
  linkStrong: { cursor: "pointer", fontWeight: "800" },

  backBtn: {
    marginTop: "14px",
    border: "none",
    background: "transparent",
    cursor: "pointer",
    fontWeight: "800",
    color: "white",
    textDecoration: "underline",
    padding: 0,
    textAlign: "left",
  },
};
