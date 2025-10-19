import { MainCarousel } from "@/components/organisms/MainCarousel";
import { Sectorals } from "@/components/organisms/Sectorals";
// import { MainTabs } from "@/components/organisms/MainTabs";

import { Suspense } from "react";
import Loading from "@/components/organisms/Loading"; // Anda punya komponen Loading

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start bg-var[--bmkgyellow]">
      {/* 2. HERO SECTION DENGAN KAROSEL */}
      <section className="w-full bg-blue">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-extrabold text-blue-700 mb-4 text-center">
            Informasi Iklim dan Kualitas Udara Terkini
          </h1>
          <p className="text-lg text-gray-600 mb-8 text-center">
            Pusat data terpadu Klimatologi BMKG untuk mitigasi bencana dan
            perencanaan sektor.
          </p>
          <div className="flex justify-center mb-8">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
              Lihat Buletin Terbaru &rarr;
            </Button>
          </div>
          {/* <Suspense fallback={<Loading />}>
            <MainCarousel />
          </Suspense> */}
        </div>
      </section>

      <section className="w-full h-auto bordered-2 bg-var[--bmkgyellow]">
        <MainCarousel />
      </section>

      {/* 4. KONTEN TERKINI (SEKTORAL) */}
      <section id="terkini" className="w-full bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Pembaruan Berdasarkan Sektor
          </h2>
          {/* Komponen Sectorals Anda */}
          <Suspense fallback={<Loading />}>
            <Sectorals />
          </Suspense>
        </div>
      </section>

      {/* 5. FITUR INTERAKTIF (PENCARIAN & GLOSARIUM) */}
      <section id="tools" className="w-full bg-white py-16 shadow-inner">
        <div className="container mx-auto px-4 max-w-3xl">
          <Card className="p-8 shadow-2xl">
            <CardHeader>
              <CardTitle className="text-center text-2xl text-blue-800">
                Pencarian Cepat
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-2">
                <Input
                  type="text"
                  placeholder="Cari Buletin, Istilah, atau Data..."
                  className="flex-grow"
                />
                <Button>Cari</Button>
              </div>
              <p className="mt-4 text-center text-sm text-gray-500">
                Butuh penjelasan istilah? Kunjungi{" "}
                <a
                  href="/glosarium"
                  className="text-blue-500 hover:underline font-medium"
                >
                  Glosarium
                </a>{" "}
                kami.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Catatan: Footer dan Navbar akan dihandle di layout.tsx */}
    </div>
  );
}
