import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-background border-b border-muted z-50">
      <div className="container mx-auto px-4 py-3 flex flex-wrap items-center justify-between">
        <p className="font-semibold">GREYBALL</p>
        <div className="flex flex-row gap-5">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
