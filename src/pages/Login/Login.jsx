import { Api } from "../../utils/api";
import { useState } from "react";
import "./Login.css";

export function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  async function login(event) {
    event.preventDefault();
    const apiAnswer = await Api.login(user);
  }

  return (
    <div className="Login">
      <form onSubmit={login} className="Login--form">
        <input
          className="Login--input"
          placeholder="Email"
          type="email"
          required={true}
          onChange={(event) => setUser({ ...user, email: event.target.value })}
        />
        <br />
        <input
          className="Login--input"
          placeholder="Password"
          type="password"
          required={true}
          onChange={(event) =>
            setUser({ ...user, password: event.target.value })
          }
        />
        <br />
        <div className="Login--divButton">
          <button type="submit" className="Login--button">
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
}
