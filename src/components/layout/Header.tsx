import React from "react";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-background border-b border-muted z-50">
      <div className="container mx-auto px-4 py-3 flex flex-wrap items-center justify-between">
        <p className="font-semibold">GREYBALL</p>
      </div>
    </header>
  );
};

export default Header;
