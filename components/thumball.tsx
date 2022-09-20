import { baseUrl } from "@/constants/movie";
import { Movie } from "@/typing";
import Image from "next/image";
import * as React from "react";

interface Props {
  item: Movie;
  refitem: React.RefObject<HTMLDivElement>;
}

export default function Thumball({ item, refitem }: Props) {
  return (
    <div
      ref={refitem}
      key={item.id}
      className="inline-block w-[calc(100%/3)] md:w-[calc(100%/6)] px-1"
    >
      <div className="relative cursor-pointer delay-120 aspect-[16/9] w-full hover:z-30 hover:scale-150 transition-all duration-500">
        <Image
          className="rounded-sm"
          src={`${baseUrl}${item.backdrop_path || item.poster_path}`}
          alt="netflix"
          layout="fill"
          objectFit="cover"
          priority={true}
        />
      </div>
    </div>
  );
}
