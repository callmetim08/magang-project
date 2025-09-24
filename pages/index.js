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
      <header className="flex items-center gap-3 bg-[#cdc186] p-4 shadow-md">
        <div className="flex items-center gap-2">
          <Image src="/ind.png" alt="ind" width={36} height={36} />
          <Image src="/jateng.png" alt="jateng" width={36} height={36} />
          <Image src="/smg.png" alt="smg" width={36} height={36} />
          <Image src="/logo.png" alt="logo" width={36} height={36} />
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 font-black italic text-2xl text-[#08121a]">
          FitTogether
        </div>
      </header>

      <div className="bg-white text-black text-sm p-2 overflow-hidden whitespace-nowrap">
        <p className="inline-block animate-[marquee_14s_linear_infinite] [padding-left:100%]">
          Selamat datang di website kami, semoga anda sehat selalu. salam kasih dari kami — FitTogether Team
        </p>
      </div>

      <main className="bg-[#57a7e0] p-10 md:p-14">
        <div className="container mx-auto max-w-6xl">
          <section className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1 text-[#042331] order-2 md:order-1">
              <h2 className="text-2xl md:text-3xl font-extrabold mb-2 text-[#032032]">
                Temukan Partner Olahraga Terbaik
              </h2>
              <p className="text-sm leading-relaxed text-[#042b3a] mb-4">
                Yuk! Bergabung dengan komunitas<br />
                Seluruh Cabang Olahraga di Semarang.<br />
                Diri yang sehat bukan hanya menjaga pola makan, tetapi perlu diimbangi dengan olahraga.
              </p>
              <div className="flex gap-3 mb-2">
                <button
                  className="bg-[#6e78f7] text-white py-2 px-4 rounded font-semibold"
                  onClick={() => router.push("/daftar")}
                >
                  Daftar Sekarang
                </button>
                <button
                  className="bg-[#cfcfff] text-[#2b2b8a] py-2 px-4 rounded font-semibold"
                  onClick={() => router.push("/login")}
                >
                  Login
                </button>
              </div>
            </div>
            <div className="w-full md:w-[380px] md:flex-shrink-0 order-1 md:order-2">
              <Image src="/illustration.png" alt="illustration" width={380} height={240} className="w-full h-auto block rounded-md" />
            </div>
          </section>

          <h3 className="text-[#06293a] font-bold text-xl mt-8 mb-4">
            Olahraga Populer
          </h3>
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
              <SwiperSlide key={idx} className="!w-48 text-center opacity-60 scale-85 transition-all duration-400 [&.swiper-slide-active]:opacity-100 [&.swiper-slide-active]:scale-115">
                <div className="bg-white w-40 h-44 rounded-lg flex flex-col items-center justify-start p-3 shadow-md">
                  <div className="bg-[#b7b7a3] w-20 h-20 rounded-full flex items-center justify-center mt-2 text-3xl">
                    {s.icon}
                  </div>
                  <div className="mt-2 font-bold text-base">{s.name}</div>
                  <div className="text-xs mt-1 font-semibold">{s.count}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </main>

      <section className="bg-[#d7cac5] p-10 text-center -mt-5 rounded-t-lg">
        <div className="text-[#beb7b7] mb-7">
          <h3 className="text-2xl md:text-3xl font-bold mb-2">Apa Kata Mereka??</h3>
          <p className="opacity-90 text-sm text-[#f0f0f0]">Cerita Sukses dari anggota komunitas FitTogether</p>
        </div>

        <div className="flex items-center justify-center flex-wrap gap-4 mt-5">
          <button
            className="w-10 h-10 bg-white border-none rounded-md cursor-pointer text-xl shadow-lg"
            onClick={prevTestimonial}
          >
            &#x25C0;
          </button>
          <div className="bg-white max-w-3xl p-5 rounded-lg shadow-xl flex gap-4 items-start text-left">
            <div className="w-14 h-14 rounded-full bg-[#d9d9d9] flex items-center justify-center text-xl text-gray-700 font-bold">
              {testimonials[testimonialIndex].name.split(" ").map(w => w[0]).slice(0, 2).join("")}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <div className="font-extrabold text-base">{testimonials[testimonialIndex].name}</div>
                <div className="text-[#f4b400] text-sm">{ "★".repeat(testimonials[testimonialIndex].rating)}</div>
              </div>
              <div className="text-xs mb-1 text-gray-500">{testimonials[testimonialIndex].role}</div>
              <div className="italic text-sm text-gray-800 leading-snug">“{testimonials[testimonialIndex].text}”</div>
            </div>
          </div>
          <button
            className="w-10 h-10 bg-white border-none rounded-md cursor-pointer text-xl shadow-lg"
            onClick={nextTestimonial}
          >
            &#x25B6;
          </button>
        </div>
      </section>
      
      <MusicPlayer />
    </>
  );
}