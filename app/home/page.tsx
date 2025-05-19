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
    <div className="overflow-hidden">
      {/* Ucapan */}
      <section
        ref={heroRef}
        id="home"
        className="flex flex-col h-screen justify-center items-center bg-amber-100 text-black bg-cover bg-center"
        // style={{ backgroundImage: "url('/bg-hero.jpg')" }}
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
      <section
        ref={heroRef}
        id="informasi"
        className="flex flex-col h-screen justify-center items-center bg-amber-100 text-black bg-cover bg-center"
        // style={{ backgroundImage: "url('/bg-hero.jpg')" }}
      ></section>

      {/* Gallery */}
      <section id="gallery" className={``}></section>

      {/* Gift */}
      <section id="gift"></section>
    </div>
  );
}
