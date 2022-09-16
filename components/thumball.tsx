import { baseUrl } from "@/constants/movie";
import { Movie } from "@/typing";
import Image from "next/image";
import * as React from "react";

interface Props {
  item: Movie;
}

export default function Thumball({ item }: Props) {
  return (
    <div
      key={item.id}
      className=" relative w-full cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-[120%] delay-120 hover:z-10"
    >
      <Image
        className="rounded-sm"
        src={`${baseUrl}${item.backdrop_path || item.poster_path}`}
        alt="netflix"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
}
