import { Crimson_Text, Playball } from "next/font/google";

export const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-crimson-text",
});

export const playball = Playball({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-playball",
});
