import Image from "next/image";
import { useRouter } from "next/router";
import { FaFacebook, FaInstagram, FaTwitter, FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function Daftar() {
  const router = useRouter();

  // state untuk menyimpan input form
  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
  });

  // handle perubahan input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // handle klik daftar
  const handleDaftar = () => {
    const { fullname, username, email, password } = formData;

    // Poin pertama: validasi input
    if (!fullname || !username || !email || !password) {
      alert("Semua field wajib diisi sebelum mendaftar!");
      return;
    }

    // Poin kedua: jika valid → tampil notif lalu redirect
    alert("Data anda telah berhasil dimasukan");
    router.push("/home");
  };

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

        .close-btn {
          margin-left: auto;
          cursor: pointer;
          font-size: 22px;
          color: #08121a;
          transition: transform 0.2s ease;
        }
        .close-btn:hover {
          transform: scale(1.2);
          color: #000;
        }

        .banner { background:#fff; padding:6px 12px; overflow:hidden; white-space:nowrap; }
        .banner p { display:inline-block; padding-left:100%; animation:marquee 14s linear infinite; }
        @keyframes marquee { 0%{ transform:translateX(0);} 100%{ transform:translateX(-100%);} }

        main {
          background-color: #57a7e0;
          padding: 36px 20px 56px 20px;
          min-height: 70vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .form-container {
          background: #c0bda7ff;
          padding: 28px 40px;
          border-radius: 8px;
          box-shadow: 0 6px 18px rgba(0,0,0,0.15);
          width: 360px;
          color: #032032;
        }

        .form-title {
          font-weight: 700;
          font-size: 26px;
          margin-bottom: 24px;
          text-align: center;
          color: #032032;
        }

        label { display: block; margin-top: 16px; font-weight: 600; font-size: 15px; color: #042b3a; }
        input {
          width: 100%;
          margin-top: 6px;
          padding: 8px 10px;
          border-radius: 4px;
          border: 1.5px solid #cfcfff;
          font-size: 14px;
          font-weight: 400;
          color: #2b2b8a;
          background: #fff;
          outline: none;
          transition: border-color 0.3s ease;
        }
        input:focus { border-color: #6e78f7; }

        .btn-login {
          margin-top: 24px;
          width: 100%;
          padding: 10px 0;
          background: #6e78f7;
          border: none;
          border-radius: 4px;
          color: white;
          font-weight: 600;
          cursor: pointer;
          font-size: 16px;
          transition: background-color 0.3s ease;
        }
        .btn-login:hover { background: #585fd8; }

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

        <FaTimes 
          className="close-btn" 
          title="Tutup dan kembali ke beranda"
          onClick={() => router.push("/")}
        />
      </header>

      <div className="banner" role="region" aria-label="Pengumuman">
        <p>
          Selamat datang di website kami, semoga anda sehat selalu. salam kasih dari kami — FitTogether Team
        </p>
      </div>

      <main>
        <div className="form-container" role="form" aria-label="Form pendaftaran pengguna">
          <div className="form-title">Daftar</div>

          <label htmlFor="fullname">Nama lengkap**</label>
          <input id="fullname" type="text" name="fullname" placeholder="Masukkan nama lengkap" value={formData.fullname} onChange={handleChange} />

          <label htmlFor="username">Username**</label>
          <input id="username" type="text" name="username" placeholder="Masukkan username" value={formData.username} onChange={handleChange} />

          <label htmlFor="email">Email **</label>
          <input id="email" type="email" name="email" placeholder="Masukkan email" value={formData.email} onChange={handleChange} />

          <label htmlFor="password">Password**</label>
          <input id="password" type="password" name="password" placeholder="Masukkan password" value={formData.password} onChange={handleChange} />

          <button
            className="btn-login"
            type="button"
            onClick={handleDaftar}
          >
            Daftar
          </button>
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
          <div className="contact-items">Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: hello@fittogether.id</div>
          <div className="contact-items">Telp/hp: +6221 1234 5678</div>
          <div className="contact-items">Lokasi &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: Semarang, Jawa Tengah</div>

          <div className="header-right" role="navigation" aria-label="Tautan sosial">
            <a className="social-link" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a className="social-link" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a className="social-link" href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
