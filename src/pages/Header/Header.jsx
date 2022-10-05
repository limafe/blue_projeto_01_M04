import "./Header.css";

export function Header({ setPage }) {
  return (
    <div className="Header">
      <nav className="Header--nav">
        <button className="Header--button" onClick={() => setPage("login")}>
          Login
        </button>
        <button className="Header--button" onClick={() => setPage("register")}>
          Register
        </button>
        <button
          className="Header--button"
          onClick={() => setPage("characters")}
        >
          Characters
        </button>
      </nav>
    </div>
  );
}
