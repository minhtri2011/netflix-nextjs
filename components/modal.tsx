import { modalState, movieState } from "@/atoms/modalAtom";
import MuiModal from "@mui/material/Modal";
import { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";
import { GrFormClose } from "react-icons/gr";
import { MdCheckCircleOutline } from "react-icons/md";
import ReactPlayer from "react-player";
import { useRecoilState } from "recoil";
import { Element, Genre } from "../typing";
import {HiOutlineThumbUp} from 'react-icons/hi'
import {IoMdClose} from 'react-icons/io'
import {BsFillVolumeMuteFill,BsFillVolumeDownFill} from 'react-icons/bs'
type Props = {};

const Modal = (props: Props) => {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [movie, setMovie] = useRecoilState(movieState);
  const [data, setData] = useState();
  const [genres, setGenres] = useState<Genre[]>([]);
  const [trailer, setTrailer] = useState("");
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    if (!movie) return;

    async function fetchMovie() {
      const data = await fetch(
        `https://api.themoviedb.org/3/${
          movie?.media_type === "tv" ? "tv" : "movie"
        }/${movie?.id}?api_key=${
          process.env.NEXT_PUBLIC_API_KEY
        }&language=en-US&append_to_response=videos`
      )
        .then((res) => res.json())
        .catch((err) => console.log(err.message));

      if (data?.videos) {
        const index = data.videos.results.findIndex(
          (element: Element) => element.type === "Trailer"
        );
        setTrailer(data.videos?.results[index]?.key);
      }
      if (data?.genres) {
        setGenres(data.genres);
      }
    }
    fetchMovie();
  }, [movie]);

  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <MuiModal open={showModal} onClose={handleClose}
    className="fixed !top-7 !bottom-7 left-0 right-0 z-50 mx-auto w-full max-w-5xl overflow-hidden overflow-y-scroll rounded-md scrollbar-hide"
    >
      <>
        <button onClick={handleClose} className="absolute z-20 top-3 right-3">
          <IoMdClose className="fill-white w-7 h-7" />
        </button>
        <div className="relative pt-[56.25%]">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${trailer}`}
            width="100%"
            height="100%"
            playing
            muted={muted}
            style={{ position: "absolute", top: "0", left: "0" }}
          />
          <div className="absolute bottom-10 flex w-full items-center justify-between px-10">
            <div className="flex space-x-2">
              <button className="flex items-center gap-x-2 rounded bg-white px-8 text-xl font-bold text-black transition hover:bg-[#e6e6e6]">
                <FaPlay className="h-5 w-5 text-black" />
                Play
              </button>
              {/* <MdCheckCircleOutline className="h-7 w-7 p-1 fill-white border-[1px] border-white rounded-full" /> */}
              <AiOutlinePlus className="h-7 w-7 p-1 fill-white border-[1px] border-white rounded-full" />
              {/* <button className="modalButton" onClick={handleList}>
                {addedToList ? (
                ) : (
                )}
              </button> */}
              <button className="modalButton">
                <HiOutlineThumbUp className="h-7 w-7 p-1 fill-white border-[1px] border-white rounded-full" />
              </button>
            </div>
            <button className="modalButton" onClick={() => setMuted(!muted)}>
              {muted ? (
                <BsFillVolumeMuteFill className="h-7 w-7 p-1 fill-white border-[1px] border-white rounded-full" />
              ) : (
                <BsFillVolumeDownFill className="h-7 w-7 p-1 fill-white border-[1px] border-white rounded-full" />
              )}
            </button>
          </div>
        </div>
        <div className="flex space-x-16 rounded-b-md bg-[#181818] px-10 py-8 text-white">
          <div className="space-y-6 text-lg">
            <div className="flex items-center space-x-2 text-sm">
              <p className="font-semibold text-green-400">
                {movie!.vote_average * 10}% Match
              </p>
              <p className="font-light">
                {movie?.release_date || movie?.first_air_date}
              </p>
              <div className="flex h-4 items-center justify-center rounded border border-white/40 px-1.5 text-xs">
                HD
              </div>
            </div>
            <div className="flex flex-col gap-x-10 gap-y-4 font-light md:flex-row">
              <p className="w-5/6">{movie?.overview}</p>
              <div className="flex flex-col space-y-3 text-sm">
                <div>
                  <span className="text-[gray]">Genres:</span>{' '}
                  {genres.map((genre) => genre.name).join(', ')}
                </div>

                <div>
                  <span className="text-[gray]">Original language:</span>{' '}
                  {movie?.original_language}
                </div>

                <div>
                  <span className="text-[gray]">Total votes:</span>{' '}
                  {movie?.vote_count}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </MuiModal>
  );
};

export default Modal;
