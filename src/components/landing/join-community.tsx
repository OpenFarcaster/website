import { cn } from "@/lib/utils";
import { GithubIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { FarcasterIcon } from "../icons/farcaster";
import { TelegramIcon } from "../icons/telegram";
import { buttonVariants } from "../ui/button";

export const LandingJoinCommunity: React.FC = () => {
  return (
    <div className="bg-purple-100 w-full">
      <div className="flex flex-col gap-8 text-center max-w-7xl px-4 py-16 w-full mx-auto">
        <h3 className="scroll-m-20 font-mono text-2xl font-extrabold uppercase tracking-widest">
          Join Us
        </h3>

        <h4 className="font-medium tracking-tight">
          Contribute to our projects, try them out, or propose improvements. We
          welcome contributions from around the world!
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8">
          <Link
            className={cn(
              buttonVariants({ variant: "outline" }),
              "flex items-center gap-2"
            )}
            href="https://github.com/OpenFarcaster"
            target="_blank"
          >
            <GithubIcon className="w-4 h-4" />
            Contribute to GitHub
          </Link>

          <Link
            className={cn(
              buttonVariants({ variant: "outline" }),
              "flex items-center gap-2"
            )}
            href="https://warpcast.com/openfarcaster"
            target="_blank"
          >
            <FarcasterIcon className="w-4 h-4 rounded" />
            Follow on Warpcast
          </Link>

          <Link
            className={cn(
              buttonVariants({ variant: "outline" }),
              "flex items-center gap-2"
            )}
            href="https://t.me/+chs0gVi0RIQ0NGJh"
            target="_blank"
          >
            <TelegramIcon className="w-4 h-4 rounded" />
            Join the Dev Chat
          </Link>
        </div>
      </div>
    </div>
  );
};
