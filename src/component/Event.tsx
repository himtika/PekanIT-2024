import doIt from "../assets/doit.png";
import dies from "../assets/dies.png";
import { Link } from "react-scroll";

export default function Event() {
  return (
    <>
      <div
        id="event"
        className="grid px-3 content-center justify-center text-white pb-12 mt-40 md:mt-3 "
      >
        <div className="text-center mt-5">
          <p className="text-3xl font-bold mt-3">3 Events</p>

          <p className="text-lg text-cyan-400">
            There are 3 events managed by Pekan IT
          </p>
        </div>

        <div className="grid max-w-5xl md:grid-cols-3 sm:grid-cols-1 mt-12 gap-5 content-center justify-center">
          {/* <LinkUrl to="/pekan-it/webinar"> */}
          <div
            onClick={() => {
              // navigate("/pekan-it/webinar");
              return alert("Comingsoon");
            }}
            className="grid h-max-content cursor-pointer md:mt-0 sm:mt-8 px-3 border-2 border-blue-700 border-dotted py-3 bg-[#219eeb] bg-opacity-30  rounded-lg"
          >
            <div className="mx-auto">
              <img src={dies} />
            </div>
            <div className="mx-auto text-xl font-bold mt-3">Seminar</div>
            <div className="text-center mt-2">
              <span>Seminar pada acara Pekan IT kali ini </span>
              <br />

              <span className="">
                membawakan tema{" "}
                <span className="italic">
                  "Sparking Innovators: Developing students creativity and ambitious goals."
                </span>
              </span>
            </div>
          </div>
          {/* </LinkUrl> */}
          <Link to="panduan" duration={800} smooth={true} offset={-85}>
            <div className="grid h-max-content cursor-pointer  md:mt-0 sm:mt-8 px-3 border-2 border-blue-700 border-dotted py-3 bg-[#219eeb] bg-opacity-30  rounded-lg">
              <div className="mx-auto">
                <img src={doIt} />
              </div>
              <div className="mx-auto text-xl font-bold mt-3">
                IT Competition
              </div>
              <div className="text-center mt-2">
                <span>Perlombaan Nasional dibidang </span>
                <br />
                <span className="">
                  teknologi yang terbuka bagi Mahasiswa aktif / Umum.
                </span>
              </div>
            </div>
          </Link>
          {/* <LinkUrl to="/pekan-it/workshop"> */}
          <div
            onClick={() => {
              // navigate("/pekan-it/workshop");
              return alert("Comingsoon");
            }}
            className="grid h-max-content cursor-pointer  md:mt-0 sm:mt-8 px-3 border-2 border-blue-700 border-dotted py-3 bg-[#219eeb] bg-opacity-30  rounded-lg"
          >
            <div className="mx-auto">
              <img src={dies} />
            </div>
            <div className="mx-auto text-xl font-bold mt-3">Workshop</div>
            <div className="text-center mt-2">
              <span>Workshop pada acara Pekan IT tahun ini </span>
              <br />

              <span className="italic">bertema tentang "Mobile Innovation: Shaping the Future of Connectivity".</span>
            </div>
          </div>
          {/* </LinkUrl> */}
        </div>
      </div>
    </>
  );
}
