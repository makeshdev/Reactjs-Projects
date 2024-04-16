import React from "react";
import { Commend } from "./Commend";

export const CommendList = ({ stores }) => {
  return (
    <div className="w-50 mx-auto mt-5">
      {stores.map((item, index) => {
        return <Commend item={item} index={index} />;
      })}
    </div>
  );
};
