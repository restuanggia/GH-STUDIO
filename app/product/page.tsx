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


    ];

}
