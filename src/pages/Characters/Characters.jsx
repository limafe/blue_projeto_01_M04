import { useEffect, useState } from "react";
import { Api } from "../../utils/api";
import { Card } from "../Card/Card";
import { CreationModal } from "../CreationModal/CreationModal";
import "./Characters.css";

export function Characters() {
  const [characters, setCharacters] = useState([]);
  const [modalCreation, setModalCreation] = useState(false);

  async function getChars() {
    const chars = await Api.getChars();
    setCharacters(chars);
  }

  function changeCreationModal() {
    modalCreation === true ? setModalCreation(false) : setModalCreation(true);
  }

  useEffect(() => {
    getChars();
  }, []);

  return (
    <div className="Characters">
      <div className="Characters--divButton">
        <button
          className="Characters--button"
          onClick={() => changeCreationModal()}
        >
          Create
        </button>
      </div>

      <div className="Characters--cards">
        {modalCreation ? (
          <CreationModal
            getChars={getChars}
            changeCreationModal={changeCreationModal}
          />
        ) : (
          <></>
        )}

        {characters.length > 0 ? (
          characters.map((char, index) => (
            <Card character={char} index={index} getChars={getChars} />
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
