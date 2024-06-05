import React from "react";

const ClubInfoItem = ({ icon, text }) => {
  return (
    <div className="flex gap-4 items-center">
      {icon}
      <p className="text-lg">{text}</p>
    </div>
  );
};

export default ClubInfoItem;

