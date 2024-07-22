import BankAladin from "../assets/medpart_sponsor/bankAladin.png";
import FrisianFlag from "../assets/medpart_sponsor/FrisianFlag.png";
import GDSCUnsika from "../assets/medpart_sponsor/GDSCUnsika.png";
import CreativePartner from "../assets/medpart_sponsor/creativePartner.jpeg";
import sukaCode from "../assets/medpart_sponsor/sukacode.png";
import HMIT from "../assets/medpart_sponsor/HMITITS.png";

const MediaPartner = () => {
  return (
    <div className=" sm:pb-24 md:pb-8">
      <div className="grid content-center px-4 mt-12 md:justify-center text-white">
        <div className="grid sm:grid-cols-2 px-8 py-4 md:grid-cols-4 bg-[#fff] place-items-center items-center grid-flow-row rounded-xl  gap-6 max-w-5xl">
          <div className="md:col-span-4 sm:col-span-2">
            <p className="text-3xl text-black mb-6 text-center font-medium">
              Thanks to{" "}
              <span className="font-bold text-blue-700">
                our Sponsor & Media partners
              </span>
            </p>
          </div>
          <img
            src={FrisianFlag}
            title="Frisian Flag"
            alt=""
            className="md:w-32 sm:w-16"
          />
          <img
            src={BankAladin}
            alt=""
            title="Bank Aladin"
            className="md:w-40 sm:w-18"
          />
          <img
            src={CreativePartner}
            alt=""
            title="Creative Partner"
            className=" w-64"
          />
          <img src={GDSCUnsika} alt="" title="GDSC UNSIKA" className="w-72" />
          {/* <img
            src={PERMIKOMNAS}
            alt=""
            title="Permikomnas"
            className=" sm:w-24 md:w-36"
          /> */}
          <img src={HMIT} alt="" title="HMIT ITS" className="md:w-40 sm:w-28" />
          <img
            src={sukaCode}
            alt=""
            title="SukaCode"
            className=" md:w-32 sm:w-24"
          />
        </div>
      </div>
    </div>
  );
};

export default MediaPartner;
