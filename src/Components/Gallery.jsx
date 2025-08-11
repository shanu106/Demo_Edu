import React from "react";

const Gallery = ({ images }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((img, index) => (
        <div key={index} className="overflow-hidden rounded-lg shadow-lg">
          <img
            src={img}
            alt={`Gallery Image ${index + 1}`}
            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
