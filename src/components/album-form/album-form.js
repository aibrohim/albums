import "./album-form.scss";
import Section from "../section/section";
import { useContext, useEffect, useReducer, useState } from "react";
import { AlbumsContext } from "../../contexts/albums";

const initialState = {
  name: "",
  id: "",
  userId: ""
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_VALUE":
      const element = action.element;
      return {
        ...state, 
        [element.id]: element.value
      } 
    case "CHANGE_ALL_VALUES": {
      return action.values
    }
    case "CLEAR_ALL":
      return initialState
    default:
      break;
  }
};

const AlbumForm = () => {
  const values = useContext(AlbumsContext);
  const {formType: type, activeAlbum, albums} = values;
  
  const [state, dispatch] = useReducer(reducer, initialState);
  const {name: albumName, id, userId} = state;

  useEffect(() => {
    if (type === "EDIT") {
      const {id, title: name, userId} = albums.find((album) => album.id === +activeAlbum);
      const values = {id, name, userId};
      
      dispatch({
        type: "CHANGE_ALL_VALUES",
        values
      });
    } else if (type === "ADD") {
      // setAlbumName("");
      dispatch({
        type: "CLEAR_ALL",
      })
    }
  }, [activeAlbum, albums, type]);

  const handleInputChange = (evt) => dispatch({
    type: "CHANGE_VALUE", 
    element: evt.target
  });

  const handleIdChange = (evt) => dispatch({
    type: "CHANGE_VALUE", 
    element: evt.target
  });

  const handleUserIdChange = (evt) => dispatch({
    type: "CHANGE_VALUE", 
    element: evt.target
  });

  return (
    <Section className="album-form">
      <h2>{type === "ADD" ? "Add album" : ("Edit album - #" + activeAlbum)}</h2>
      <form className="album-form__form">
        <input value={id} onChange={handleIdChange} id="id" placeholder="Album ID" className="album-form__input" type="text" />
        <input value={albumName} id="name" onChange={handleInputChange} placeholder="Album name" className="album-form__input" type="text" />
        <input value={userId} onChange={handleUserIdChange} id="userId" placeholder="Album ID" className="album-form__input" type="text" />
        <button className="album-form__submit-btn">
          {
            type === "ADD"
            ? "Add"
            : "Edit"
          }
        </button>
      </form>
    </Section>
  );
};

export default AlbumForm;