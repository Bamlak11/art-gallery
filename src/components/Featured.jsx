import React from 'react';
import { Link } from 'react-router-dom';

const Featured = ({ artwork }) => {
  // featured artworks
  const featuredArtworks = [
    {
      id: 1,
      artist: "John Doe",
      imageUrl: "https://images.pexels.com/photos/1109352/pexels-photo-1109352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      artist: "Andy Johnson",
      imageUrl: "https://images.pexels.com/photos/1621793/pexels-photo-1621793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center lg:px-24 px-5">
      <h1 className="text-4xl font-semibold text-center lg:pt-8 pt-24 pb-10">Featured Gallery</h1>
        {/* the artwork the user chooses will be featured here */}
      {artwork && (
        <div className="relative flex flex-col rounded-xl bg-gray-300 shadow-md m-8 p-4">
          <div className="relative mx-4 mt-4 h-50 w-60 overflow-hidden rounded-xl shadow-lg hover:scale-110">
            <img src={artwork.imageUrl} alt={artwork.artist} />
          </div>
          <div className="p-8 text-center">
            <h4 className="mb-2 font-sans text-xl font-semibold">{artwork.artist}</h4>
            <p className="text-blue-500 font-sans font-small pb-4">Artist</p>
            <Link to={`/artwork/${artwork.id}`} className="mt-4 bg-black text-white px-4 py-2 rounded-lg hover:scale-110">View Details</Link>
          </div>
        </div>
      )}

      <div className="flex flex-wrap gap-8 justify-center pb-20">
        {featuredArtworks.map((artwork, index) => (
          <div key={index} className="relative flex flex-col rounded-xl bg-gray-300 shadow-md m-8 p-4">
            <div className="relative mx-4 mt-4 h-50 w-60 overflow-hidden rounded-xl shadow-lg hover:scale-110">
              <img src={artwork.imageUrl} alt={artwork.artist} />
            </div>
            <div className="p-8 text-center">
              <h4 className="mb-2 font-sans text-xl font-semibold">{artwork.artist}</h4>
              <p className="text-blue-500 font-sans font-small pb-4">Artist</p>
              <Link to={`/artwork/${artwork.id}`} className="mt-4 bg-black text-white px-4 py-2 rounded-lg hover:scale-110">View Details</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
