import React from "react";

export const Text = ({ tag, className, children }) => {
  return (
    <>
      {tag === "p" && <p className={className}>{children}</p>}
      {tag === "span" && <span className={className}>{children}</span>}
    </>
  );
};
