"use client";
import { useState } from "react";

export default function RootPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const products = [
    {
      id: 1,
      title: "Laptop",
      description:
        "Kamu lagi nyari-nyari laptop yang cocok buat analisis data? Yuk, cek rekomendasi laptop-laptop terbaik untuk data analyst berikut ...",
      image:
        "https://dibimbing-cdn.sgp1.cdn.digitaloceanspaces.com/1693586160053-10-Rekomendasi-Laptop-Terbaik-untuk-Data-Analyst-2023.webp",
      link: "https://dibimbing.id/blog/detail/10-rekomendasi-laptop-terbaik-untuk-data-analyst-2023",
    },
    {
      id: 2,
      title: "Monitor",
      description:
        "LG Monitor meningkatkan akurasi warna melalui layar LCD. Layar 21,45 inci dengan Full HD (1920x1080) dapat meningkatkan ...",
      image:
        "https://www.lg.com/content/dam/channel/wcms/id/images/monitor/22mr410-b_atiq_eain_id_c/gallery/large03.jpg",
      link: "https://www.lg.com/id/monitor/fhd-qhd/22mr410-b/",
    },
    {
      id: 3,
      title: "Mouse",
      description:
        "Pasti dari kalian semua sering banget mendengar kata Onboard Memory dalam mouse gaming !!! Tapi tahukah kalian sebenarnya tentang pengertian onboard ...",
      image: "https://www.nyk.co.id/wp-content/uploads/2021/04/s4.jpeg",
      link: "https://www.nyk.co.id/onboard-memory-pada-mouse-gaming/",
    },
  ];

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {/* Hero Section */}
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://palpres.disway.id/upload/bef2288175b986703f8cbf59831588ee.jpeg)",
        }}
      >
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Selamat Datang di TechMart</h1>
            <p className="mb-5">
              TechMart, Pilihan Cerdas dan Terpercaya untuk Segala Kebutuhan Elektronik Anda,
              dari Laptop dan Komputer Canggih hingga Aksesoris Modern yang Mendukung Gaya Hidup Digital Anda.
            </p>
            <button className="btn bg-color1 text-color2"><a href="/about">Get Started</a></button>
          </div>
        </div>
      </div>

      {/* Daftar Produk */}
      <div className="flex justify-end mt-16 mb-12">
        <button className="btn bg-color1 text-color2">
          <a href="/product">Lihat Semua</a>
        </button>
      </div>
      <div className="mt-12 px-4">
        <div className="flex justify-around flex-wrap">
          {filteredProducts.map((product) => (
            <div key={product.id} className="card bg-base-100 w-96 shadow-xl mb-6">
              <figure>
                <img src={product.image} alt={product.title} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{product.title}</h2>
                <p>{product.description}</p>
                <div className="card-actions justify-end">
                  <button
                    className="btn bg-color1 text-color2"
                    onClick={() => (window.location.href = product.link)}
                  >
                    Baca Selengkapnya...
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
