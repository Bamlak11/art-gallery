import React, { useState } from "react";

const ArtworkForm = ({ addArtwork }) => {
  const [formData, setFormData] = useState({
    imageUrl: "",
    artistName: "",
    description: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted with data:", formData);


    // Add artwork to the main gallery
    addArtwork(formData);

    // Reset form fields
    setFormData({
      imageUrl: "",
      artistName: "",
      description: ""
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-11/12 p-12 bg-black sm:w-8/12 md:w-1/2 lg:w-5/12 rounded-xl">
        <h1 className="text-xl font-semibold flex justify-center text-white">Add Artwork</h1>

        <form className="mt-6" onSubmit={handleSubmit}>
          
          <label htmlFor="imageUrl" className="block text-xs font-semibold text-white uppercase">
            Image URL
          </label>
          <input
            id="imageUrl"
            type="text"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            placeholder="https://example.com/artwork"
            className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            required
          />

          <label htmlFor="artist" className="block mt-4 text-xs font-semibold text-white uppercase">
            Artist Name
          </label>
          <input
            id="artist"
            type="text"
            name="artist"
            value={formData.artist}
            onChange={handleChange}
            placeholder="John Doe"
            className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            required
          />

          <label htmlFor="description" className="block mt-4 text-xs font-semibold text-white uppercase">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter description..."
            className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner resize-none"
            rows="4"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full rounded-lg py-3 mt-6 font-medium tracking-widest text-white uppercase bg-gray-600 shadow-lg focus:outline-none hover:bg-gray-700 hover:shadow-none"
          >
            Add Artwork
          </button>
        </form>
      </div>
    </div>
  );
};

export default ArtworkForm;
