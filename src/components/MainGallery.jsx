import React, { useState } from "react";
import HeroSection from "./HeroSection";
import Featured from "./Featured";
import { Link } from 'react-router-dom';


const MainGallery = ({ artworks }) => {
  const [featuredArtwork, setFeaturedArtwork] = useState(null);

  // Function to set an artwork as featured
  const setAsFeatured = (artwork) => {
    setFeaturedArtwork(artwork);
  };

  return (
    
    <div>
      <HeroSection />
      <Featured artwork={featuredArtwork}/>
      <h1 id="all-collection" className="text-4xl font-semibold text-center lg:pt-8 py-20">All Collection</h1>

      <div className="flex flex-wrap justify-center">
        {/* Render all artworks */}
        {artworks.map((artwork, index) => (
          <div key={index} className="flex rounded-xl bg-gray-300 shadow-md m-8 p-4">
            <div className="mx-4 mt-4 h-50 w-60 overflow-hidden rounded-xl shadow-lg hover:scale-110">
              <img src={artwork.imageUrl} alt={artwork.name} />
            </div>

            <div className="p-8 text-center">
              <h4 className="mb-2 font-sans text-xl font-semibold">{artwork.artist}</h4>
              <p className="text-blue-500 font-sans font-small">Artist</p>

              {/* Link to individual artwork page */}
              <Link to={`/artwork/${artwork.id}`} className="mt-4 bg-black text-white px-4 py-2 rounded-lg mx-2">View Details</Link>
              
              {/* Button to set artwork as featured */}
              <button onClick={() => setAsFeatured(artwork)} className="mt-4 bg-black text-white px-3 py-[6px] rounded-lg">Set as Featured</button>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
};

export default MainGallery;
