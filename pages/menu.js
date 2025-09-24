// pages/menu.js
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaHome, FaUser, FaBars, FaTimes } from "react-icons/fa";

export default function Menu() {
  const router = useRouter();

  return (
    <>
      <style>{`
        :root { --max-w: 1100px; }
        * { box-sizing: border-box; margin: 0; padding: 0; font-family: Arial, sans-serif; }
        html, body, #__next { height: 100%; background: #8f7d7d; }

        .page-wrapper { min-height: 100vh; display: flex; flex-direction: column; }
        .page-content { flex: 1; }

        header.menu-header {
          display: flex; align-items: center; gap: 8px;
          background: #d4bd6c; padding: 10px 18px; width: 100%; height: 56px;
        }
        .menu-wrap { display: flex; align-items: center; width: 100%; }
        .logo-group { display: flex; gap: 8px; align-items: center; flex-shrink: 0; }
        .logo-group img { width: 28px; height: 28px; display:block; }
        .brand {
          position: absolute; left: 50%; transform: translateX(-50%);
          font-style: italic; font-weight: 900; font-size: 26px; color: #08121a;
          line-height: 1; pointer-events: none;
        }
        .header-icons { margin-left: auto; display: flex; gap: 10px; align-items: center; flex-shrink: 0; position: relative; }
        .header-icons .icon {
          width: 36px; height: 36px; display: inline-flex; align-items: center; justify-content: center;
          border-radius: 6px; cursor: pointer; text-decoration: none;
          background: rgba(0,0,0,0.03);
        }
        .icon-close {
          width: 36px; height: 36px; display:inline-flex; align-items:center; justify-content:center;
          border-radius: 6px; background: #ccc; color:#000; text-decoration:none;
        }

        .top-marquee {
          width: 100%; background: #f1f4f9; padding: 8px 12px; overflow: hidden; font-size: 14px;
        }
        .top-marquee .marquee {
          display:inline-block; transform: translateX(100%);
          animation: marquee 16s linear infinite; white-space:nowrap;
        }
        @keyframes marquee { 0% { transform: translateX(100%);} 100% { transform: translateX(-100%);} }

        .menu-container {
          display: flex; align-items: stretch; background: #57a7e0;
          min-height: 420px; width: 100%;
        }
        .menu-article { flex: 3; padding: 60px 40px; color: #071325; display:flex; flex-direction:column; }
        .menu-article h2 { font-weight:700; margin-bottom:12px; font-size:20px; }
        .menu-article p { line-height:1.6; font-size:16px; margin-bottom:22px; color:#071325; }
        .learn-more-btn {
          align-self:start; background:#4456f5; color:#fff; font-style:italic; font-weight:600;
          padding:8px 16px; border-radius:4px; text-decoration:none;
          box-shadow: 0 4px 8px rgba(0,0,0,0.12);
        }

        .menu-list {
          flex: 1; background: #d2c3c3; padding: 40px 24px;
          display:flex; flex-direction:column; gap: 26px; align-items:center; justify-content:center;
        }
        .menu-item {
          width: 140px; background:#fff; border: 2px solid #a6252a; border-radius: 8px;
          padding: 10px 8px; font-weight:700; color:#000; text-align:center; cursor:pointer;
          box-shadow: 0 8px 0 rgba(0,0,0,0.04);
          position: relative;
          user-select: none;
          transition: all 0.2s ease;
        }
        .menu-item:hover {
          background: #e3d9d9;
          box-shadow: 0 6px 0 rgba(0,0,0,0.06);
          border-color: #8a1a1a;
        }

        .menu-item.active {
          border-color: #662323;
          background: #fbd1d1;
          cursor: default;
          box-shadow: 0 0 6px #63ffca;
        }

        .support-box {
          width: 100%; background: #8f7d7d; color: #000; padding: 18px 24px;
          display: flex; justify-content: space-between; gap: 20px;
          font-size:14px; margin: 0;
        }
        .support-left, .support-right { display:flex; flex-direction:column; gap:6px; font-weight:600; }
        .support-left .title { font-weight:800; margin-bottom:6px; text-transform:uppercase; }

        @media (max-width: 900px) {
          .menu-container { flex-direction: column; min-height: auto; }
          .menu-list { flex-direction:row; gap: 12px; padding: 20px; }
          .brand { position: static; transform:none; margin-left:8px; }
        }
      `}</style>

      <div className="page-wrapper">
        {/* HEADER */}
        <header className="menu-header">
          <div className="menu-wrap">
            <div className="logo-group">
              <Image src="/ind.png" alt="Logo Indonesia" width={28} height={28} />
              <Image src="/jateng.png" alt="Logo Jawa Tengah" width={28} height={28} />
              <Image src="/smg.png" alt="Logo Semarang" width={28} height={28} />
              <Image src="/logo.png" alt="Logo FitTogether" width={28} height={28} />
            </div>

            <div className="brand">FitTogether</div>

            <div className="header-icons">
              <Link href="/home" legacyBehavior>
                <a className="icon"><FaHome /></a>
              </Link>
              <Link href="/profil" legacyBehavior>
                <a className="icon"><FaUser /></a>
              </Link>
              <Link href="/menu" legacyBehavior>
                <a className="icon">
                  <FaBars color={router.pathname === "/menu" ? "red" : "#000"} />
                </a>
              </Link>
              <Link href="/" legacyBehavior>
                <a className="icon-close" title="Tutup"><FaTimes /></a>
              </Link>
            </div>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <div className="page-content">
          <div className="top-marquee">
            <div className="marquee">
              Selamat datang di website kami, semoga anda sehat selalu. salam kasih dari kami - FitTogether Team
            </div>
          </div>

          <div className="menu-container">
            <article className="menu-article">
              <h2>Artikel</h2>
              <p>
                  Olahraga merupakan salah satu hal yang sangat penting dalam menunjang kesehatan masyarakat.
                  Olahraga kesehatan adalah kegiatan olah raga yang bertujuan untuk meningkatkan kesehatan
                  dan membawa manfaat bagi tubuh dan jiwa.Olahraga adalah kegiatan jasmani yang mengandung 
                  unsur bermain, melibatkan interaksi lingkungan dan perjuangan antara diri sendiri dengan orang 
                  lain dalam unsur alam, serta terbuka untuk semua lapisan masyarakat sesuai dengan kemampuan 
                  dan kesenanganya. Kesehatan memegang peranan penting dalam kehidupan seseorang. 
              </p>
              <a 
                href="/docs/177-181.pdf" 
                className="learn-more-btn" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Pelajari Lebih lanjut
              </a>
            </article>

            <nav className="menu-list">
              <Link href="/about" legacyBehavior>
                <a className="menu-item">Tentang Kami</a>
              </Link>
              <Link href="/caripartner" legacyBehavior>
                <a className="menu-item">Cari Partner</a>
              </Link>
              <Link href="/kesanpesan" legacyBehavior>
                <a className="menu-item">Kesan & Pesan</a>
              </Link>
              <Link href="/emergency" legacyBehavior>
                <a className="menu-item">Kontak Darurat</a>
              </Link>
            </nav>
          </div>
        </div>

        {/* FOOTER */}
        <div className="support-box">
          <div className="support-left">
            <div className="title">Dukungan</div>
            <div>Bantuan</div>
            <div>Pertanyaan</div>
          </div>
          <div className="support-right">
            <div>Kebijakan Privasi</div>
            <div>Syarat &amp; Ketentuan</div>
          </div>
        </div>
      </div>
    </>
  );
}