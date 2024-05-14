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
    // Create a new artwork object
    const artwork = {
      id: artworks.length + 1, // Assuming each artwork has a unique id
      ...newArtwork
    };
    // Update the artworks state with the new artwork
    setArtworks([...artworks, artwork]);
  };



  return (

    <Router>
      <div>
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<MainGallery artworks={artworks}/>} />
        <Route path="/artwork/:id" element={<ArtistPage artworks={artworks} />} />
        <Route path="/form" element={<ArtworkForm addArtwork={addArtwork} />} />
      </Routes>
    </Router>
  );
}

export default App;
