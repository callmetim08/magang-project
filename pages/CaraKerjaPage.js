"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaUserCircle,
  FaHome,
  FaTimes,
  FaBars,
  FaUserPlus,
  FaSearch,
  FaHandshake,
} from "react-icons/fa";

export default function CaraKerjaPage() {
  const router = useRouter();

  // Data langkah cara kerja
  const steps = [
    {
      title: "Buat Profil",
      description:
        "Lengkapi Profil anda di menu profil dengan mulai dari mengisi no WA, sampai upload foto diri.",
      icon: <FaUserPlus />,
      bgColor: "#65c466", // hijau
    },
    {
      title: "Cari Partner",
      description:
        "Temukan Partner yang sesuai berdasarkan kriteria Pencarian Anda.",
      icon: <FaSearch />,
      bgColor: "#4a7de8", // biru
    },
    {
      title: "Mulai Olahraga",
      description:
        "Hubungi Partner, atur jadwal, dan nikmati sesi olahraga bersamanya.",
      icon: <FaHandshake />,
      bgColor: "#f27e25", // oranye
    },
  ];

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
          position: relative;
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

        .steps-container {
          display: flex;
          flex-direction: column;
          gap: 20px;
          max-width: 600px;
          margin: 0 auto;
        }
        .step {
          display: flex;
          gap: 16px;
          background: rgba(255 255 255 / 0.9);
          border-radius: 10px;
          padding: 16px 20px;
          align-items: center;
          color: #08121a;
          box-shadow: 0 3px 8px rgb(0 0 0 / 0.12);
        }
        .step-icon {
          width: 48px;
          height: 48px;
          min-width: 48px;
          border-radius: 50%;
          background-color: var(--bg-color);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 22px;
          flex-shrink: 0;
        }
        .step-content {
          flex: 1;
        }
        .step-title {
          font-weight: 700;
          font-size: 18px;
          margin-bottom: 4px;
        }
        .step-description {
          font-size: 14px;
          line-height: 1.3;
        }

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
          border-radius: 0;
        }
        footer > div {
          margin-bottom: 24px;
          min-width: 220px;
        }
        footer h4 {
          margin-bottom: 12px;
          font-weight: 700;
          color: #231f20;
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
          <button
            className="icon-btn"
            title="Home"
            onClick={() => router.push("/home")}
          >
            <FaHome />
          </button>
          <button
            className="icon-btn"
            title="Profil"
            onClick={() => router.push("/profil")}
          >
            <FaUserCircle />
          </button>
          <button
            className="icon-btn"
            title="Menu"
            onClick={() => router.push("/menu")}
          >
            <FaBars />
          </button>
          <button
            className="icon-btn"
            title="Close"
            onClick={() => router.push("/")}
          >
            <FaTimes />
          </button>
        </div>
      </header>

      {/* ===== BANNER ===== */}
      <div className="banner">
        <p>
          Selamat datang di website kami, semoga anda sehat selalu. Salam kasih dari kami — FitTogether Team
        </p>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <main>
        <h2 className="section-title">Cara Kerja Platform FitTogether</h2>
        <div className="steps-container">
          {steps.map(({ title, description, icon, bgColor }, index) => (
            <div className="step" key={index}>
              <div className="step-icon" style={{ "--bg-color": bgColor }}>
                {icon}
              </div>
              <div>
                <div className="step-title">{index + 1}. {title}</div>
                <div className="step-description">{description}</div>
              </div>
            </div>
          ))}
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
