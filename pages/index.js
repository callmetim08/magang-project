"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { Autoplay } from "swiper/modules";

import MusicPlayer from "../components/MusicPlayer"; // 🎵 import komponen baru

export default function Home() {
  const router = useRouter();
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const testimonials = [
    {
      name: "Denny Caknan",
      role: "Runner, Jakarta",
      rating: 5,
      text:
        "Sejak Pakai FitTogether, saya selalu ada partner lari setiap weekend. Motivasi lari olahraga jadi meningkat drastis!",
    },
    {
      name: "Siti Rahma",
      role: "Gym Enthusiast, Semarang",
      rating: 5,
      text:
        "Mudah menemukan teman latihan dan jadwal yang cocok. FitTogether membantu saya konsisten.",
    },
  ];

  const popular = [
    { icon: "🏃", name: "Lari", count: "1.2k+ Partner" },
    { icon: "⚽", name: "Sepak Bola", count: "890+ Partner" },
    { icon: "🏀", name: "Basket", count: "540+ Partner" },
    { icon: "🏸", name: "Bulu Tangkis", count: "750+ Partner" },
  ];

  const nextTestimonial = () =>
    setTestimonialIndex((p) => (p + 1) % testimonials.length);
  const prevTestimonial = () =>
    setTestimonialIndex((p) => (p - 1 + testimonials.length) % testimonials.length);

  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin:0; padding:0; font-family: Arial, sans-serif; }
        body { background-color: #cc7b60ff; }

        header {
          display:flex; align-items:center; gap:12px;
          background:#cdc186; padding:10px 18px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.12);
        }
        .logos { display:flex; gap:8px; align-items:center; }
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

        main {
          background-color: #57a7e0;
          padding: 36px 20px 56px 20px;
        }
        .container { max-width:1100px; margin:0 auto; }

        .intro-section { display:flex; gap:24px; align-items:center; justify-content:space-between; }
        .intro-text { flex:1 1 520px; color:#042331; }
        .intro-text h2 { font-size:26px; font-weight:800; margin-bottom:8px; color:#032032; }
        .desc { font-size:14px; line-height:1.5; color:#042b3a; margin-bottom:14px; }
        .btn-group { display:flex; gap:11px; margin-bottom:6px; }
        .btn { background:#6e78f7; color:white; padding:8px 14px; border-radius:4px; border:none; cursor:pointer; font-weight:600; }
        .btn.secondary { background:#cfcfff; color:#2b2b8a; }

        .illustration { width:380px; max-width:46%; flex:0 0 380px; }
        .illustration img { width:100%; height:auto; display:block; border-radius:8px; }

        .section-title { color:#06293a; font-weight:700; font-size:18px; margin:30px 0 14px 0; }

        .popular-sports { display:flex; gap:18px; justify-content:center; flex-wrap:wrap; padding:16px 8px; }
        .sport-card {
          background: #ffffffff;
          width:150px; height:160px; border-radius:8px;
          display:flex; flex-direction:column; align-items:center; justify-content:flex-start;
          padding:12px; box-shadow: 0 6px 14px rgba(11,15,20,0.06);
        }
        .sport-inner-circle {
          background:#b7b7a3; width:74px; height:74px; border-radius:50%;
          display:flex; align-items:center; justify-content:center;
          margin-top:8px; font-size:30px;
        }
        .sport-name { margin-top:10px; font-weight:700; font-size:15px; }
        .partner-count { font-size:12px; margin-top:6px; font-weight:600; }

        .testimonial-section {
          background: #a79f9cff;
          padding: 40px 20px;
          text-align:center;
        }
        .testimonial-header { color:#fff; margin-bottom:20px; }
        .testimonial-header h3 { font-size:22px; margin-bottom:8px; }
        .testimonial-header p { opacity:0.9; font-size:14px; color:#ddd; }

        .comment-row { display:flex; align-items:center; justify-content:center; gap:14px; }
        .comment-card {
          background:#fff;
          width:720px;
          max-width: calc(100% - 140px);
          padding: 18px;
          border-radius: 6px;
          box-shadow: 0 6px 16px rgba(0,0,0,0.18);
          display:flex; gap:14px; align-items:flex-start;
        }
        .comment-avatar { width:54px; height:54px; border-radius:50%; background:#d9d9d9;
          display:flex; align-items:center; justify-content:center; font-size:20px; color:#444; font-weight:bold; }
        .comment-body { flex:1; text-align:left; }
        .comment-name { font-weight:800; font-size:15px; margin-bottom:4px; }
        .comment-role { font-size:12px; margin-bottom:6px; color:#666; }
        .comment-text { font-style:italic; font-size:13px; color:#222; line-height:1.4; }
        .comment-stars { margin-left:10px; color:#f4b400; font-size:14px; }

        .nav-btn {
          background:#fff;
          border:none;
          width:40px; height:40px;
          border-radius:6px;
          cursor:pointer;
          font-size:20px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.15);
        }

        @media (max-width: 880px) {
          .intro-section { flex-direction: column; gap:14px; }
          .illustration { width:100%; order:2; }
          .intro-text { order:1; }
          .sport-card { width:140px; height:150px; }
          .comment-card { width:92%; flex-direction:column; }
        }

        .popular-carousel { padding: 20px 0; }
        .popular-carousel .sport-card { transition: transform 0.4s ease, opacity 0.4s ease; }
        .swiper-slide { opacity: 0.6; transform: scale(0.85); }
        .swiper-slide-active { opacity: 1; transform: scale(1.15); }
        .swiper-slide-active .sport-card { transform: scale(1.2); }
      `}</style>

      <header>
        <div className="logos">
          <Image src="/ind.png" alt="ind" width={36} height={36} />
          <Image src="/jateng.png" alt="jateng" width={36} height={36} />
          <Image src="/smg.png" alt="smg" width={36} height={36} />
          <Image src="/logo.png" alt="logo" width={36} height={36} />
        </div>
        <div className="brand" aria-hidden="true">FitTogether</div>
      </header>

      <div className="banner">
        <p>Selamat datang di website kami, semoga anda sehat selalu. salam kasih dari kami — FitTogether Team</p>
      </div>

      <main>
        <div className="container">
          <section className="intro-section">
            <div className="intro-text">
              <h2>Temukan Partner Olahraga Terbaik</h2>
              <p className="desc">
                Yuk! Bergabung dengan komunitas<br />
                Seluruh Cabang Olahraga di Semarang.<br />
                Diri yang sehat bukan hanya menjaga pola makan, tetapi perlu diimbangi dengan olahraga.
              </p>
              <div className="btn-group">
                <button className="btn" onClick={() => router.push("/daftar")}>
                  Daftar Sekarang
                </button>
                <button className="btn secondary" onClick={() => router.push("/login")}>
                  Login
                </button>
              </div>
            </div>
            <div className="illustration">
              <Image src="/illustration.png" alt="illustration" width={380} height={240} />
            </div>
          </section>

          {/* Olahraga Populer */}
          <h3 className="section-title">Olahraga Populer</h3>
          <Swiper
            modules={[Autoplay]}
            slidesPerView={3}
            centeredSlides={true}
            loop={true}
            speed={2500}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            spaceBetween={100}
            className="popular-carousel"
          >
            {popular.map((s, idx) => (
              <SwiperSlide key={idx}>
                <div className="sport-card">
                  <div className="sport-inner-circle">{s.icon}</div>
                  <div className="sport-name">{s.name}</div>
                  <div className="partner-count">{s.count}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </main>

      {/* Testimonial */}
      <section className="testimonial-section">
        <div className="testimonial-header">
          <h3>Apa Kata Mereka??</h3>
          <p>Cerita Sukses dari anggota komunitas FitTogether</p>
        </div>

        <div className="comment-row">
          <button className="nav-btn" onClick={prevTestimonial}>&#x25C0;</button>
          <div className="comment-card">
            <div className="comment-avatar">
              {testimonials[testimonialIndex].name.split(" ").map(w => w[0]).slice(0,2).join("")}
            </div>
            <div className="comment-body">
              <div style={{display:'flex', alignItems:'center', gap:8}}>
                <div className="comment-name">{testimonials[testimonialIndex].name}</div>
                <div className="comment-stars">{"★".repeat(testimonials[testimonialIndex].rating)}</div>
              </div>
              <div className="comment-role">{testimonials[testimonialIndex].role}</div>
              <div className="comment-text">“{testimonials[testimonialIndex].text}”</div>
            </div>
          </div>
          <button className="nav-btn" onClick={nextTestimonial}>&#x25B6;</button>
        </div>
      </section>

      {/* 🎵 Music Player */}
      <MusicPlayer />
    </>
  );
}
