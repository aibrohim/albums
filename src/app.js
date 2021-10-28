import { useContext } from "react";
import AlbumForm from "./components/album-form/album-form";
import AlbumsList from "./components/albums-list/albums-list";
import AlbumsProvider, { AlbumsContext } from "./contexts/albums";

function App() {
  return (
    <main className="main">
      <h1 className="main__title">Albums App</h1>

      <div className="main__container">
        <AlbumsProvider>
          <AlbumsList />

          <AlbumForm />
        </AlbumsProvider>
      </div>
    </main>
  );
}

export default App;
