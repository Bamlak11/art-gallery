import React from "react";

const MainGallery = ({ artworks }) => {
  return (
    <div className="flex flex-wrap justify-center">
      
      {/* <h1>Art Gallery</h1> */}

      {artworks.map((artwork, index) => (
        <div
          key={index}
          className="relative flex flex-col rounded-xl bg-gray-100 shadow-md m-8">
            
          <div className="relative mx-4 mt-4 h-50 w-60 overflow-hidden rounded-xl shadow-lg hover:scale-110">
            <img src={artwork.imageUrl} alt={artwork.name} />
          </div>

          <div className="p-6 text-center">
            <h4 className="mb-2 font-sans text-xl font-semibold">
              {artwork.artist}
            </h4>

            <p className="text-blue-500 font-sans font-small">Artist</p>

          </div>
        </div>
      ))}
    </div>
  );
};

export default MainGallery;
