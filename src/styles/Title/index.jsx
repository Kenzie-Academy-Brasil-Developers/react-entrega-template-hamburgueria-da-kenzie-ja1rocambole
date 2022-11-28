import React from "react";

export const Title = ({ tag, className, children }) => {
  return (
    <>
      {tag === "h1" && <h1 className={className}>{children}</h1>}
      {tag === "h2" && <h1 className={className}>{children}</h1>}
      {tag === "h3" && <h1 className={className}>{children}</h1>}
      {tag === "h4" && <h1 className={className}>{children}</h1>}
      {tag === "h5" && <h1 className={className}>{children}</h1>}
      {tag === "h6" && <h1 className={className}>{children}</h1>}
    </>
  );
};
