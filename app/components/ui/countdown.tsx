"use client"; // jika kamu pakai Next.js App Router

import { useEffect, useState } from "react";

export default function Countdown({ targetDate }: { targetDate: string }) {
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const distance = new Date(targetDate).getTime() - now;

    if (distance <= 0) {
      return { expired: true };
    }

    return {
      expired: false,
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (timeLeft.expired) {
    return (
      <div className="text-center p-8 bg-amber-50">
        <h2 className="text-3xl font-semibold">Acara telah dimulai!</h2>
      </div>
    );
  }

  return (
    <section>
      <div className="flex gap-4 text-2xl font-mono">
        <div className="flex flex-col items-center">
          <span>{String(timeLeft.days).padStart(2, "0")}</span>
          <div className="text-sm">Hari</div>
        </div>
        <div className="flex flex-col items-center">
          <span>{String(timeLeft.hours).padStart(2, "0")}</span>
          <div className="text-sm">Jam</div>
        </div>
        <div className="flex flex-col items-center">
          <span>{String(timeLeft.minutes).padStart(2, "0")}</span>
          <div className="text-sm">Menit</div>
        </div>
        <div className="flex flex-col items-center">
          <span>{String(timeLeft.seconds).padStart(2, "0")}</span>
          <div className="text-sm">Detik</div>
        </div>
      </div>
    </section>
  );
}
