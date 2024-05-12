import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MainGallery from './components/MainGallery';
import ArtistPage from './components/ArtistPage';
import ArtworkForm from './components/ArtworkForm';
import ArtworkData from './components/ArtworkData';
import Navbar from './components/Navbar';

function App() {
  const [artworks, setArtworks] = useState(ArtworkData);

  // Function to add new artwork
  const addArtwork = (newArtwork) => {
    setArtworks([...artworks, newArtwork]);
    
  };


  return (

    <Router>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<MainGallery artworks={ArtworkData} />} />
        <Route path="/artist" element={<ArtistPage />} />
        <Route path="/form" element={<ArtworkForm addArtwork={addArtwork} />} />
      </Routes>
    </Router>
  );
}

export default App;
