import React from "react";

export const Commend = ({ index, item }) => {
  return (
    <div>
      <p class="border border-primary p-2" key={index}>
        {item}
      </p>
    </div>
  );
};
