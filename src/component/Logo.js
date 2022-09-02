import React from "react";

const Logo = () => {
  return (
    <div className="logo">
      {/* les images importé depuis la balise img sont accesible dans public */}
      <img src="./logo192.png" alt="Logo react" />
      <h3>React world</h3>
    </div>
  );
};

export default Logo;
