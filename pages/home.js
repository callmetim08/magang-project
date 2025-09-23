// pages/home.js
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaBars,
  FaUserCircle,
  FaTimes,
  FaHome,
} from "react-icons/fa";

export default function Home() {
  const [homeActive, setHomeActive] = useState(false);

  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin:0; padding:0; font-family: Arial, sans-serif; }
        body { background-color: #57a7e0; }
        header {
          position: relative;
          display: flex;
          align-items: center;
          gap: 12px;
          background: #cdc186;
          padding: 10px 20px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.12);
          height: 56px;
        }
        .logos { display:flex; gap:8px; align-items:center; flex-shrink:0; }
        .header-right { margin-left: auto; display:flex; align-items:center; gap:12px; }
        .brand {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          font-weight: 900;
          font-style: italic;
          font-size: 26px;
          color: #08121a;
          text-align: center;
          line-height: 1;
          pointer-events: none;
        }
        .icon-btn {
          display:flex; align-items:center; justify-content:center;
          width:40px; height:40px;
          border-radius:8px;
          background: rgba(0,0,0,0.03);
          cursor:pointer; font-size:18px;
          transition: background .12s ease, transform .12s ease, color .2s ease;
          border:none;
        }
        .icon-btn:hover { background: rgba(0,0,0,0.06); transform: translateY(-2px); }
        .user-btn { width:44px; height:44px; border-radius:50%; }
        .home-btn { color: red; }        /* default merah */
        .home-btn.active { color: black; } /* kalau diklik jadi hitam */
        .icon-sep { display:flex; gap:8px; align-items:center; }
        .banner p { display:inline-block; padding-left:100%; animation:marquee 14s linear infinite; }
        @keyframes marquee { 0%{ transform:translateX(0);} 100%{ transform:translateX(-100%);} }
        main { background:#57a7e0; padding:20px 20px 56px; min-height:75vh; }
        .illustration-container { max-width:900px; margin:20px auto; display:flex; justify-content:center; }
        .illustration-container img { width:100%; height:auto; border-radius:8px; }
        .features-row { max-width:1100px; margin:28px auto 0; display:flex; gap:24px; justify-content:center; padding:0 12px; }
        .feature { flex:1 1 320px; background:rgba(255,255,255,0.06); border-radius:8px; padding:20px; box-shadow:0 6px 18px rgba(0,0,0,0.08); }
        .feature h2 { margin:0 0 8px 0; font-size:20px; color:#032032; }
        .feature p { margin:0 0 16px 0; color:#042b3a; font-size:14px; }
        .btn-learn { background:#6e78f7; color:white; font-size:15px; font-style:italic; font-weight:600; border:none; border-radius:6px; padding:10px 18px; cursor:pointer; }
        .btn-learn:hover { background:#585fd8; transform:translateY(-2px); }
        footer { background:#a79f9c; color:#231f20; padding:16px 20px; display:flex; justify-content:space-between; flex-wrap:wrap; font-size:13px; font-weight:600; }
        .footer-section { min-width:120px; margin-bottom:8px; }
        .footer-section h4 { font-weight:900; margin-bottom:8px; }
        .social-icons { display:flex; gap:8px; margin-top:8px; }
        @media (max-width:760px){
          .features-row { flex-direction:column; gap:12px; margin-top:18px; }
          .feature { padding:16px; }
        }
      `}</style>

      <header>
        <div className="logos">
          <Image src="/ind.png" alt="Logo Indonesia" width={36} height={36} />
          <Image src="/jateng.png" alt="Logo Jawa Tengah" width={36} height={36} />
          <Image src="/smg.png" alt="Logo Semarang" width={36} height={36} />
          <Image src="/logo.png" alt="Logo FitTogether" width={36} height={36} />
        </div>

        <div className="brand">FitTogether</div>

        <div className="header-right">
          {/* 🔹 Tombol Home (merah → hitam saat klik) */}
          <Link href="/home" passHref>
            <button
              className={`icon-btn home-btn ${homeActive ? "active" : ""}`}
              aria-label="Home"
              title="Beranda"
              onClick={() => setHomeActive(true)}
            >
              <FaHome />
            </button>
          </Link>

          {/* 🔹 Tombol User -> ke profil.js */}
          <Link href="/profil" passHref>
            <button className="icon-btn user-btn" aria-label="Profil pengguna" title="Profil">
              <FaUserCircle />
            </button>
          </Link>

          <div className="icon-sep">
            {/* 🔹 Tombol Bars -> ke menu.js */}
            <Link href="/menu" passHref>
              <button className="icon-btn" aria-label="Buka menu" title="Menu">
                <FaBars />
              </button>
            </Link>

            {/* 🔹 Tombol Close -> kembali ke index.js */}
            <Link href="/" passHref>
              <button className="icon-btn" aria-label="Tutup dan kembali" title="Tutup">
                <FaTimes />
              </button>
            </Link>
          </div>
        </div>
      </header>

      <div className="banner">
        <p>Selamat datang di website kami, semoga anda sehat selalu. salam kasih dari kami — FitTogether Team</p>
      </div>

      <main>
        <div className="illustration-container">
          <Image src="/illustration.png" alt="Ilustrasi komunitas olahraga" width={900} height={300} />
        </div>

        <div className="features-row">
          {/* 🔹 Event Komunitas -> tombol mengarah ke EventPage.js */}
          <div className="feature">
            <h2>Event Komunitas</h2>
            <p>Berbagai event penting yang akan diadakan ke depannya, gabung dan temukan partner!</p>
            <Link href="/EventPage" passHref>
              <button className="btn-learn">Pelajari Lebih Lanjut</button>
            </Link>
          </div>

          {/* 🔹 Cara Kerja Platform -> tombol mengarah ke CaraKerjaPage.js */}
          <div className="feature">
            <h2>Cara Kerja Platform FitTogether</h2>
            <p>Langkah mudah menemukan partner latihan, membuat grup, dan ikut event lokal.</p>
            <Link href="/CaraKerjaPage" passHref>
              <button className="btn-learn">Pelajari Lebih Lanjut</button>
            </Link>
          </div>
        </div>
      </main>

      <footer>
        <div className="footer-section">
          <h4>DUKUNGAN</h4>
          <a href="#">Bantuan</a>
          <a href="#">Pertanyaan</a>
          <a href="#">Kebijakan Privasi</a>
          <a href="#">Syarat &amp; Ketentuan</a>
        </div>

        <div className="footer-section">
          <h4>KONTAK DARURAT</h4>
          <div>Email: hello@fittogether.id</div>
          <div>Telp/hp: +6221 1234 5678</div>
          <div>Lokasi: Semarang, Jawa Tengah</div>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank"><FaFacebook /></a>
            <a href="https://instagram.com" target="_blank"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank"><FaTwitter /></a>
          </div>
        </div>
      </footer>
    </>
  );
}
