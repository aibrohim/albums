import "./album-form.scss";
import Section from "../section/section";
import { useContext, useEffect, useState } from "react";
import { AlbumsContext } from "../../contexts/albums";

const AlbumForm = () => {
  const values = useContext(AlbumsContext);
  const {formType: type, activeAlbum, albums} = values;
  
  const [albumName, setAlbumName] = useState("");

  useEffect(() => {
    if (type === "EDIT") {
      const activeAlbumObj = albums.find((album) => album.id === +activeAlbum);
      setAlbumName(activeAlbumObj.title);
    } else if (type === "ADD") {
      setAlbumName("");
    }
  }, [activeAlbum, albums, type]);

  const handleInputChange = (evt) => setAlbumName(evt.target.value);

  return (
    <Section className="album-form">
      <h2>{type === "ADD" ? "Add album" : ("Edit album - #" + activeAlbum)}</h2>
      <form className="album-form__form">
        <input value={albumName} onChange={handleInputChange} placeholder="Album name" className="album-form__input" type="text" />
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