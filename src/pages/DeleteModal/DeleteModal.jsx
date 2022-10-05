import { useState } from "react";
import { useEffect } from "react";
import { Api } from "../../utils/api";
import "./DeleteModal.css";

export function DeleteModal({ character, index, getChars }) {
  const [characterFound, setCharacterFound] = useState({
    name: "",
    imageUrl: "",
    user: "",
    _id: "",
  });

  async function getChar() {
    const char = await Api.getChars(character.name);
    setCharacterFound(char[index]);
  }

  async function deleteChar() {
    const deletedChar = await Api.deleteCharacter(characterFound._id);
    console.log(deletedChar);
    setTimeout(getChars(), 3000);
  }

  useEffect(() => {
    getChar();
  }, []);

  return (
    <div className="DeleteModal" onClick={() => changeDeleteModal()}>
      <div className="DeleteModal--div">
        <div className="DeleteModal--divImage">
          <img className="DeleteModal--image" src={character.imageUrl} />
        </div>

        <div className="DeleteModal--divInfo">
          <p className="DeleteModal--name">
            <div className="DeleteModal--name__label">Name:</div>{" "}
            {character.name}
          </p>
          <p className="DeleteModal--creator">
            <div className="DeleteModal--creator__label">Created by:</div>
            {character.user}
          </p>
          <button className="DeleteModal--button" onClick={() => deleteChar()}>
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
}
