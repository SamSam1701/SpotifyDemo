import './App.css';
import ListSong from './componnents/ListSong/ListSong';
import Navbar from './componnents/Nav/Navbar';
import DetailSong from './componnents/DetailSong/DetailSong'
import { Songs } from './Context';
import Datasources from './data/songs.json'
import PlayingSong from './componnents/PlayingSong/Playing';
import { useState } from 'react';

function App() {
  const [song, setSong] = useState(Datasources[0])

  const handleSetSong = (idSong) =>{
    const song = Datasources.find(song => song.id === idSong);
    if(!song)
    {
      setSong(Datasources[0]);
    }else{
    setSong(song);
    }
    //setSong(idSong);
  }

  return (
    <div className="App">
      <Songs.Provider value={{Datasources, song, handleSetSong}}>
        <Navbar/>
        <div className="container">
          <DetailSong/>
          <ListSong/>
        </div>
        <PlayingSong/>
      </Songs.Provider>
    </div>
  );
}

export default App;
