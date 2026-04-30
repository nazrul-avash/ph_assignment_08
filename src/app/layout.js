import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight:["500","600"]
});


export const metadata = {
  title: "SunCart – Summer Essentials Store",
  description: "Discover fresh summer essentials at SunCart – from stylish outfits and sunglasses to skincare and beach-ready accessories.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable}  h-full antialiased`}
    >
      <body className="min-h-full  bg-[#FFFBF4]">
        <Navbar></Navbar>
        <main className="max-w-7xl mx-auto">{children} </main>

        <Footer></Footer>
        </body>
    </html>
  );
}
