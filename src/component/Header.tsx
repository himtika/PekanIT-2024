import { Popover, Tab, Transition } from "@headlessui/react";
import { onAuthStateChanged } from "firebase/auth";
import { Fragment, useState } from "react";
import { IconContext } from "react-icons";
import { BsCardChecklist } from "react-icons/bs";
import { Link as LinkUrl, useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import pekanItIcon from "../assets/PekanIT.png";
import { auth } from "../firebase";
import FAQ from "./FAQ";
import Login from "./Login/Login";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const navigate = useNavigate();
  const [user, setUser] = useState(0);
  const [email, setEmail] = useState<any | null>(null);
  const [colorChange, setColorchange] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const changeNavbarColor = () => {
    if (window.scrollY >= 20) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  const [categories] = useState([
    { value: "Beranda", label: "Beranda", goTo: "hero" },
    { value: "Event", label: "Event", goTo: "event" },
    { value: "Panduan", label: "Panduan", goTo: "panduan" },
    { value: "Jadwal", label: "Jadwal", goTo: "jadwal" },
  ]);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(1);
      setEmail(user.email);
    } else {
      setUser(0);
    }
  });

  // const [scrollPosition, setScrollPosition] = useState(0);

  return (
    <>
      <Popover
        className={`${
          colorChange
            ? "bg-[#30908e] bg-opacity-20 overflow-hidden backdrop-blur-lg"
            : "bg-transparent"
        } sticky top-0 z-30 `}
      >
        <div
          id="header"
          className="max-w-7xl mx-auto py-2 sm:px-6 backdrop-blur-sm"
        >
          <div className="flex justify-between animate-fade-in-2s  items-center py-2 lg:justify-start md:space-x-10">
            <div className="flex  justify-start lg:w-0 lg:flex-1">
              <div className=" whitespace-nowrap inline-flex items-center justify-center py-2  text-base font-medium text-white ">
                <img
                  className="h-10 md:h-12 w-auto sm:h-6 mb-1 ml-3 md:ml-0"
                  src={pekanItIcon}
                  alt="logo pekan it"
                />
                <span id="nama" className="ml-3 text-xl font-bold">
                  Pekan IT
                </span>
              </div>
            </div>
            <div className="-my-2   lg:hidden">
              {user == 1 ? (
                <Popover.Button className="inline-flex items-center justify-center p-2 mr-3">
                  <span className="sr-only">Open menu</span>
                  <LinkUrl to="/dashboard" state={email}>
                    <IconContext.Provider
                      value={{
                        size: "22px",
                        color: "#fff",
                        className: "",
                      }}
                    >
                      <BsCardChecklist />
                    </IconContext.Provider>
                  </LinkUrl>
                </Popover.Button>
              ) : (
                ""
              )}

              <div className="inline-flex items-center justify-center p-2">
                <span className="sr-only">Open menu</span>

                <Login />
              </div>
            </div>

            <div className="hidden lg:flex  items-center  justify-end md:flex-1 lg:w-0">
              {/* selectedIndex={selectedIndex}  */}
              <Tab.Group defaultIndex={0}>
                <Tab.List
                  className={`${
                    colorChange ? "bg-blue-900/20" : "bg-tranparent"
                  } flex items-center transition-all  space-x-1 rounded-xl  p-1`}
                >
                  {categories.map((category) => (
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
                            "w-full rounded-lg py-2.5 text-sm p-5 font-medium leading-5 text-blue-700 transition-all duration-300",
                            "ring-white ring-opacity-60 ring-offset-1 ring-offset-blue-400 focus:outline-none focus:ring-1",
                            selected
                              ? "bg-white/[0.9] shadow"
                              : "text-blue-100  hover:bg-white/[0.12] hover:text-white ",
                          )
                        }
                      >
                        {category.label}
                      </Tab>
                    </Link>
                  ))}
                  {user != 0 ? (
                    <LinkUrl to="/dashboard" state={email}>
                      <Tab
                        className={({ selected }) =>
                          classNames(
                            "w-full rounded-lg py-2.5 text-sm p-5 font-medium leading-5 text-white transition-all duration-300",
                            "",
                            selected
                              ? " ring-0 outline-none"
                              : "text-white  hover:bg-white/[0.12] hover:text-white ",
                          )
                        }
                      >
                        Dashboard
                      </Tab>
                    </LinkUrl>
                  ) : (
                    ""
                  )}
                  {user != 0 ? (
                    <LinkUrl
                      to="https://forms.gle/LMMzFdKxWGjRwAo57"
                      state={email}
                      target="_blank"
                    >
                      <Tab
                        className={({ selected }) =>
                          classNames(
                            "w-full rounded-lg py-2.5 text-sm p-5 font-medium leading-5 text-white transition-all duration-300",
                            "",
                            selected
                              ? " ring-0 outline-none"
                              : "text-white  hover:bg-white/[0.12] hover:text-white ",
                          )
                        }
                      >
                        Daftar Kepanitiaan
                      </Tab>
                    </LinkUrl>
                  ) : (
                    ""
                  )}
                  <Tab
                    className={`w-full rounded-lg py-2.5 text-sm p-5 font-medium leading-5 text-white transition-all duration-300`}
                  >
                    <FAQ obj={"FAQ"} />
                    {/* <LinkUrl to="/pekan-it/hero">FAQ</LinkUrl> */}
                  </Tab>
                  <Login />
                </Tab.List>
              </Tab.Group>
            </div>
          </div>
        </div>
      </Popover>
    </>
  );
}
