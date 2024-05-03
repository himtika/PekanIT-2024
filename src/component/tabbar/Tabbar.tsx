import { useState } from "react";
import { Tab } from "@headlessui/react";
import { Link } from "react-scroll";
import { Link as LinkRoute } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { IconContext } from "react-icons";
import { GoBook } from "react-icons/go";
import { IoIosPeople } from "react-icons/io";
import { FaQuestion } from "react-icons/fa";
import { VscCalendar } from "react-icons/vsc";
import { MdOutlineEmojiEvents } from "react-icons/md";
import FAQ from "../FAQ";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Tabbar() {
  const [categories] = useState([
    {
      value: "Beranda",
      goTo: "hero",
    },
    {
      value: "event",
      goTo: "event",
    },
    {
      value: "Panduan",
      goTo: "panduan",
    },
    {
      value: "Jadwal",
      goTo: "jadwal",
    },
    // { value: "FAQ", label: "FAQ", goTo: "haha" },
  ]);

  const icons = [AiOutlineHome, MdOutlineEmojiEvents, GoBook, VscCalendar];

  return (
    <div className="w-full px-3 items-stretch z-30 lg:hidden fixed bottom-0">
      <Tab.Group defaultIndex={0}>
        <Tab.List
          className={`grid grid-cols-6 rounded-xl  p-3 bg-[#30908e] bg-opacity-20 backdrop-blur-xl`}
        >
          {categories.map((category, idx) => {
            // must be a capitalized name in order for react to treat it as a component
            const Icon = icons[idx];

            return (
              <Link
                key={category.value}
                to={category.goTo}
                duration={800}
                smooth={true}
                offset={-85}
              >
                <Tab
                  key={category.value}
                  className={({ selected }) =>
                    classNames(
                      "w-full rounded-lg py-3 text-sm flex justify-center items-center font-medium leading-5 text-blue-700",
                      "ring-white ring-opacity-60 ring-offset-1 ring-offset-blue-400 focus:outline-none focus:ring-1",
                      selected
                        ? "bg-white/[0.9] shadow "
                        : "text-blue-100  hover:bg-white/[0.12] hover:text-white ",
                    )
                  }
                >
                  <IconContext.Provider
                    value={{
                      color: "#5CCFEE",
                      size: "22px",
                      className: "",
                    }}
                  >
                    <Icon />
                  </IconContext.Provider>
                </Tab>
              </Link>
            );
          })}
          <Tab
            className={`w-full rounded-lg py-3 text-sm flex justify-center items-center font-medium leading-5 text-blue-700 `}
          >
            <IconContext.Provider
              value={{
                color: "#5CCFEE",
                size: "30px",
                className: "",
              }}
            >
              <LinkRoute to="https://forms.gle/LMMzFdKxWGjRwAo57">
                <IoIosPeople />
              </LinkRoute>
            </IconContext.Provider>
          </Tab>
          <Tab
            className={`w-full rounded-lg py-3 text-sm flex justify-center items-center font-medium leading-5 text-blue-700 `}
          >
            <IconContext.Provider
              value={{
                color: "#5CCFEE",
                size: "22px",
                className: "",
              }}
            >
              <FAQ obj={<FaQuestion />} />
            </IconContext.Provider>
          </Tab>
        </Tab.List>
      </Tab.Group>
    </div>
  );
}
