// import { JetBrains_Mono as JetBrainsMonoFont } from "next/font/google";
import { Playfair } from "next/font/google";
import "./globals.css";

//Components imports
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const playfair = Playfair({
  subsets: ["latin"], // Should be "latin" instead of "Latin"
  // weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--Playfair",

});

export const metadata = {
  title: "Moiz Ul Haq Portfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={playfair.variable}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
