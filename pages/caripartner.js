// pages/caripartner.js
import Image from "next/image";
import Link from "next/link";
import { FaHome, FaUser, FaBars, FaTimes } from "react-icons/fa";

export default function Caripartner() {
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
        .logo-group img { width: 28px; height: 28px; display:block; }
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

        .menu-container {
          display: flex;
          align-items: stretch;
          background: #57a7e0;
          min-height: 420px;
          width: 100%;
        }
        
        /* Bagian kiri biru dengan form Cari Partner */
        .menu-article {
          flex: 3;
          padding: 60px 40px;
          color: #071325;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          background: #5994c7; /* biru sesuai design */
          position: relative;
        }

        .menu-article h2 {
          font-weight: 700;
          margin-bottom: 24px;
          font-size: 24px;
          text-align: center;
          color: #071325;
        }

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
          margin-bottom: 6px;
          display: block;
          text-align: center;
          font-size: 14px;
          border-bottom: 2px solid #a19292;
          padding-bottom: 4px;
          background: #b3a6a6;
          box-shadow: inset 0 2px 3px rgba(0,0,0,0.1);
          border-radius: 3px;
        }

        input[type="text"], select {
          width: 100%;
          padding: 8px 12px;
          font-size: 14px;
          border: none;
          border-radius: 4px;
          background: #8b8585;
          color: #fff;
          box-shadow: inset 0 2px 4px rgba(0,0,0,0.2);
          appearance: none;
        }
        select {
          cursor: pointer;
          background-image:
            linear-gradient(45deg, transparent 50%, #662323 50%),
            linear-gradient(135deg, #662323 50%, transparent 50%),
            linear-gradient(to right, #999, #999);
          background-position:
            calc(100% - 20px) calc(1em + 2px),
            calc(100% - 15px) calc(1em + 2px),
            calc(100% - 25px) 0.7em;
          background-size: 5px 5px, 5px 5px, 1px 1.5em;
          background-repeat: no-repeat;
        }
        input::placeholder {
          color: #dcd6d6;
          font-style: italic;
        }
        
        button.cari-btn {
          margin-top: 6px;
          background: #5552ff;
          border: none;
          padding: 10px 24px;
          color: #eaeaea;
          font-weight: 600;
          font-size: 16px;
          border-radius: 4px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          box-shadow: 0 0 8px #6666ff;
          transition: background 0.3s ease;
        }
        button.cari-btn:hover {
          background: #3d3aff;
          box-shadow: 0 0 14px #5555ff;
        }
        button.cari-btn svg {
          stroke-width: 1.5;
        }

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
          position: relative;
          user-select: none;
          transition: all 0.2s ease;
        }
        .menu-item:hover {
          background: #e3d9d9;
          box-shadow: 0 6px 0 rgba(0,0,0,0.06);
          border-color: #8a1a1a;
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
          .menu-article {
            padding: 40px 24px;
          }
          .form-box {
            max-width: 100%;
            padding: 20px;
          }
          button.cari-btn {
            width: 100%;
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
              {/* 1. Home → home.js */}
              <Link href="/home" legacyBehavior>
                <a className="icon"><FaHome /></a>
              </Link>

              {/* 2. Profil → profil.js */}
              <Link href="/profil" legacyBehavior>
                <a className="icon"><FaUser /></a>
              </Link>

              {/* 3. Bars → menu.js */}
              <Link href="/menu" legacyBehavior>
                <a className="icon"><FaBars /></a>
              </Link>

              {/* 4. Close → index.js */}
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
              Selamat datang di website kami, semoga anda sehat selalu. salam kasih dari kami-FitTogether Team
            </div>
          </div>

          <div className="menu-container">
            <article className="menu-article">
              <h2>Cari Partner</h2>
              <form className="form-box" onSubmit={e => e.preventDefault()}>
                <label htmlFor="lokasi">Lokasi</label>
                <input
                  type="text"
                  id="lokasi"
                  name="lokasi"
                  placeholder="Masukan Lokasi atau Kode Pos"
                  autoComplete="off"
                />

                <label htmlFor="jenis-olahraga">Jenis Olahraga</label>
                <select id="jenis-olahraga" name="jenis-olahraga" defaultValue="">
                  <option value="" disabled>Pilih Jenis Olahraga</option>
                  <option value="futsal">Futsal</option>
                  <option value="badminton">Badminton</option>
                  <option value="basket">Basket</option>
                  <option value="renang">Renang</option>
                  <option value="yoga">Yoga</option>
                </select>

                <label htmlFor="jadwal-olahraga">Jadwal Olahraga</label>
                <select id="jadwal-olahraga" name="jadwal-olahraga" defaultValue="">
                  <option value="" disabled>Atur/Pilih Jadwal</option>
                  <option value="senin-sabtu">Senin - Sabtu</option>
                  <option value="weekend">Weekend</option>
                  <option value="pagi">Pagi</option>
                  <option value="siang">Siang</option>
                  <option value="malam">Malam</option>
                </select>

                <button type="submit" className="cari-btn" aria-label="Cari Partner">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18" height="18"
                    fill="none"
                    stroke="#eaeaea"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="11" cy="11" r="7" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                  Cari Partner
                </button>
              </form>
            </article>

            {/* Side Menu kanan */}
            <nav className="menu-list">
              <button className="menu-item" onClick={() => { window.location.href = '/about' }}>Tentang Kami</button>
              <button className="menu-item" disabled style={{borderColor: '#662323', background: '#fbd1d1', cursor: 'default', boxShadow: '0 0 6px #63ffca'}}>
                Cari Partner
              </button>
              <button className="menu-item" onClick={() => { window.location.href = '/kesanpesan' }}>Kesan &amp; Pesan</button>
              <button className="menu-item" onClick={() => { window.location.href = '/emergency' }}>Kontak Darurat</button>
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
