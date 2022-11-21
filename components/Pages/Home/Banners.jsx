import React from "react";
import Image from "next/image";
import css from "./css/style.module.css";
import roomMakeOverBanner from "images/banner/online-shopping-on.jpg";

const Banners = () => {
  return (
    <>
      <section className="room-make-over-banner bg-white">
        <div className="relative h-[200px]">
          <Image
            src={roomMakeOverBanner}
            alt="room-make-over-banner"
            layout="fill"
            objectFit="cover"
            objectPosition={"center"}
          />
          <button className={css.changeBtn}>Change</button>
        </div>

        <div className="videos-links my-6">
          <article className="grid md:grid-cols-3">
            <div className="relative border">
              <video controls muted loop>
                <source src={"/30-Sec-Water-Commercial.mp4"} type="video/mp4" />
              </video>
            </div>
            <div className="grid md:grid-cols-2">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div></div>
          </article>
        </div>
      </section>
    </>
  );
};

export default Banners;
