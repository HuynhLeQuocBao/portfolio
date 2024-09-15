"use client";

import PorfolioTemplate from "@/components/portfolio-template";

export default function Home() {
  return (
    <main className="w-full h-full px-4 py-10 md:p-10 xl:px-32 bg-orange-50">
      <h1 className="font-bold text-center text-3xl xl:text-5xl text-orange-700">
        Portfolio templates
      </h1>

      <PorfolioTemplate />
    </main>
  );
}
