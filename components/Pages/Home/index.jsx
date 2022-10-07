import React from "react";
import Link from "next/link";
import Image from "next/image";
import css from "./css/style.module.css";

import sliderimage from "images/sliderimages/chair-removebg.png";
import bed from "images/home/bed.jpg";
import ideas from "images/home/ideas.jpg";
import category from "images/home/category.jpg";
import vase from "images/home/vase.jpg";
import another from "images/home/another.jpg";
import shop from "images/home/shop.jpg";
import Slider from "react-slick";
import DefaultImage from "components/DefaultImage";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoading: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1500,
    cssEase: "linear",
    // arrows: true,
    // prevArrow: <PrevArrow />,
    // nextArrow: <NextArrow />,
  };
  return (
    <>
      <h1 className="mx-6 my-8 font-bold text-xl">Home Page</h1>
      <section className="mx-6 p-4 bg-white rounded-lg grid grid-cols-2 gap-6">
        <div className="col-span-1 grid grid-cols-3 gap-4">
          <div className="col-span-1 flex flex-col gap-4">
            <div
              // onClick={() => router.push("/category")}
              className={`h-44 relative rounded-2xl overflow-hidden ${css.image__div}`}
            >
              <div className={css.home__text}>CATEGORY</div>
              <Image
                src={category}
                alt="images"
                layout="fill"
                objectFit="cover"
                className={css.images}
              />
            </div>
            <div
              // onClick={() => router.push("/shop?category=vase")}
              className={`h-44 relative rounded-2xl overflow-hidden ${css.image__div}`}
            >
              <div className={css.home__text}>VASE</div>
              <Image
                src={vase}
                alt="images"
                layout="fill"
                objectFit="cover"
                className={css.images}
              />
            </div>
          </div>

          <div className="col-span-1">
            <div
              // onClick={() => router.push("/ideas")}
              className={`h-full w-full relative rounded-2xl overflow-hidden ${css.image__div}`}
            >
              <div className={css.home__text}>IDEAS</div>
              <Image
                src={ideas}
                alt="images"
                layout="fill"
                objectFit="cover"
                className={css.images}
              />
            </div>
          </div>

          <div className="col-span-1 flex flex-col gap-4">
            <div
              // onClick={() => router.push("/shop")}
              className={`h-44 relative rounded-2xl overflow-hidden ${css.image__div}`}
            >
              <div className={css.home__text}>SHOP</div>
              <Image
                src={shop}
                alt="images"
                layout="fill"
                objectFit="cover"
                className={css.images}
              />
            </div>
            <div
              // onClick={() => router.push("/shop?category=another")}
              className={`h-44 relative rounded-2xl overflow-hidden ${css.image__div}`}
            >
              <div className={css.home__text}>ANOTHER</div>
              <Image
                src={another}
                alt="images"
                layout="fill"
                objectFit="cover"
                className={css.images}
              />
            </div>
          </div>

          <div className="col-span-3">
            <div
              // onClick={() => router.push("/shop?category=bed")}
              className={`h-36 relative rounded-2xl overflow-hidden ${css.image__div}`}
            >
              <div className={` ${css.home__text}`}>
                <span className="text-lg">BED</span>
              </div>
              <Image
                src={bed}
                alt="images"
                layout="fill"
                objectFit="cover"
                className={css.images}
              />
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <Slider {...settings}>
            <div className="relative h-full rounded-2xl overflow-hidden">
              <DefaultImage src={sliderimage} alt="slider-images" />
            </div>
            <div className="relative h-full rounded-2xl overflow-hidden">
              <Image src={sliderimage} alt="slider-images" />
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Home;
