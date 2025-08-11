import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import QuickLinks from "../Components/QuickLinks";
import Navbar from "../Components/Navbar";
import Drawer from "../Components/Drawer";

const imageUrls = [
  "https://www.bmcshsp.com/wp-content/uploads/2021/08/BMCSS1.png",
  "https://www.bmcshsp.com/wp-content/uploads/2021/08/BMCSS1.png",
  "https://www.bmcshsp.com/wp-content/uploads/2021/08/BMCSS1.png",
  "https://www.bmcshsp.com/wp-content/uploads/2021/08/BMCSS1.png",
  "https://www.bmcshsp.com/wp-content/uploads/2021/08/BMCSS1.png",
  "https://www.bmcshsp.com/wp-content/uploads/2021/08/BMCSS1.png",
  "https://www.bmcshsp.com/wp-content/uploads/2021/08/BMCSS1.png",
  "https://www.bmcshsp.com/wp-content/uploads/2021/08/BMCSS1.png",
];

const Gallery = () => {


  return (
    <>
     

      {/* Main content container */}
      <div className="w-full min-h-screen bg-[#f8f9fa] p-5 pt-2">
        {/* Drawer (sidebar/menu) */}
     

        {/* Gallery grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {imageUrls.map((img, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={img}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-300"
                style={{ maxWidth: "500px", maxHeight: "500px" }}
              />
            </div>
          ))}
        </div>

        {/* QuickLinks section */}
        
      </div>
    
   
    </>
  );
};
export default Gallery;
