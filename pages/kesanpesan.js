// pages/kesanpesan.js
import Image from "next/image";
import Link from "next/link";
import { FaHome, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function Kesanpesan() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const Star = ({ index }) => (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill={(hoverRating || rating) >= index ? "#ffd700" : "#aaa"}
      stroke="#662323"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ cursor: "pointer" }}
      onClick={() => setRating(index)}
      onMouseEnter={() => setHoverRating(index)}
      onMouseLeave={() => setHoverRating(0)}
      aria-label={`${index} star`}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === "Enter") setRating(index); }}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );

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

        /* Header (warna dan ukuran sama) */
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

        /* Marquee warna dan animasi sama */
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

        /* Layout container utama */
        .menu-container {
          display: flex;
          align-items: stretch;
          background: #57a7e0;
          min-height: 420px;
          width: 100%;
        }

        /* Bagian kiri biru dengan form Kesan & Pesan */
        .menu-article {
          flex: 3;
          padding: 60px 40px;
          color: #071325;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          background: #5994c7; /* warna biru sesuai desain */
          position: relative;
        }
        .menu-article h2 {
          font-weight: 700;
          margin-bottom: 24px;
          font-size: 24px;
          text-align: center;
          color: #071325;
        }

        /* Form box dengan latar dan padding */
        .form-box {
          max-width: 360px;
          background: #d6d6d6;
          margin: 0 auto;
          padding: 24px 32px;
          box-shadow: 0 0 10px rgba(0,0,0,0.1);
          border-radius: 6px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        label {
          font-weight: 700;
          color: #333;
          font-size: 14px;
          border-bottom: 2px solid #a19292;
          padding-bottom: 4px;
          background: #b3a6a6;
          box-shadow: inset 0 2px 3px rgba(0,0,0,0.1);
          border-radius: 3px;
          user-select: none;
        }

        input[type="text"], textarea {
          width: 100%;
          padding: 8px 12px;
          font-size: 14px;
          border: none;
          border-radius: 4px;
          background: #8b8585;
          color: #fff;
          box-shadow: inset 0 2px 4px rgba(0,0,0,0.2);
          font-family: Arial, sans-serif;
          resize: vertical;
        }
        input::placeholder,
        textarea::placeholder {
          color: #dcd6d6;
          font-style: italic;
        }

        /* Bintang rating */
        .rating-wrapper {
          display: flex;
          gap: 4px;
          background: #8b8585;
          padding: 8px 12px;
          border-radius: 4px;
          user-select: none;
        }

        /* Tombol Simpan */
        button.save-btn {
          margin-top: 6px;
          background: #5552ff;
          border: none;
          padding: 10px 24px;
          color: #eaeaea;
          font-weight: 600;
          font-size: 16px;
          border-radius: 4px;
          cursor: pointer;
          box-shadow: 0 0 8px #6666ff;
          transition: background 0.3s ease;
          align-self: center;
          width: 140px;
        }
        button.save-btn:hover {
          background: #3d3aff;
          box-shadow: 0 0 14px #5555ff;
        }

        /* Side menu kanan tetap sama style */
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
          position: relative;
          user-select: none;
          transition: all 0.2s ease;
        }
        .menu-item:hover {
          background: #e3d9d9;
          box-shadow: 0 6px 0 rgba(0,0,0,0.06);
          border-color: #8a1a1a;
        }

        /* Tombol yang aktif/disabled style */
        .menu-item.active {
          border-color: #662323;
          background: #fbd1d1;
          cursor: default;
          box-shadow: 0 0 6px #63ffca;
        }

        /* Footer tetap sama */
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
          .menu-article {
            padding: 40px 24px;
          }
          .form-box {
            max-width: 100%;
            padding: 20px;
          }
          button.save-btn {
            width: 100%;
            max-width: none;
          }
          .menu-item {
            width: auto;
            flex: 1;
          }
          .rating-wrapper {
            justify-content: center;
          }
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
              {/* Bars → menu.js */}
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

        {/* CONTENT */}
        <div className="page-content">
          <div className="top-marquee">
            <div className="marquee">
              Selamat datang di website kami, semoga anda sehat selalu. salam kasih dari kami-FitTogether Team
            </div>
          </div>

          <div className="menu-container">
            {/* Form kiri */}
            <article className="menu-article">
              <h2>Kesan &amp; Pesan</h2>
              <form
                className="form-box"
                onSubmit={(e) => { e.preventDefault(); alert("Data telah disimpan!"); }}
              >
                <label htmlFor="nama-lengkap">Nama Lengkap**</label>
                <input type="text" id="nama-lengkap" placeholder="Masukan Nama Lengkap" required />

                <label htmlFor="olahraga">Olahraga**</label>
                <input type="text" id="olahraga" placeholder="Masukan Olahraga anda" required />

                <label htmlFor="kab-kota">Kab/Kota**</label>
                <input type="text" id="kab-kota" placeholder="Masukan Kab/kota asal" required />

                <label htmlFor="kesan-pesan">Kesan &amp; Pesan**</label>
                <textarea id="kesan-pesan" placeholder="Masukan Kesan & Pesan anda" rows={4} required />

                <label>Rating (Pilih)**</label>
                <div className="rating-wrapper">
                  {[1, 2, 3, 4, 5].map((star) => <Star key={star} index={star} />)}
                </div>

                <button type="submit" className="save-btn">Simpan Data</button>
              </form>
            </article>

            {/* Side Menu kanan */}
            <nav className="menu-list" role="navigation" aria-label="Menu Navigasi">
              <button className="menu-item" onClick={() => { window.location.href = '/about' }}>
                Tentang Kami
              </button>
              <button className="menu-item" onClick={() => { window.location.href = '/caripartner' }}>
                Cari Partner
              </button>
              <button className="menu-item active" disabled>
                Kesan &amp; Pesan
              </button>
              <button className="menu-item" onClick={() => { window.location.href = '/emergency' }}>
                Kontak Darurat
              </button>
            </nav>
          </div>
          <p>
            <Link href="/menu" legacyBehavior>
              <a className="icon-close"><FaTimes /></a>
            </Link>
          </p>
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