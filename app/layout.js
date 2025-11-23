import { IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
// If you install keen-slider, uncomment the next line:
// import "keen-slider/keen-slider.min.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  weight: ["300", "400", "500", "600", "700"], // Add any combination of legal weights as strings

  subsets: ["arabic"],
  variable: "--font-ibm-plex-sans-arabic",
});

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

export const metadata = {
  title:
    "مؤتمت شات - مؤتمـــــــت شات تواصل أسهل لا تضيــــــــع وقتــــــــك، تواصل فــــــــورًا",
  description:
    "منصة موحدة لخدمة العملاء جمعت لك مختلف وسائل التواصل بمكان واحدمن لوحة تحكُّم واحدة!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" data-theme="light">
      <body className={`${ibmPlexSansArabic.variable} antialiased`}>
        <Navbar />
        <main className="min-h-[45vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
