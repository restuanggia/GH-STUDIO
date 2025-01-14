"use client";
import { useState } from "react";

export default function ProductPage() {
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
        {
            id: 4,
            title: "Keyboard",
            description:
                "Keyboard merupakan perangkat yang paling penting keberadaannya setelah mouse. Saking pentingnya bisa dibilang, kedua perangkat tersebut tidak boleh dihilangkan ...",
            image:
                "https://www.filemagz.com/wp-content/uploads/2021/10/keyboard-header-min-scaled.jpg",
            link: "https://www.filemagz.com/jenis-keyboard-komputer-dari-bentuknya/",
        },
        {
            id: 5,
            title: "Printer",
            description:
                "PIXMA G3020 dirancang untuk kebutuhan print, scan, dan copy, yang cocok digunakan untuk meningkatkan produktivitas di lingkungan rumah, kantor, dan pelaku ...",
            image: "https://bandungit.com/wp-content/uploads/2024/01/Sewa-Printer-Bandung.jpg",
            link: "https://inet.detik.com/consumer/d-5302830/printer-ink-tank-terbaru-canon-janjikan-kemudahan-perawatan",
        },
        {
            id: 6,
            title: "Speaker",
            description:
                "Speaker adalah alat yang identik dengan perangkat pengeras suara. Tapi sebenarnya fungsi speaker tak sesederhana itu. Hal ini dikarenakan speaker memiliki beberapa ...",
            image:
                "https://assetsio.gnwcdn.com/arena_ynEUoGs.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp",
            link: "https://kumparan.com/ragam-info/mengenal-fungsi-speaker-jenis-dan-bagian-bagiannya-20cMxq3IGSc",
        },
        {
            id: 7,
            title: "USB Flash Drive",
            description:
                "TEKNOLOGI berkembang begitu cepat. Dahulu, ketika pertama kali komputer dikembangkan, kita mengenal IBM 350. Itu merupakan penyimpan data dengan ...",
            image:
                "https://www.usbmemorydirect.com/blog/wp-content/uploads/2022/06/image-1.jpg",
            link: "https://mediaindonesia.com/weekend/37932/flash-disk-atau-flash-drive",
        },
        {
            id: 8,
            title: "Modem",
            description:
                "Modem WiFi terbaik adalah pilihan yang tepat bagi siapa saja yang ingin mendapatkan koneksi internet yang stabil dan cepat di rumah atau kantor. Dengan ...",
            image:
                "https://media.istockphoto.com/id/495732397/id/foto/router-wi-fi-hitam.jpg?s=612x612&w=0&k=20&c=xWWapP5odGIt9CCXGf2vMYziByNF4rrN0PTCSmAZsN0=",
            link: "https://www.corpnet.net.id/blog/internet/modem-wifi-terbaik",
        },
        {
            id: 9,
            title: "Webcam",
            description:
                "Sebelum melihat daftar rekomendasi webcam, ada baiknya Sobat Shopee memahami tips memilih webcam murah. Pasalnya, pilihan webcam dengan harga ...",
            image:
                "https://cdn.thewirecutter.com/wp-content/media/2023/09/webcams-2048px-02096.jpg?auto=webp&quality=75&width=1024",
            link: "https://shopee.co.id/inspirasi-shopee/rekomendasi-webcam-murah-terbaik/",
        },
    ];

    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="mt-20 px-4">
            {/* Input Pencarian */}
            <div className="flex justify-center mb-8">
                <label className="input input-bordered flex items-center gap-2 w-full max-w-md">
                    <input
                        type="text"
                        className="grow"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70"
                    >
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd"
                        />
                    </svg>
                </label>
            </div>

            {/* Daftar Produk */}
            <div className="flex justify-around flex-wrap">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="card bg-base-100 w-96 shadow-xl mb-6">
                        <figure>
                            <img src={product.image} alt={product.title} />
                        </figure>
                        {/* coding disini */}
                    </div>
                ))}
            </div>
        </div>
    );
}
