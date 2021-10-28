import { useEffect, useState } from "react";
import AlbumForm from "./components/album-form/album-form";
import AlbumsList from "./components/albums-list/albums-list";

function App() {
  const [albums, setAlbums] = useState([]);
  const [formType, setFormType] = useState("ADD");
  const [activeAlbum, setActiveAlbum] = useState();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(data => setAlbums(data))
  }, []);


  return (
    <main className="main">
      <h1 className="main__title">Albums App</h1>

      <div className="main__container">
        <AlbumsList
          albums={albums}
          formType={formType}
          setFormType={setFormType}
          setActiveAlbum={setActiveAlbum}
        />

        <AlbumForm
          type={formType}
          albums={albums}
          activeAlbum={activeAlbum}
        />
      </div>
    </main>
  );
}

export default App;
