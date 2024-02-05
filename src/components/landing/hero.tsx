import Link from "next/link";
import React from "react";
import { buttonVariants } from "../ui/button";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const LandingHero: React.FC = () => {
  return (
    <div className="py-12 bg-purple-100 w-full">
      <div className="grid grid-cols-2 items-center gap-16 max-w-7xl px-4 w-full mx-auto">
        <div className="flex flex-col gap-8">
          <h1 className="scroll-m-20 text-4xl font-extrabold lg:text-5xl">
            Open Farcaster
          </h1>

          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Building public goods to improve the Farcaster experience.
          </h4>

          <Link
            className={cn(buttonVariants(), "w-fit")}
            href="https://github.com/OpenFarcaster"
            target="_blank"
          >
            View Projects <ChevronRight className="inline-block ml-2" />
          </Link>
        </div>

        <div className="flex flex-col items-center gap-8">
          <img src="/logo.svg" alt="People Having Fun" className="w-3/5" />
        </div>
      </div>
    </div>
  );
};
