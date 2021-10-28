import { useContext, useEffect } from "react";
import { AlbumsContext } from "../../contexts/albums";
import Section from "../section/section";
import "./albums-list.scss";

const AlbumsList = () => {
  const {albums, formType, setFormType, setActiveAlbum, setAlbums} = useContext(AlbumsContext);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(data => setAlbums(data))
  }, [setAlbums]);

  const handleListClick = (evt) => {
    if (evt.target.matches("button")) {
      if (formType === "ADD") {
        setFormType("EDIT");
      }

      setActiveAlbum(evt.target.dataset.id);
    }
  };

  const handleAddClick = () => {
    setFormType("ADD");
  };

  return (
    <Section className="albums-list">
      <h2 className="albums-list__title">Albums list</h2>

      <button onClick={handleAddClick} className="albums-list__add">Add album</button>

      <ul onClick={handleListClick} className="albums-list__list">
        {
          albums.map((album) => (
            <li key={album.id} className="albums-list__list-item">
              <button data-id={album.id} className="albums-list__item-btn">{album.title}</button>
            </li>
          ))
        }
      </ul>
    </Section>
  );
};

export default AlbumsList;