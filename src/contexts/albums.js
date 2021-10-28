import { createContext, useState } from "react";

export const AlbumsContext = createContext();

const AlbumsProvider = ({children}) => {
  const [albums, setAlbums] = useState([]);
  const [formType, setFormType] = useState("ADD");
  const [activeAlbum, setActiveAlbum] = useState();

  return (
    <AlbumsContext.Provider value={{
      albums,
      setAlbums,
      formType,
      setFormType,
      activeAlbum,
      setActiveAlbum
    }}>
      {children}
    </AlbumsContext.Provider>
  );
};

export default AlbumsProvider;