import { Api } from "../../utils/api";
import { useState } from "react";
import "./Register.css";

export function Register() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  async function register(event) {
    event.preventDefault();
    const apiAnswer = await Api.register(user);
    console.log(apiAnswer);
  }

  return (
    <div className="Register">
      <form onSubmit={register} className="Register--form">
        <input
          className="Register--input"
          placeholder="Name"
          type="photo"
          required={true}
          onChange={(event) => setUser({ ...user, name: event.target.value })}
        />
        <br />
        <input
          className="Register--input"
          placeholder="Username"
          type="text"
          required={true}
          onChange={(event) =>
            setUser({ ...user, username: event.target.value })
          }
        />
        <br />
        <input
          className="Register--input"
          placeholder="Email"
          type="email"
          required={true}
          onChange={(event) => setUser({ ...user, email: event.target.value })}
        />
        <br />
        <input
          className="Register--input"
          placeholder="Password"
          type="password"
          required={true}
          onChange={(event) =>
            setUser({ ...user, password: event.target.value })
          }
        />
        <br />
        <input
          className="Register--input"
          placeholder="Photo"
          type="text"
          required={true}
          onChange={(event) => setUser({ ...user, photo: event.target.value })}
        />
        <br />
        <div className="Register--divButton">
          <button type="submit" className="Register--button">
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
}
