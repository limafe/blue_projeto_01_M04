import { useState } from "react";
import { DeleteModal } from "../DeleteModal/DeleteModal";
import "./Card.css";

export function Card({ character, index, getChars }) {
  const [deleteModal, setDeleteModal] = useState(false);

  function changeDeleteModal() {
    deleteModal === true ? setDeleteModal(false) : setDeleteModal(true);
  }

  return (
    <div className="Card" onClick={() => changeDeleteModal()}>
      <div className="Card--divImage">
        <img className="Card--image" src={character.imageUrl} />
      </div>

      <div className="Card--divInfo">
        <p className="Card--name">
          <div className="Card--name__label">Name:</div> {character.name}
        </p>
        <p className="Card--creator">
          <div className="Card--creator__label">Created by:</div>
          {character.user}
        </p>
      </div>

      {deleteModal === true ? (
        <DeleteModal character={character} index={index} getChars={getChars} />
      ) : (
        <></>
      )}
    </div>
  );
}
