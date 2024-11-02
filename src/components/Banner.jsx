import React from "react";
import { useTranslation } from "react-i18next";
import BannerVideo from '../assets/videos/BannerVideo.mp4';

const Banner = () => {
  const { t } = useTranslation();

  return (
    <section className="relative h-[100vh] flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: "url('/path/to/image.jpg')" }}>
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover">
          <source src={BannerVideo} type="video/mp4" />
        </video>
      </div>
      <div className="relative text-[#902923] p-4">
        <h1 className="text-4xl md:text-6xl font-bold">
          {t('banner.welcome')}
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          {t('banner.p')}
        </p>
      </div>
    </section>
  );
};

export default Banner;
