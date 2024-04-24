"use client";

import { ReactNode } from "react";



export const Button = ({ children, className, appName, handleAddItem }: any) => {
  return (
    <button
      className={className}
      onClick={handleAddItem}
    >
      {children}
    </button>
  );
};
