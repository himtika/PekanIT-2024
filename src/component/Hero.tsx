import { Link } from "react-router-dom";
import bg from "../assets/Bghero.png";

export default function Hero() {
  return (
    <>
      <div
        id="hero"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${bg})`,
        }}
        // className="flex xl:h-[86vh] md:h-[95vh] sm:h-[65vh] lg:h-[95vh] text-white"
        className="flex h-screen text-white items-center px-3"
      >
        <div className="xl:m-auto lg:m-auto md:m-auto sm:my-[4vh]">
          <div className="lg:text-5xl animate-fade-in-2.5s sm:text-4xl text-xl whitespace-normal sm:px-5 text-center font-bold ">
            <p className="">Open Recruitment </p>
            {/* <hr className="w-[80%] mx-auto my-3 lg:hidden bg-white" /> */}
            <p className="mt-1 lg:mt-5 text-xl  lg:text-5xl sm:text-4xl">
              Kepanitiaan Diesnatalis dan Pekan-IT 2024
            </p>
          </div>

          <div className="xl:text-center sm:mt-7 animate-fade-in-2.5s sm:text-justify break-words max-w-2xl text-center px-5 sm:text-sm md:text-lg mx-auto mt-5 ">
            <p>
              Pekan IT merupakan kegiatan edukasi dan kompetisi IT secara
              terbuka. Ada tiga jenis agenda pada Pekan IT yaitu keilmuan
              melalui seminar yang bernama “TECH TALK”, workshop dan kompetisi
              atau perlombaan bidang Informatika.
            </p>

            <hr className="mt-3 border-white" />

            <p className="mt-5">
              Diesnatalis merupakan rangkaian acara dalam memperingati
              berdirinya organisasi HIMTIKA, dan bertujuan untuk mempererat
              hubungan tali silaturahmi antar Pengurus dan Anggota HIMTIKA.
            </p>
          </div>
          <div className="xl:text-center animate-fade-in-2.5s sm:mb-5 sm:text-justify break-words max-w-2xl lg:text-center md:text-center px-5 sm:text-sm md:text-lg mx-auto mt-3 flex justify-center">
            <br />
            <Link
              to="https://forms.gle/LMMzFdKxWGjRwAo57"
              className="lg:hidden"
            >
              <button className=" bg-cyan-500  transition-all py-4 px-10 rounded-lg md:w-auto sm:w-full text-white font-semibold">
                Daftar Sekarang!
              </button>
            </Link>
            <Link
              to="https://forms.gle/LMMzFdKxWGjRwAo57"
              target="_blank"
              className="lg:block hidden"
            >
              <button className=" bg-cyan-500 hover:bg-cyan-300 py-4 px-10 rounded-lg md:w-auto sm:w-full text-white font-semibold">
                Daftar Sekarang!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
