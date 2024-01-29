import React from "react";
import { DesktopNavbar } from "./desktop";

export const Navbar: React.FC = () => {
  return (
    <div className="py-4 w-full bg-transparent backdrop-blur-lg fixed top-0 z-10">
      <div className="max-w-7xl px-4 w-full mx-auto">
        <DesktopNavbar />
      </div>
    </div>
  );
};
