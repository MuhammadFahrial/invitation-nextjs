"use client";

import Image from "next/image";
import { crimsonText, playball } from "@/app/components/ui/fonts";
import { useRef } from "react";
import { TimelineContent } from "@/app/components/ui/framer-timeline";
import type { Variants } from "motion/react";

export default function Home() {
  const heroRef = useRef(null);

  // Subtle reveal animation
  const revealVariants: Variants = {
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
    hidden: {
      opacity: 0,
      y: 15,
    },
  };

  return (
    <div className="box-border overflow-hidden">
      {/* Ucapan */}
      <section
        ref={heroRef}
        id="home"
        className="flex flex-col h-screen justify-center items-center bg-amber-100 text-black bg-cover bg-center "
        style={{ backgroundImage: "url('/bg-heroo.jpg')" }}
      >
        <TimelineContent
          as="div"
          animationNum={0}
          timelineRef={heroRef}
          customVariants={revealVariants}
        >
          <Image
            src={"/bismillahirahmanirrahim.png"}
            alt="Bismillah"
            width={300}
            height={300}
          />
        </TimelineContent>

        <TimelineContent
          as="p"
          animationNum={1}
          timelineRef={heroRef}
          className={`text-center my-8 ${crimsonText.className} px-6 lg:w-1/2`}
        >
          Puji Syukur kami panjatkan kehadirat Allah SWT atas limpahan rahmat
          dan karunia-Nya, Telah lahir anak kami yang bernama :
        </TimelineContent>

        <TimelineContent
          as="h1"
          animationNum={2}
          timelineRef={heroRef}
          className={`text-center ${playball.className} text-3xl`}
        >
          Aurora Xaviera Putri Akbar
        </TimelineContent>

        <TimelineContent
          as="div"
          animationNum={2}
          timelineRef={heroRef}
          customVariants={revealVariants}
        >
          <Image
            src={"/photo.jpg"}
            alt="photo"
            width={100}
            height={100}
            className="rounded-full my-4 "
          />
        </TimelineContent>

        <TimelineContent
          as="h3"
          animationNum={2}
          timelineRef={heroRef}
          className={` text-center ${playball.className}`}
        >
          Lahir pada: Minggu, 18 Maret 2025
        </TimelineContent>

        <TimelineContent
          as="p"
          animationNum={3}
          timelineRef={heroRef}
          className={`text-center my-8 ${crimsonText.className} px-6 lg:w-1/2`}
        >
          Sebagai bentuk ungkapan syukur kepada Allah SWT atas kelahiran Putri
          kami, kami keluarga besar mengundang bapak/ibu/saudara(i) untuk hadir
          di acara Aqiqah anak kami.
        </TimelineContent>
      </section>

      {/* Informasi Acara */}
      <section id="informasi ">
        <div className="flex flex-col items-center justify-center py-18 text-black bg-[#fff] ">
          <h1 className={`mb-8 ${playball.className} text-4xl text-[#b68f5f]`}>
            Informasi Acara
          </h1>

          <div className="flex flex-col justify-center items-center mb-6">
            <div className="flex gap-4 items-center justify-center">
              <p className={`text-xl ${crimsonText.className}`}>Senin</p>
              <p
                className={`text-4xl border-l-1 border-r-1 px-4 border-[#b68f5f] text-[#b68f5f] ${crimsonText.className}`}
              >
                24
              </p>
              <p className={`text-xl ${crimsonText.className}`}>Juni</p>
            </div>
            <p className={`text-xl ml-3 mt-2 ${crimsonText.className}`}>2025</p>
            <p className={`text-[18px] mt-4 ${crimsonText.className}`}>
              Jam : 10.00 WITA - Selesai
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-12">
            <div className="flex flex-row justify-center items-center w-100">
              <Image
                src={"/map.png"}
                alt="map"
                width={60}
                height={10}
                className="w-10 h-10 mr-4 hidden md:block"
              />
              <h1
                className={`text-center ${crimsonText.className} text-xl md:text-left`}
              >
                Jalan Salla Desa No.48, Belopa, Kec. Belopa, Kabupaten Luwu,
                Sulawesi Selatan 91994
              </h1>
            </div>
            <div>
              <div
                className="flex bg-[#b68f5f] py-3 px-4 rounded text-white 
                 hover:bg-[#b68f5f]/60 hover:text-black/90  duration-300 text-sm "
              >
                <a
                  href="https://maps.app.goo.gl/ti63oR3HggKa68Yu6"
                  className="flex items-center justify-center "
                >
                  <Image
                    src={"/location.png"}
                    alt="location"
                    width={20}
                    height={15}
                    className="mr-1"
                  />
                  <p>Open Maps</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section
        id="gallery"
        className="flex flex-col h-screen justify-center items-center bg-amber-100 text-black bg-cover bg-center "
        style={{ backgroundImage: "url('/bg-heroo.jpg')" }}
      >
        <div>
          <h1>Gallery</h1>
        </div>
      </section>

      {/* Gift */}
      <section id="gift"></section>
    </div>
  );
}
