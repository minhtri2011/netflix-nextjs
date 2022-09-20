import { Movie } from "@/typing";
import * as React from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import Thumball from "./thumball";

interface IAppProps {
  movies: Movie[];
  title: string;
}

export default function Row({ title, movies }: IAppProps) {
  const [arrMovies, setArrMovies] = React.useState<Movie[]>(movies);
  const [clickTimes, setClickTimes] = React.useState<Number>(0);
  const [transform, setTransform] = React.useState<Number>(0);
  const [items, setItems] = React.useState<Number>(0);
  const [activeBtn, setActiveBtn] = React.useState<boolean>(false);
  // ref
  const rowRef = React.useRef<HTMLDivElement>(null);
  const thumbRef = React.useRef<HTMLDivElement>(null);
  const [isMoved, setMoved] = React.useState(false);
  // delay time
  const delay = 1000;

  const handleClick = (direction: string) => {
    setActiveBtn(true)
    setMoved(true);
    setClickTimes((v) => +v + 1);
    if (direction === "left") {
      setTransform(0);
    } else {
      clickTimes === 0 ? setTransform(-100) : setTransform(-200);
    }
    setTimeout(() => {
      setTransform(-100);
      if (rowRef.current) rowRef.current.style.transition = "none";
      clickTimes !== 0 && handleSpliceArr(direction);
      setActiveBtn(false)
    }, +delay);
    if (rowRef.current)
      rowRef.current.style.transition = "all 1s cubic-bezier(0.4, 0, 0.2, 1)";
  };
  React.useEffect(() => {
    const countItems =
      Number(rowRef.current?.clientWidth) /
      Number(thumbRef.current?.clientWidth);
    setItems(Math.round(countItems));
  }, []);

  const handleSpliceArr = (value: string) => {
    let newArr = [...arrMovies];
    if (value === "right") {
      let firstArr: Movie[] = newArr.splice(0, Number(items));
      newArr = [...newArr, ...firstArr];
    } else {
      let lastArr = newArr.splice(newArr.length - 6, Number(items));
      newArr = [...lastArr, ...newArr];
    }
    setArrMovies(newArr);
  };

  return (
    <div className="my-[3vw] relative overflow-visible">
      <h2 className="sm:px-[60px] text-white sm:text-[1.5vw] font-bold cursor-pointer leading-5 align-bottom inline-block mb-5">
        {title}
      </h2>
      <div className="relative sm:px-[60px] sm:overflow-visible overflow-scroll scrollbar-hide">
        <div
          ref={rowRef}
          className="relative overflow-visible inline-block whitespace-nowrap w-full transition-all duration-1000 ease-in-out"
          style={{
            transform: `translate3d(${transform}%,0,0)`,
          }}
        >
          {arrMovies.map((movie: Movie) => {
            return <Thumball refitem={thumbRef} item={movie} key={movie.id} />;
          })}
        </div>
        <button
          disabled={activeBtn}
          onClick={() => handleClick("left")}
          className={`hidden sm:flex absolute cursor-pointer top-0 bottom-0 left-0 w-[60px] bg-[hsla(0,0%,8%,.5)] z-50 items-center justify-center ${
            isMoved ? "" : "hidden"
          }`}
        >
          <GoChevronLeft className="fill-white text-[30px]" />
        </button>
        <button
          disabled={activeBtn}
          onClick={() => handleClick("right")}
          className="hidden sm:flex absolute cursor-pointer top-0 bottom-0 right-0 w-[60px] bg-[hsla(0,0%,8%,.5)] z-50 items-center justify-center"
        >
          <GoChevronRight className="fill-white text-[30px]" />
        </button>
      </div>
    </div>
  );
}
