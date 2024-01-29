import { ExternalLink } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

export const LandingWhatWeDo: React.FC = () => {
  return (
    <div className="flex flex-col gap-8 text-center max-w-7xl px-4 py-16 w-full mx-auto">
      <h3 className="scroll-m-20 font-mono text-2xl font-extrabold uppercase tracking-widest">
        What we do
      </h3>

      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
        Open Farcaster is an open-source collective of individuals building
        public goods to improve the Farcaster experience.
      </h4>

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        <Link href="https://github.com/OpenFarcaster/teleport" target="_blank">
          <Card className="hover:border-primary transition-all duration-300">
            <CardHeader className="items-start">
              <div className="flex items-center w-full justify-between">
                <CardTitle>Teleport</CardTitle>
                <ExternalLink className="w-4 h-4" />
              </div>
              <CardDescription>
                A fast implementation of a Farcaster Hub, in Rust.
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>

        <Link
          href="https://github.com/OpenFarcaster/jobscaster"
          target="_blank"
        >
          <Card className="hover:border-primary transition-all duration-300">
            <CardHeader className="items-start">
              <div className="flex items-center w-full justify-between">
                <CardTitle>jobscaster</CardTitle>
                <ExternalLink className="w-4 h-4" />
              </div>
              <CardDescription>
                An aggregator of job postings from f/jobs utilizing LLMs for
                filtering relevant posts
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>
      </div>
    </div>
  );
};
