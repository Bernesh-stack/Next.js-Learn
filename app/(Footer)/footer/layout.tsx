import React from "react";

const FooterLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <footer>
        <h2 > done </h2>
      </footer>
      {children}
    </div>
  );
};  
export default FooterLayout;