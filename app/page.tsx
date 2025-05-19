import Image from "next/image";
import Link from "next/link";
import { crimsonText, playball } from "./components/ui/fonts";
import Countdown from "./components/ui/countdown";

export default function Home() {
  return (
    <div
      className="flex flex-col justify-center items-center h-screen bg-cover bg-center text-black"
      style={{ backgroundImage: "url('/bg-hero.jpg')" }}
    >
      <div>
        <h2 className={`text-center my-8 ${crimsonText.className}`}>
          Kami Mengundang Anda ke Acara Haqiqah
        </h2>
        <h1 className={`text-center my-8 ${playball.className} text-3xl`}>
          Aurora Xaviera Putri Akbar
        </h1>
        <h2 className={`text-center my-8 ${crimsonText.className}`}>
          Acara dimulai dalam :
        </h2>

        {/* Countdown */}
        <div className="flex flex-row justify-center items-center">
          <Countdown targetDate="2025-06-18T00:00:00" />
        </div>

        {/* Button Lihat Undangan */}
        <div className="mt-8 flex justify-center items-center">
          <Link
            href={"/home"}
            className="bg-amber-100 p-4 rounded-lg cursor-pointer"
          >
            Lihat Undangan
          </Link>
        </div>
      </div>
    </div>
  );
}
