// pages/emergency.js
import Image from "next/image";
import Link from "next/link";
import { FaHome, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Emergency() {
  return (
    <>
      <style>{`
        :root { --max-w: 1100px; }
        * { box-sizing: border-box; margin: 0; padding: 0; font-family: Arial, sans-serif; }

        html, body, #__next {
          height: 100%;
          background: #8f7d7d;
        }

        .page-wrapper {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        .page-content { flex: 1; }

        /* Header */
        header.menu-header {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #d4bd6c;
          padding: 10px 18px;
          width: 100%;
          height: 56px;
        }
        .menu-wrap { display: flex; align-items: center; width: 100%; }
        .logo-group { display: flex; gap: 8px; align-items: center; flex-shrink: 0; }
        .logo-group img { width: 28px; height: 28px; display: block; }
        .brand { 
          position: absolute; left: 50%; transform: translateX(-50%);
          font-style: italic; font-weight: 900; font-size: 26px; color: #08121a;
        }
        .header-icons { margin-left: auto; display: flex; gap: 10px; align-items: center; }

        .icon, .icon-close {
          width: 36px; height: 36px; display: inline-flex; align-items: center; justify-content: center;
          border-radius: 6px; cursor: pointer; text-decoration: none; color: #000;
        }
        .icon { background: rgba(0,0,0,0.03); }
        .icon-close { background: #ccc; }

        /* Marquee */
        .top-marquee {
          width: 100%;
          background: #f1f4f9;
          padding: 8px 12px;
          overflow: hidden;
          font-size: 14px;
        }
        .top-marquee .marquee {
          display:inline-block;
          transform: translateX(100%);
          animation: marquee 16s linear infinite;
          white-space: nowrap;
        }
        @keyframes marquee {
          0% { transform: translateX(100%);}
          100% { transform: translateX(-100%);}
        }

        /* Layout utama */
        .menu-container {
          display: flex;
          align-items: stretch;
          background: #57a7e0;
          min-height: 420px;
          width: 100%;
        }

        /* Konten emergency (biru kiri) */
        .menu-article {
          flex: 3;
          padding: 60px 40px;
          color: #071325;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: #5994c7;
          position: relative;
          text-align: center;
        }
        .menu-article h2 {
          font-weight: 700;
          margin-bottom: 24px;
          font-size: 26px;
          color: #071325;
        }
        .contact-info {
          font-size: 16px;
          font-weight: 600;
          line-height: 1.6;
          color: #071325;
          max-width: 320px;
        }
        .contact-info div { margin: 8px 0; }

        .social-links {
          margin-top: 20px;
          display: flex;
          gap: 16px;
          font-size: 24px;
        }
        .social-links a { color: #071325; text-decoration: none; }
        .social-links a:hover { color: #fff; }

        /* Side menu kanan */
        .menu-list {
          flex: 1;
          background: #d2c3c3;
          padding: 40px 24px;
          display: flex;
          flex-direction: column;
          gap: 26px;
          align-items: center;
          justify-content: center;
        }
        .menu-item {
          width: 140px;
          background: #fff;
          border: 2px solid #a6252a;
          border-radius: 8px;
          padding: 10px 8px;
          font-weight: 700;
          color: #000;
          text-align: center;
          cursor: pointer;
          box-shadow: 0 8px 0 rgba(0,0,0,0.04);
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

        /* Footer */
        .support-box {
          width: 100%;
          background: #8f7d7d;
          color: #000;
          padding: 18px 24px;
          display: flex;
          justify-content: space-between;
          gap: 20px;
          font-size: 14px;
        }
        .support-left, .support-right { display: flex; flex-direction: column; gap: 6px; font-weight: 600; }
        .support-left .title { font-weight: 800; margin-bottom: 6px; text-transform: uppercase; }

        @media (max-width: 900px) {
          .menu-container { flex-direction: column; min-height: auto; }
          .menu-list { flex-direction: row; gap: 12px; padding: 20px; }
          .brand { position: static; transform: none; margin-left: 8px; }
          .menu-article { padding: 40px 24px; text-align: center; }
          .menu-item { width: auto; flex: 1; }
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
              {/* Home → home.js */}
              <Link href="/home" legacyBehavior>
                <a className="icon"><FaHome /></a>
              </Link>

              {/* Profil → profil.js */}
              <Link href="/profil" legacyBehavior>
                <a className="icon"><FaUser /></a>
              </Link>

              {/* Garis 3 → menu.js */}
              <Link href="/menu" legacyBehavior>
                <a className="icon"><FaBars /></a>
              </Link>

              {/* Close → index.js */}
              <Link href="/" legacyBehavior>
                <a className="icon-close"><FaTimes /></a>
              </Link>
            </div>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <div className="page-content">
          <div className="top-marquee">
            <div className="marquee">
              Selamat datang di website kami, semoga anda sehat selalu. Salam kasih dari kami - FitTogether Team
            </div>
          </div>

          <div className="menu-container">
            {/* Kontak Darurat */}
            <article className="menu-article">
              <h2>Kontak Darurat</h2>
              <div className="contact-info" role="contentinfo">
                <div><strong>Email</strong> &nbsp;: helllo@fittogether.id</div>
                <div><strong>Telp/hp</strong> : +6221 1234 5678</div>
                <div><strong>Lokasi</strong> &nbsp;&nbsp;&nbsp;: Semarang, Jawa Tengah</div>
              </div>

              <div className="social-links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              </div>
            </article>

            {/* Side Menu */}
            <nav className="menu-list" role="navigation" aria-label="Menu Navigasi">
              <Link href="/about" legacyBehavior>
                <a className="menu-item">Tentang Kami</a>
              </Link>

              <Link href="/caripartner" legacyBehavior>
                <a className="menu-item">Cari Partner</a>
              </Link>

              <Link href="/kesanpesan" legacyBehavior>
                <a className="menu-item">Kesan &amp; Pesan</a>
              </Link>

              <button className="menu-item active" disabled>Kontak Darurat</button>
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
