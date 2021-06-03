import React from "react";

interface IconButtonProps {
  icon: JSX.Element;
}

export const IconButton = ({ icon }: IconButtonProps) => {
  return (
    <button className="p-3 border border-trueGray-300 rounded-full">
      {icon}
    </button>
  );
};
