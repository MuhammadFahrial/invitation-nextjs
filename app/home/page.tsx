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
      <section id="informasi">
        <div className="flex flex-col items-center justify-center py-12 text-black bg-amber-50">
          <h1 className={`mb-8 ${playball.className} text-4xl`}>
            Informasi Acara
          </h1>
          <div className="flex flex-col items-center justify-center md:flex-row gap-12">
            <div className="flex flex-row justify-center items-center w-100 md:w-1/2">
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
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.8248628858596!2d120.37382847405696!3d-3.3928955965817202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d96bb44222ff387%3A0xde22ec82bd984dcc!2sDUA%20PUTRA%20KOMPUTER%20(Servise%20Dan%20Sablon%20Polyflex)!5e0!3m2!1sen!2sid!4v1747708143016!5m2!1sen!2sid"
                // width="400"
                // height="350"
                loading="lazy"
                className="w-84 h-84 rounded-2xl"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className={``}></section>

      {/* Gift */}
      <section id="gift"></section>
    </div>
  );
}
