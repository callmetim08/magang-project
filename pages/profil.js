// pages/profil.js
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  FaHome,
  FaUser,
  FaBars,
  FaTimes,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { useState } from "react";

export default function Profil() {
  const router = useRouter();

  // ✅ State untuk form
  const [form, setForm] = useState({
    fullname: "",
    ttl: "",
    nowa: "",
    olahraga: "",
    alamat: "",
    jadwal: "",
    umur: "",
    foto: null,
  });

  // ✅ Handler perubahan input
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  // ✅ Validasi & Simpan Data
  const handleSubmit = () => {
    const { fullname, ttl, nowa, olahraga, alamat, jadwal, umur, foto } = form;

    if (
      !fullname ||
      !ttl ||
      !nowa ||
      !olahraga ||
      !alamat ||
      !jadwal ||
      !umur ||
      !foto
    ) {
      alert("⚠️ Semua data wajib diisi sebelum menyimpan!");
      return;
    }

    // Jika semua terisi
    alert("✅ Data-data anda berhasil disimpan");
    router.push("/CariPartner");
  };

  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin:0; padding:0; font-family: Arial, sans-serif; }
        body { background-color: #57a7e0; }
        header { position: relative; display: flex; align-items: center; gap: 12px; background: #cdc186; padding: 10px 20px; box-shadow: 0 2px 6px rgba(0,0,0,0.12); }
        .logos { display:flex; gap:8px; align-items:center; flex-shrink:0; }
        .brand { position: absolute; left: 50%; transform: translateX(-50%); font-weight: 900; font-style: italic; font-size: 26px; color: #08121a; pointer-events: none; }
        .header-right { margin-left: auto; display:flex; gap:12px; align-items:center; }
        .social-link { display:flex; align-items:center; justify-content:center; width:36px; height:36px; border-radius:8px; background: rgba(0,0,0,0.03); color:#08121a; text-decoration:none; transition:transform .12s ease, background .12s ease; font-size:16px; cursor:pointer; border:none; }
        .social-link:hover { transform: translateY(-3px); background: rgba(0,0,0,0.06); }
        .banner { background: #eaeaea; color:#000; font-size:13px; padding:6px 12px; overflow:hidden; white-space:nowrap; }
        .banner p { display:inline-block; padding-left:100%; animation: marquee 14s linear infinite; }
        @keyframes marquee { 0%{ transform:translateX(0);} 100%{ transform:translateX(-100%);} }
        main { background:#57a7e0; padding:36px 20px 56px; min-height:70vh; display:flex; justify-content:center; align-items:center; }
        .form-container { background:#c0bda7; padding:28px 40px; border-radius:8px; box-shadow:0 6px 18px rgba(0,0,0,0.15); width:360px; color:#032032; }
        .form-title { font-weight:700; font-size:26px; margin-bottom:24px; text-align:center; }
        label { display:block; margin-top:16px; font-weight:600; font-size:15px; color:#042b3a; }
        input { width:100%; margin-top:6px; padding:8px 10px; border-radius:4px; border:1.5px solid #cfcfff; font-size:14px; background:#fff; outline:none; }
        input:focus { border-color:#6e78f7; }
        .btn-login { margin-top:24px; width:100%; padding:10px 0; background:#6e78f7; border:none; border-radius:4px; color:white; font-weight:600; cursor:pointer; font-size:16px; transition:background-color 0.3s ease; }
        .btn-login:hover { background:#585fd8; }
        footer { background:#a79f9c; color:#231f20; padding:16px 20px; display:flex; justify-content:space-between; flex-wrap:wrap; font-size:13px; font-weight:600; }
        .footer-section { min-width:120px; margin-bottom:8px; }
        .footer-section h4 { font-weight:900; margin-bottom:8px; }
        .footer-link { display:block; margin-bottom:4px; color:#231f20; text-decoration:none; }
        .contact-items { line-height:1.6; margin-bottom:6px; }
        .social-icons { display:flex; gap:8px; }
      `}</style>

      {/* HEADER */}
      <header>
        <div className="logos">
          <Image src="/ind.png" alt="Logo Indonesia" width={36} height={36} />
          <Image src="/jateng.png" alt="Logo Jawa Tengah" width={36} height={36} />
          <Image src="/smg.png" alt="Logo Semarang" width={36} height={36} />
          <Image src="/logo.png" alt="Logo FitTogether" width={36} height={36} />
        </div>
        <div className="brand">FitTogether</div>
        <div className="header-right">
          {/* ✅ Icon Home menuju halaman home.js */}
          <button
            className="social-link"
            onClick={() => router.push("/home")}
            title="Home"
          >
            <FaHome />
          </button>

          {/* ✅ Icon Profil berubah merah saat di /profil */}
          <Link href="/profil" className="social-link">
            <FaUser color={router.pathname === "/profil" ? "red" : "#08121a"} />
          </Link>

          {/* ✅ Icon garis 3 (menu) → menuju menu.js */}
          <button
            className="social-link"
            onClick={() => router.push("/menu")}
            title="Menu"
          >
            <FaBars />
          </button>

          {/* ✅ Icon Close (X) → menuju index.js */}
          <button
            className="social-link"
            onClick={() => router.push("/")}
            title="Close"
          >
            <FaTimes />
          </button>
        </div>
      </header>

      {/* BANNER */}
      <div className="banner">
        <p>
          Selamat datang di website kami, semoga anda sehat selalu. salam kasih
          dari kami — FitTogether Team
        </p>
      </div>

      {/* FORM */}
      <main>
        <div className="form-container">
          <div className="form-title">Lengkapi Profil Anda</div>

          <label>Nama lengkap**</label>
          <input type="text" name="fullname" onChange={handleChange} required />

          <label>Tempat, Tanggal Lahir**</label>
          <input type="text" name="ttl" onChange={handleChange} required />

          <label>No Whatsapp**</label>
          <input type="number" name="nowa" onChange={handleChange} required />

          <label>Olahraga Favorit**</label>
          <input type="text" name="olahraga" onChange={handleChange} required />

          <label>Alamat Lengkap**</label>
          <input type="text" name="alamat" onChange={handleChange} required />

          <label>Jadwal Olahraga**</label>
          <input type="text" name="jadwal" onChange={handleChange} required />

          <label>Umur**</label>
          <input type="number" name="umur" onChange={handleChange} required />

          <label>Upload Foto**</label>
          <input
            type="file"
            name="foto"
            accept="image/*"
            onChange={handleChange}
            required
          />

          <button className="btn-login" type="button" onClick={handleSubmit}>
            Simpan Data
          </button>
        </div>
      </main>

      {/* FOOTER */}
      <footer>
        <div className="footer-section">
          <h4>DUKUNGAN</h4>
          <a href="#" className="footer-link">
            Bantuan
          </a>
          <a href="#" className="footer-link">
            Pertanyaan
          </a>
          <a href="#" className="footer-link">
            Kebijakan Privasi
          </a>
          <a href="#" className="footer-link">
            Syarat & Ketentuan
          </a>
        </div>
        <div className="footer-section">
          <h4>KONTAK DARURAT</h4>
          <div className="contact-items">Email: hello@fittogether.id</div>
          <div className="contact-items">Telp/hp: +6221 1234 5678</div>
          <div className="contact-items">Lokasi: Semarang, Jawa Tengah</div>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank">
              <FaTwitter />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
