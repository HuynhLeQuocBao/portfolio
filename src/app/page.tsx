"use client";

import PorfolioTemplate from "@/components/portfolio-template";

export default function Home() {
  return (
    <main className="w-full h-screen bg-violet-100 p-4 md:p-10 xl:px-32">
      <h1 className="font-bold text-center text-xl md:text-3xl xl:text-5xl text-indigo-700">
        Listing of Portfolio templates
      </h1>

      <PorfolioTemplate />
    </main>
  );
}
