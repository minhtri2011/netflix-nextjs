import { baseUrl } from "@/constants/movie";
import { Movie } from "@/typing";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";

interface Props {
  netflixOriginals: Movie[];
}

const Banner = ({ netflixOriginals }: Props) => {
  const [movie, setMovie] = useState<Movie | null>(null);
  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, [netflixOriginals]);

  return (
    <div className="h-screen md:h-auto relative aspect-auto md:aspect-[32/15]">
      <div className="absolute inset-0 z-[-1]">
        <Image
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          alt="netflix"
          layout="fill"
          objectFit="cover"
          priority={false}
        />
      </div>
      <div className="absolute inset-0 md:bottom-0 md:left-0 md:top-0 md:right-[26.09%]  gradient-to-r-black-transparent"></div>
      <div className="absolute md:left-[60px] top-1/2 translate-y-[-50%] translate-x-[-50%] md:translate-x-[0%] w-full left-1/2 md:w-[36%] text-white bg-[linear-gradient(77deg,rgba(0,0,0,.6),transparent 85%)]">
        <h1 className="text-2xl mb-[1.3vw] md:text-left text-center ">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <p className="hidden lg:block">{movie?.overview}</p>
        <div className="flex mt-[1.5vw] md:justify-start justify-center ">
          <button className="cursor-pointer mr-2 rounded-md flex items-center justify-center bg-white text-black py-2 px-8 font-bold">
            <FaPlay className="mr-2" />
            <span>Play</span>
          </button>
          <button className="cursor-pointer rounded-md flex items-center justify-center bg-gray-500/[0.3] text-white py-2 px-8 font-bold">
            <AiOutlineInfoCircle className="mr-2" />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
