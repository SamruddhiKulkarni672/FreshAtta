import AboutPage from "@/components/about/AboutPage.jsx";
export default function HomePage() {
  return (
    <div>
      <AboutPage />
    </div>
  );
}

// "use client";

// import MissionValues from "@/components/common/MissionValues";
// import Image from "next/image";

// export default function HomePage() {
//   return (
//     <main className="bg-white text-gray-800  ">
//       {/* Hero Section */}
//       <section className="relative w-full h-[60vh] overflow-hidden">
//         <Image
//           src="/images/about1.png"
//           alt="Farm Background"
//           fill
//           className="object-cover"
//           priority
//         />
//         <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white text-center px-4">
//           <h1 className="text-4xl md:text-5xl font-bold mb-2">
//             Fresh From Farm to Your Table
//           </h1>
//           <p className="text-lg md:text-xl">
//             Connecting Farmers with Consumers Since 2018
//           </p>
//         </div>
//       </section>

//       {/* Our Story Section */}
//       <section className="py-16 px-6 md:px-20  max-w-7xl mx-auto">
//         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
//           <div className="rounded-lg overflow-hidden shadow-lg">
//             <Image
//               src="/images/fruits.webp"
//               alt="Farmers working in field"
//               width={500}
//               height={300}
//               className="object-cover w-full h-auto"
//             />
//           </div>
//           <div>
//             <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
//             <p className="text-gray-700 mb-4">
//               Kisan Basket began with a simple mission: to bridge the gap
//               between local farmers and urban consumers. We believe in providing
//               fresh, quality produce while supporting our farming community.
//             </p>
//             <p className="text-gray-700">
//               Our journey started in a small village market, where we recognized
//               the need for a direct connection between farmers and consumers.
//               Today, we’re proud to serve thousands of customers across multiple
//               cities, maintaining our commitment to quality and sustainability.
//             </p>
//           </div>
//         </div>
//       </section>
//       {/* our values */}
//       <section>
//         <MissionValues />
//       </section>
//     </main>
//   );
// }
