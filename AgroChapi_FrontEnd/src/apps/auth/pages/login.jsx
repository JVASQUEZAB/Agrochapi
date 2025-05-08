import React, { useEffect, useState } from "react";
import LoginBox from "../components/loginbox";

const images = ["/BG1.png", "/BG2.png"];

const Login = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-screen w-full relative overflow-hidden">
      <div
        className="hidden md:block absolute left-0 top-0 h-full w-full transition-all duration-700 ease-in-out"
        style={{
          backgroundImage: `url(${images[currentImage]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
        }}
      />
      <div className="hidden md:block absolute top-0 left-0 w-full h-full bg-black opacity-30 z-10" />
      <div className="relative z-20 w-full md:w-[400px] h-full flex items-start justify-center bg-[#382D3A] md:bg-[#382D3A99] md:backdrop-blur-md md:shadow-xl md:ml-auto">
        <LoginBox />
      </div>
    </div>
  );
};

export default Login;
