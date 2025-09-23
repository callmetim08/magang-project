// pages/login.js
import Image from "next/image";
import { useRouter } from "next/router";
import { FaFacebook, FaInstagram, FaTwitter, FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function Login() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // validasi sebelum submit
    if (!username.trim() || !password.trim()) {
      alert("Silakan isi Username dan Password terlebih dahulu.");
      return;
    }

    // sukses -> notif + redirect
    alert("data anda telah berhasil dimasukan");
    router.push("/home");
  };

  // submit saat tekan Enter pada input
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  const isFormValid = username.trim() !== "" && password.trim() !== "";

  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin:0; padding:0; font-family: Arial, sans-serif; }
        body { background-color: #57a7e0; }

        /* HEADER */
        header {
          position: relative;
          display: flex;
          align-items: center;
          gap: 12px;
          background: #cdc186;
          padding: 10px 20px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.12);
        }

        .logos {
          display: flex;
          gap: 8px;
          align-items: center;
          flex-shrink: 0;
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
          line-height: 1;
          pointer-events: none;
        }

        .banner p { display:inline-block; padding-left:100%; animation:marquee 14s linear infinite; }
        @keyframes marquee { 0%{ transform:translateX(0);} 100%{ transform:translateX(-100%);} }

        .header-right {
          margin-left: auto;
          display: flex;
          gap: 12px;
          align-items: center;
          z-index: 3;
        }
        .social-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: rgba(0,0,0,0.03);
          color: #08121a;
          text-decoration: none;
          transition: transform .12s ease, background .12s ease;
          border: none;
          cursor: pointer;
          font-size: 16px;
        }
        .social-link:hover {
          transform: translateY(-3px);
          background: rgba(0,0,0,0.06);
        }

        /* MAIN FORM */
        main {
          background-color: #57a7e0;
          padding: 36px 20px 56px 20px;
          min-height: 70vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .form-container {
          background: #d3d3d3;
          padding: 28px 40px;
          border-radius: 8px;
          box-shadow: 0 6px 18px rgba(0,0,0,0.15);
          width: 360px;
          color: #032032;
          text-align: left;
        }

        .form-title {
          font-weight: 700;
          font-size: 26px;
          margin-bottom: 24px;
          text-align: center;
          color: #000;
        }

        label {
          display: inline-block;
          width: 120px;
          font-weight: 600;
          font-size: 15px;
          color: #042b3a;
        }

        .input-wrapper {
          display: flex;
          align-items: center;
          margin-top: 16px;
        }

        input {
          flex: 1;
          margin-left: 8px;
          padding: 6px 8px;
          border-radius: 4px;
          border: 1.5px solid #cfcfff;
          font-size: 14px;
          font-weight: 400;
          color: #2b2b8a;
          background: #fff;
          outline: none;
          transition: border-color 0.3s ease;
          height: 30px;
        }
        input:focus { border-color: #6e78f7; }

        .btn-login {
          margin: 24px auto 0 auto;
          display: block;
          width: 140px;
          padding: 8px 0;
          background: #6e78f7;
          border: none;
          border-radius: 4px;
          color: white;
          font-weight: 600;
          cursor: pointer;
          font-size: 14px;
          transition: background-color 0.3s ease;
          text-align: center;
        }
        .btn-login:hover { background: #585fd8; }

        .btn-login:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }

        .forgot-password {
          margin-top: 12px;
          text-align: center;
          font-size: 13px;
          color: #032032;
          cursor: pointer;
          user-select: none;
        }
        .forgot-password:hover { text-decoration: underline; }

        /* FOOTER */
        footer {
          background: #a79f9c;
          color: #231f20;
          padding: 16px 20px;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          font-size: 13px;
          font-weight: 600;
        }
        .footer-section { min-width: 120px; margin-bottom: 8px; }
        .footer-section h4 { font-weight: 900; margin-bottom: 8px; }
        .footer-link { display: block; margin-bottom: 4px; color: #231f20; text-decoration: none; }
        .footer-link:hover { text-decoration: underline; }
        .contact-items { line-height: 1.6; margin-bottom: 6px; }
        .social-icons { display: flex; gap: 8px; }
        .social-icons a { color: #231f20; font-size: 18px; text-decoration: none; }

        @media(max-width: 760px) {
          .brand {
            position: static;
            transform: none;
            margin-left: 8px;
            pointer-events: auto;
          }
          header { padding: 10px 12px; }
          .header-right { margin-left: 8px; }
          .input-wrapper {
            flex-direction: column;
            align-items: flex-start;
          }
          label {
            width: 100%;
            margin-bottom: 6px;
          }
          input {
            width: 100%;
            margin-left: 0;
          }
          .btn-login {
            width: 100%;
          }
        }
      `}</style>

      <header role="banner" aria-label="Halaman header">
        <div className="logos" aria-hidden="true">
          <Image src="/ind.png" alt="Logo Indonesia" width={36} height={36} />
          <Image src="/jateng.png" alt="Logo Jawa Tengah" width={36} height={36} />
          <Image src="/smg.png" alt="Logo Semarang" width={36} height={36} />
          <Image src="/logo.png" alt="Logo FitTogether" width={36} height={36} />
        </div>

        <div className="brand" aria-hidden="true">FitTogether</div>

        <div className="header-right" role="navigation" aria-label="Kontrol header">
          <button
            className="social-link"
            aria-label="Tutup dan kembali ke beranda"
            title="Tutup"
            onClick={() => router.push("/")}
          >
            <FaTimes />
          </button>
        </div>
      </header>

      <div className="banner" role="region" aria-label="Pengumuman">
        <p>
          Selamat datang di website kami, semoga anda sehat selalu. salam kasih dari kami — FitTogether Team
        </p>
      </div>

      <main>
        <div className="form-container" role="form" aria-label="Form login pengguna">
          <div className="form-title">Login</div>

          <div className="input-wrapper">
            <label htmlFor="username">Username**</label>
            <input
              id="username"
              type="text"
              name="username"
              placeholder="Masukkan username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyDown={handleKeyDown}
              required
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="password">Password**</label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Masukkan password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={handleKeyDown}
              required
            />
          </div>

          <button
            className="btn-login"
            type="button"
            onClick={handleLogin}
            disabled={!isFormValid}
            aria-disabled={!isFormValid}
          >
            Login
          </button>

          {/* -> NAVIGASI: masuk ke change-password.js */}
          <div
            className="forgot-password"
            role="button"
            tabIndex={0}
            onClick={() => router.push("/change-password")}
            onKeyDown={(e) => { if (e.key === "Enter") router.push("/change-password"); }}
            aria-label="Lupa password, pergi ke halaman ganti password"
          >
            Lupa password?? Klik disini
          </div>
        </div>
      </main>

      <footer role="contentinfo">
        <div className="footer-section">
          <h4>DUKUNGAN</h4>
          <a href="#" className="footer-link">Bantuan</a>
          <a href="#" className="footer-link">Pertanyaan</a>
          <a href="#" className="footer-link">Kebijakan Privasi</a>
          <a href="#" className="footer-link">Syarat & Ketentuan</a>
        </div>

        <div className="footer-section">
          <h4>KONTAK DARURAT</h4>
          <div className="contact-items">Email : hello@fittogether.id</div>
          <div className="contact-items">Telp/hp: +6221 1234 5678</div>
          <div className="contact-items">Lokasi : Semarang, Jawa Tengah</div>

          <div className="header-right" role="navigation" aria-label="Tautan sosial">
            <a className="social-link" href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a className="social-link" href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a className="social-link" href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          </div>
        </div>
      </footer>
    </>
  );
}
