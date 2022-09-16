import { baseUrl } from "@/constants/movie";
import { Movie } from "@/typing";
import Image from "next/image";
import * as React from "react";
import Thumball from "./thumball";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";

interface IAppProps {
  movies: Movie[];
  title: string;
}

export default function Row({ title, movies }: IAppProps) {
  React.useEffect(() => {
    console.log(title, movies);
  }, []);
  return (
    <div className=" my-[3vw] relative">
      <h2 className="text-white text[1.4vw] font-bold cursor-pointer leading-5 align-bottom inline-block mb-3">
        {title}
      </h2>
      <div className="flex overflow-x-visible">
        <Swiper
          spaceBetween={50}
          slidesPerView={6}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          navigation={true}
          modules={[ Navigation]}
        >
          {movies.map((item: Movie) => {
            return (
              <SwiperSlide key={item.id}>
                <Thumball item={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
