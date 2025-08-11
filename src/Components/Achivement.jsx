import React from "react";

const Achivement = ({ image }) => {
  return (
    <div className="w-44 h-44 bg-black rounded-3xl flex flex-col items-center justify-center">
      <img
        src={image}
        alt="achi"
        className="w-full h-full rounded-lg object-cover"
      />
    </div>
  );
};

export default Achivement;
