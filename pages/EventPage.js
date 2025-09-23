// pages/eventpage.js
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaUserCircle,
  FaHome,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaBars,
} from "react-icons/fa";
import { useState } from "react";

export default function EventPage() {
  const events = [
    {
      type: "Futsal",
      date: "13 Okt 2025",
      title: "Futsal Championship",
      description:
        "Turnamen Futsal Amatir dengan hadiah jutaan rupiah untuk 3 tim pemenang.",
      info: "15 Tim Bergabung",
      image: "/futsal.jpg",
    },
    {
      type: "Bulu Tangkis",
      date: "20 Okt 2025",
      title: "Bulu Tangkis Open",
      description:
        "Kompetisi Bulu Tangkis tingkat komunitas dengan kategori ganda putra & ganda campuran.",
      info: "20 Tim Bergabung",
      image: "/badminton.jpg",
    },
    {
      type: "Basket",
      date: "27 Okt 2025",
      title: "Basket Street Challenge",
      description:
        "Pertandingan basket 3 lawan 3 seru untuk semua usia, hadiah menarik menanti!",
      info: "12 Tim Bergabung",
      image: "/basket.jpg",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextEvent = () => {
    setCurrent((prev) => (prev + 1) % events.length);
  };

  const prevEvent = () => {
    setCurrent((prev) => (prev - 1 + events.length) % events.length);
  };

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          font-family: Arial, sans-serif;
        }
        body {
          background-color: #57a7e0;
        }

        /* ===== HEADER ===== */
        header {
          display: flex;
          align-items: center;
          gap: 12px;
          background: #cdc186;
          padding: 10px 20px;
          height: 56px;
        }
        .logos {
          display: flex;
          gap: 8px;
          align-items: center;
        }
        .brand {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          font-weight: 900;
          font-style: italic;
          font-size: 26px;
          color: #08121a;
          text-align: center;
          pointer-events: none;
        }
        .header-right {
          margin-left: auto;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .icon-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 8px;
          background: rgba(0,0,0,0.05);
          color: #08121a;
          font-size: 18px;
          cursor: pointer;
          border: none;
        }
        .icon-btn:hover {
          background: rgba(0,0,0,0.1);
        }
        .user-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
        }

        /* ===== BANNER ===== */
        .banner {
          background: #fff;
          color: #000;
          font-size: 13px;
          padding: 6px 12px;
          overflow: hidden;
          white-space: nowrap;
          user-select: none;
          border-top: 2px solid #cdc186;
          border-bottom: 2px solid #cdc186;
        }
        .banner p {
          display: inline-block;
          padding-left: 100%;
          animation: marquee 14s linear infinite;
          font-weight: 600;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }

        /* ===== MAIN ===== */
        main {
          background-color: #57a7e0;
          padding: 20px;
          min-height: 75vh;
          color: #000;
          max-width: 1100px;
          margin: 20px auto;
        }
        h2.section-title {
          text-align: center;
          margin-bottom: 24px;
          font-size: 22px;
          font-weight: 700;
          color: #08121a;
        }

        .event-box {
          position: relative;
          background-color: #1f4e79;
          color: white;
          border-radius: 10px;
          padding: 20px;
          max-width: 900px;
          margin: 0 auto 36px auto;
        }
        .event-content {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
        }
        .event-image {
          flex-shrink: 0;
          width: 360px;
          border-radius: 8px;
        }
        .event-details {
          flex: 1 1 320px;
          font-size: 14px;
        }
        .event-type {
          display: inline-block;
          background-color: #739e73;
          color: #1f4e79;
          font-weight: 700;
          font-size: 13px;
          padding: 2px 8px;
          border-radius: 4px;
          margin-bottom: 4px;
        }
        .event-date {
          font-weight: 600;
          font-size: 13px;
          margin-left: 12px;
          color: #c1d9ff;
        }
        .event-title {
          font-weight: 800;
          font-size: 16px;
          margin: 6px 0 8px 0;
        }
        .event-description {
          font-size: 14px;
          line-height: 1.3;
          margin-bottom: 12px;
        }
        .event-info {
          font-style: italic;
          font-weight: 600;
          font-size: 13px;
          margin-bottom: 4px;
        }
        .btn-gabung,
        .btn-learn {
          background-color: #6e78f7;
          border: none;
          border-radius: 6px;
          color: white;
          font-weight: 600;
          font-style: italic;
          font-size: 14px;
          padding: 8px 18px;
          cursor: pointer;
          margin-right: 12px;
        }
        .btn-gabung:hover,
        .btn-learn:hover {
          background-color: #585fd8;
        }

        /* ===== ARROWS ===== */
        .arrow-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255,255,255,0.2);
          border: none;
          color: white;
          font-size: 22px;
          padding: 8px;
          border-radius: 50%;
          cursor: pointer;
        }
        .arrow-btn:hover {
          background: rgba(255,255,255,0.4);
        }
        .arrow-left { left: -50px; }
        .arrow-right { right: -50px; }

        /* ===== FOOTER ===== */
        footer {
          background: #a79f9c;
          color: #231f20;
          padding: 40px 20px;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          font-size: 13px;
          font-weight: 600;
          max-width: 100%;
          margin-top: 60px;
          min-height: 200px;
        }
        .social-icons a {
          margin-right: 8px;
          color: #000;
          font-size: 16px;
        }
      `}</style>

      {/* ===== HEADER ===== */}
      <header>
        <div className="logos">
          <Image src="/ind.png" alt="Logo Indonesia" width={36} height={36} />
          <Image src="/jateng.png" alt="Logo Jawa Tengah" width={36} height={36} />
          <Image src="/smg.png" alt="Logo Semarang" width={36} height={36} />
          <Image src="/logo.png" alt="Logo FitTogether" width={36} height={36} />
        </div>
        <div className="brand">FitTogether</div>
        <div className="header-right">
          {/* Tombol Home diarahkan ke /home */}
          <Link href="/home" legacyBehavior>
            <a className="icon-btn" title="Home"><FaHome /></a>
          </Link>
          {/* Tombol Profil diarahkan ke /profil */}
          <Link href="/profil" legacyBehavior>
            <a className="icon-btn user-btn" title="Profil"><FaUserCircle /></a>
          </Link>
          <Link href="/menu" legacyBehavior>
            <a className="icon-btn user-btn" title="Menu"><FaBars /></a>
          </Link>
          <Link href="/" legacyBehavior>
                <a className="icon-close" title="Tutup"><FaTimes /></a>
          </Link>
        </div>
      </header>

      {/* ===== BANNER ===== */}
      <div className="banner">
        <p>Selamat datang di website kami, semoga anda sehat selalu. Salam kasih dari kami — FitTogether Team</p>
      </div>

      {/* ===== MAIN ===== */}
      <main>
        <h2 className="section-title">Event Komunitas</h2>
        <div className="event-box">
          <button className="arrow-btn arrow-left" onClick={prevEvent}><FaChevronLeft /></button>
          <button className="arrow-btn arrow-right" onClick={nextEvent}><FaChevronRight /></button>

          <div className="event-content">
            <div className="event-image">
              <Image
                src={events[current].image}
                alt={events[current].title}
                width={360}
                height={180}
              />
            </div>
            <div className="event-details">
              <div>
                <span className="event-type">{events[current].type}</span>
                <span className="event-date">{events[current].date}</span>
              </div>
              <div className="event-title">{events[current].title}</div>
              <div className="event-description">{events[current].description}</div>
              <div className="event-info">{events[current].info}</div>
              <div>
                <button className="btn-gabung">Gabung</button>
                <button className="btn-learn">Pelajari Lebih Lanjut</button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* ===== FOOTER ===== */}
      <footer>
        <div>
          <h4>DUKUNGAN</h4>
          <div>Bantuan</div>
          <div>Pertanyaan</div>
          <div>Kebijakan Privasi</div>
          <div>Syarat &amp; Ketentuan</div>
        </div>
        <div>
          <h4>KONTAK DARURAT</h4>
          <div>Email : hello@fittogether.id</div>
          <div>Telp/hp : +6221 1234 5678</div>
          <div>Lokasi : Semarang, Jawa Tengah</div>
          <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>
      </footer>
    </>
  );
}
