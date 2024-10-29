// src/components/Banner.jsx
import React from "react";
import { useTranslation, Trans } from "react-i18next";

const Banner = () => {
    //Translate
    const { t } = useTranslation()

  return (
    <section className="relative h-[100vh] flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: "url('/path/to/image.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-white p-4">
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
