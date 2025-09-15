"use client";

import dynamic from "next/dynamic";
import MainLayout from "@/components/MainLayout";
import Image from "next/image";

const SurfMap = dynamic(() => import("@/components/SurfMap"), { ssr: false });

export default function SurfMapPage() {
  const currentDate = new Date();
  const options: Intl.DateTimeFormatOptions = { weekday: "long" };
  const today =
    new Intl.DateTimeFormat("fr-FR", options)
      .format(currentDate)
      .charAt(0)
      .toUpperCase() +
    new Intl.DateTimeFormat("fr-FR", options).format(currentDate).slice(1);

  return (
    <MainLayout>
      <main className="flex-1 p-6 space-y-8 md:pb-0 pb-15">
        <div className="flex items-center justify-between pb-4 border-b border-gray-200">
          <div>
            <h1 className="text-3xl font-bold text-[#0077B6]">
              Bienvenue, thomas !
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              {today}, {currentDate.toLocaleDateString()}
            </p>
          </div>
          <div className="relative w-20 h-20 flex-shrink-0">
            <Image
              src="/profile.jpg"
              alt="Profile"
              fill
              sizes="(max-width: 768px) 100vw,
               (max-width: 1200px) 50vw,
               33vw"
              className="rounded-full border-4 border-[#00B4D8] shadow-lg object-cover"
            />
          </div>
        </div>

        {/* La map est chargée seulement côté client */}
        <SurfMap />

        <div className="p-4 text-center text-sm text-gray-500 border-t border-gray-200 pb-8">
          Bonne session ! 🤙
        </div>
      </main>
    </MainLayout>
  );
}
