import { useState } from "react";
import { Api } from "../../utils/api";
import "./CreationModal.css";

export function CreationModal({ getChars, changeCreationModal }) {
  const [char, setChar] = useState({
    user: "",
    name: "",
    imageUrl: "",
  });

  function createChar(event) {
    event.preventDefault();
    Api.createChar(char);
    changeCreationModal();
    setTimeout(getChars(), 3000);
  }

  return (
    <div className="CreationModal">
      <form onSubmit={createChar} className="CreationModal--form">
        <input
          className="CreationModal--input"
          type="text"
          placeholder="Name"
          required={true}
          onChange={(event) => setChar({ ...char, name: event.target.value })}
        />
        <br />
        <input
          className="CreationModal--input"
          type="text"
          placeholder="Photo"
          required={true}
          onChange={(event) =>
            setChar({ ...char, imageUrl: event.target.value })
          }
        />
        <br />
        <input
          className="CreationModal--input"
          type="text"
          placeholder="Creator"
          onChange={(event) => setChar({ ...char, user: event.target.value })}
        />
        <br />
        <div className="CreationModal--divButton">
          <button className="CreationModal--button" type="submit">
            SEND
          </button>
          <button
            className="CreationModal--button"
            type="button"
            onClick={() => changeCreationModal()}
          >
            CLOSE
          </button>
        </div>
      </form>
    </div>
  );
}
