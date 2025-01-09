
"use client"

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
    
  ];

  
}