"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const Page = () => {
  const [offsetY, setOffsetY] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMouseX(e.clientX);
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    // Set initial values
    setWindowWidth(window.innerWidth);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Calculate horizontal offset based on mouse position
  const offsetX = (mouseX - windowWidth / 2) * 0.1;

  return (
    <div className="flex h-[1000px] bg-[#b8cbdf]">
      <div className="section1 relative flex-1 bg-[url('/images/farmBg2.png')] bg-cover bg-center bg-no-repeat overflow-hidden">
        <h1 className="text-2xl font-bold text-white text-center pt-10">
          Page
        </h1>

        {/* Left Corn Image */}
        <div
          className="absolute left-[-100px] top-1/2 w-[600px] h-[700px]"
          style={{
            transform: `translate3d(${offsetX}px, calc(-50% + ${offsetY * 0.6}px), 0)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <Image
            src="/images/cornL.svg"
            alt="Left Corn"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Right Corn Image */}
        <div
          className="absolute right-[-100px] top-1/2 w-[600px] h-[700px]"
          style={{
            transform: `translate3d(${offsetX * -1}px, calc(-50% + ${offsetY * 0.6}px), 0)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <Image
            src="/images/cornR.svg"
            alt="Right Corn"
            fill
            className="object-contain"
            priority
          />
        </div>

        <div className="text-white mt-4 text-center">Parallax</div>
      </div>
    </div>
  );
};

export default Page;
