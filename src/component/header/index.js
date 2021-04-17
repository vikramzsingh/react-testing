import React from "react";

const Header = () => {
  return (
    <div data-test="headerComponent">
      <h3 className="headerComponent">
        <p data-test="paragraph">Header</p>
      </h3>
    </div>
  );
};

export default Header;
