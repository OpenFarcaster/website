import { GithubIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { FarcasterIcon } from "../icons/farcaster";
import { TelegramIcon } from "../icons/telegram";
import { buttonVariants } from "../ui/button";

export const DesktopNavbar: React.FC = () => {
  return (
    <div className="flex w-full items-center justify-between">
      <img
        src="https://avatars.githubusercontent.com/u/141670031?s=200&v=4"
        alt="Open Farcaster Logo"
        className="w-8 h-8 rounded-full"
      />

      {/* <div className="flex items-center gap-12">
        <span className="font-semibold text-sm cursor-pointer hover:text-primary transition-all duration-300">
          Home
        </span>
        <span className="font-semibold text-sm cursor-pointer hover:text-primary transition-all duration-300">
          Projects
        </span>
        <span className="font-semibold text-sm cursor-pointer hover:text-primary transition-all duration-300">
          About
        </span>
        <span className="font-semibold text-sm cursor-pointer hover:text-primary transition-all duration-300">
          Contribute
        </span>
      </div> */}

      <div className="flex items-center gap-2">
        <Link
          className={buttonVariants({ variant: "ghost", size: "icon" })}
          href="https://github.com/OpenFarcaster"
          target="_blank"
        >
          <GithubIcon className="w-4 h-4" />
        </Link>

        <Link
          className={buttonVariants({ variant: "ghost", size: "icon" })}
          href="https://warpcast.com/openfarcaster"
          target="_blank"
        >
          <FarcasterIcon className="w-4 h-4 rounded" />
        </Link>

        <Link
          className={buttonVariants({ variant: "ghost", size: "icon" })}
          href="https://t.me/+chs0gVi0RIQ0NGJh"
          target="_blank"
        >
          <TelegramIcon className="w-4 h-4 rounded" />
        </Link>
      </div>
    </div>
  );
};
