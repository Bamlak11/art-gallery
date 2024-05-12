import React from 'react';
import { useParams } from 'react-router-dom';

const ArtistPage = ({ artworks }) => {
  // Get the artwork id from route params
  const { id } = useParams();

  // Find the artwork with the matching id
  const artwork = artworks.find(artwork => artwork.id === parseInt(id));

  return (
    <div className='flex justify-center w-50 h-50'>
    <div className="mx-4 mt-4 p-8 overflow-hidden rounded-xl shadow-lg bg-gray-300">
      {artwork ? (
        <div >
          <p className='flex justify-center text-2xl font-semibold'>Artist: {artwork.artist}</p>
          <img src={artwork.imageUrl} alt={artwork.title} />
          <p>Description: {artwork.description}</p>
        </div>
      ) : (
        <p>No artwork found with ID: {id}</p>
      )}
    </div>
    </div>
  );
};

export default ArtistPage;
