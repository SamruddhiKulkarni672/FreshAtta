// app/layout.tsx or app/layout.js
import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Providers from "./providers";  
import { Toaster } from 'sonner';
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Kisan Basket",
  description: "Your trusted farm-fresh store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} tracking-wide font-sans antialiased bg-white text-black`}
      >
        <Providers>
          <Toaster richColors position="top-right" />
          <Header />
          <main className="max-w-screen-2xl mx-auto">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

// import "./globals.css";
// import { Inter, Poppins } from "next/font/google";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";

// const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
// const poppins = Poppins({
//   subsets: ["latin"],
//   variable: "--font-poppins",
//   weight: ["400", "500", "600", "700"],
// });

// export const metadata = {
//   title: "Kisan Basket",
//   description: "Your trusted farm-fresh store",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body
//         className={`${inter.variable} ${poppins.variable} tracking-wide font-sans antialiased bg-white text-black`}
//       >
//         <Header />
//         <main className=" max-w-screen-2xl mx-auto ">{children}</main>
//         <Footer />
//       </body>
//     </html>
//   );
// }
