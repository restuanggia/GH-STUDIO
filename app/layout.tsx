import "./globals.css" //import globals.css
import "@fortawesome/fontawesome-svg-core/styles.css"  //import fontawesome

export const metadata = {
  title: 'TechMart',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        {/* area header */}
        <header>
          <div className="navbar bg-base-100 fixed top-0 left-0 w-full z-50">
            <div className="flex-1">
              <a className="btn btn-ghost text-xl">TechMart</a>
            </div>
            <div className="flex-none">
              <ul className="menu menu-horizontal px-1">
                <li><a href="/">Beranda</a></li>
                <li><a href="/about">Tentang</a></li>
                <li><a href="/product">Produk</a></li>
              </ul>
            </div>
          </div>
        </header>
        {/* area content */}
        <section className="m-5">
          {children}
        </section>
        {/* area footer */}
        <footer className="footer bg-color1 text-color2 p-10">
          <nav>
            <h6 className="footer-title">Layanan</h6>
            <a className="link link-hover">Merek</a>
            <a className="link link-hover">Desain</a>
            <a className="link link-hover">Pemasaran</a>
            <a className="link link-hover">Iklan</a>
          </nav>
          <nav>
            <h6 className="footer-title">TechMart</h6>
            <a href="/" className="link link-hover">Beranda</a>
            <a href="/about" className="link link-hover">Tentang</a>
            <a href="/product" className="link link-hover">Produk</a>
          </nav>
          <nav>
            <h6 className="footer-title">Link</h6>
            <a href="https://react.dev/" className="link link-hover">React JS</a>
            <a href="https://tailwindcss.com/" className="link link-hover">Tailwind CSS</a>
            <a href="https://daisyui.com/" className="link link-hover">Daisy UI</a>
          </nav>
        </footer>
      </body>
    </html>
  )
}
