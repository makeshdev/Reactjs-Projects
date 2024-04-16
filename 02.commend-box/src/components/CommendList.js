import React from "react";

export const CommendList = ({ stores }) => {
  return (
    <div className="w-50 mx-auto mt-5">
      {stores.map((item, index) => {
        return (
          <p class="border border-primary p-2" key={index}>
            {item}
          </p>
        );
      })}
    </div>
  );
};
