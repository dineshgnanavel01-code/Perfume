
import { useState } from "react";
import {  Heart, Menu, Search, ShoppingBag, User, X, Sparkles,} from "lucide-react";
import {motion, AnimatePresence,} from "framer-motion";

import { Link, useNavigate } from "react-router-dom";

const links = [
  ["Home", "#home"],
  ["Perfumes", "#perfumes"],
  ["Collections", "#collections"],
  ["About", "#about"],
  ["Contact", "#contact"],
];

export default function Navbar({ cartCount = 0 }) {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);


  const closeAll = () => {
    setMenuOpen(false);
    setSearchOpen(false);
    setProfileOpen(false);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleSectionClick = (href) => {
    closeAll();

    const id = href.replace("#", "");

    if (window.location.pathname === "/") {
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      return;
    }

    navigate(`/${href}`);

    setTimeout(() => {
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50">

      <motion.div
        initial={{
          opacity: 0,
          y: -20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="border-b border-white/30 bg-[#f7f3ed]/85 shadow-[0_8px_40px_rgba(23,21,19,0.08)] backdrop-blur-2xl"
      >

        <div className="mx-auto flex h-20 max-w-full items-center justify-between px-5 sm:px-8 lg:px-12">

      
          <Link
            to="/"
            onClick={closeAll}
            className="group relative flex items-center gap-3"
          >


            <motion.div
              whileHover={{
                scale: 1.08,
                rotate: 6,
              }}
              whileTap={{
                scale: 0.96,
              }}
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 16,
              }}
              className="relative flex h-12 w-12 items-center justify-center"
            >


              <motion.span
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 rounded-full border border-dashed border-[#b18a45]/40"
              />


              <span className="absolute inset-[3px] rounded-full border border-[#b18a45]/70 bg-gradient-to-br from-[#fff9ec] via-[#f1dfba] to-[#b18a45]/30 shadow-[0_4px_20px_rgba(177,138,69,0.18)] transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(177,138,69,0.45)]" />

              <span className="absolute inset-[7px] rounded-full bg-[#171513] shadow-inner transition-all duration-500 group-hover:bg-[#241c12]" />

              <span className="absolute inset-[10px] rounded-full border border-[#c6a15b]/40" />

              <span className="relative z-10 translate-y-[-1px] font-serif text-[21px] italic text-[#d6b46c] drop-shadow-[0_0_8px_rgba(198,161,91,0.35)]">
                É
              </span>

              <motion.span
                animate={{
                  scale: [0.8, 1.2, 0.8],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-0.5 -top-0.5 z-20 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#c6a15b] shadow-[0_0_14px_#c6a15b]"
              >
                <span className="h-1 w-1 rounded-full bg-white" />
              </motion.span>

              <span className="absolute -bottom-0.5 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#b18a45] opacity-0 shadow-[0_0_10px_#b18a45] transition-all duration-500 group-hover:opacity-100" />

              <span className="absolute inset-[-8px] -z-10 rounded-full bg-[#c6a15b]/10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

            </motion.div>


            <div className="relative">

              <motion.div
                whileHover={{
                  letterSpacing: "0.26em",
                }}
                transition={{
                  duration: 0.45,
                }}
                className="font-serif text-xl font-medium tracking-[0.18em] text-[#171513] sm:text-2xl"
              >
                ÉLIXIRÉ
              </motion.div>

              <div className="relative mt-1 h-[1px] w-0 overflow-hidden bg-[#b18a45] transition-all duration-500 group-hover:w-full">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent" />
              </div>

              <p className="mt-1 hidden text-[7px] uppercase tracking-[0.38em] text-[#8b8176] transition-colors duration-300 group-hover:text-[#b18a45] sm:block">
                Maison de Parfum
              </p>

            </div>
          </Link>

          <nav className="hidden items-center gap-2 lg:flex">

            {links.map(([name, href]) => (

              <motion.button
                key={name}
                type="button"
                onClick={() => handleSectionClick(href)}
                whileHover={{
                  y: -2,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 20,
                }}
                className="group relative overflow-hidden rounded-full px-4 py-2.5 text-[11px] font-medium uppercase tracking-[0.18em] text-[#51483f] transition-all duration-300 hover:bg-white/70 hover:text-[#171513] hover:shadow-[0_5px_20px_rgba(23,21,19,0.06)]"
              >

                <span className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-[#b18a45]/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <span className="relative z-10">
                  {name}
                </span>

                <span className="absolute bottom-1.5 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-[#b18a45] to-transparent shadow-[0_0_8px_rgba(177,138,69,0.6)] transition-all duration-500 group-hover:w-2/3" />

                <span className="absolute right-2 top-1/2 h-1 w-1 -translate-y-1/2 scale-0 rounded-full bg-[#b18a45] shadow-[0_0_8px_#b18a45] transition-transform duration-300 group-hover:scale-100" />

              </motion.button>

            ))}

          </nav>

          <div className="flex items-center gap-1 sm:gap-2">


            <motion.button
              type="button"
              aria-label="Search"
              whileHover={{
                scale: 1.08,
                rotate: 3,
              }}
              whileTap={{
                scale: 0.92,
              }}
              onClick={() => {
                setSearchOpen((value) => !value);
                setProfileOpen(false);
                setMenuOpen(false);
              }}
              className={`group relative rounded-full p-2.5 transition-all duration-300 ${
                searchOpen
                  ? "bg-[#171513] text-white"
                  : "hover:bg-white hover:text-[#b18a45] hover:shadow-[0_5px_20px_rgba(23,21,19,0.08)]"
              }`}
            >
              <Search
                size={19}
                strokeWidth={1.7}
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </motion.button>


            <motion.button
              type="button"
              aria-label="Wishlist"
              whileHover={{
                scale: 1.08,
                rotate: -4,
              }}
              whileTap={{
                scale: 0.92,
              }}
              className="group relative hidden rounded-full p-2.5 transition-all duration-300 hover:bg-white hover:text-[#b18a45] hover:shadow-[0_5px_20px_rgba(23,21,19,0.08)] sm:block"
            >
              <Heart
                size={19}
                strokeWidth={1.7}
                className="transition-all duration-300 group-hover:scale-110 group-hover:fill-[#b18a45]"
              />

              <span className="absolute inset-0 -z-10 rounded-full bg-[#b18a45]/10 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />

            </motion.button>


            <Link
              to="/cart"
              onClick={closeAll}
              aria-label="Shopping bag"
              className="group relative rounded-full p-2.5 transition-all duration-300 hover:bg-white hover:text-[#b18a45] hover:shadow-[0_5px_20px_rgba(23,21,19,0.08)]"
            >

              <motion.div
                whileHover={{
                  scale: 1.1,
                  rotate: -5,
                }}
                whileTap={{
                  scale: 0.9,
                }}
              >
                <ShoppingBag
                  size={19}
                  strokeWidth={1.7}
                />
              </motion.div>

              {cartCount > 0 && (
                <motion.span
                  initial={{
                    scale: 0,
                    opacity: 0,
                  }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 25,
                  }}
                  className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full border border-[#f7f3ed] bg-[#171513] px-1 text-[9px] font-medium text-white shadow-[0_0_12px_rgba(23,21,19,0.25)]"
                >
                  {cartCount}
                </motion.span>
              )}

            </Link>

            <div className="relative hidden sm:block">

              <motion.button
                type="button"
                aria-label="Profile menu"
                whileHover={{
                  scale: 1.08,
                }}
                whileTap={{
                  scale: 0.92,
                }}
                onClick={() => {
                  setProfileOpen((value) => !value);
                  setSearchOpen(false);
                  setMenuOpen(false);
                }}
                className={`group rounded-full p-2.5 transition-all duration-300 ${
                  profileOpen
                    ? "bg-[#171513] text-white"
                    : "hover:bg-white hover:text-[#b18a45] hover:shadow-[0_5px_20px_rgba(23,21,19,0.08)]"
                }`}
              >

                <User
                  size={19}
                  strokeWidth={1.7}
                  className="transition-transform duration-300 group-hover:scale-110"
                />

              </motion.button>


              <AnimatePresence>

                {profileOpen && (

                  <motion.div
                    initial={{
                      opacity: 0,
                      y: -15,
                      scale: 0.94,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      y: -15,
                      scale: 0.94,
                    }}
                    transition={{
                      duration: 0.25,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute right-0 top-14 w-72 overflow-hidden rounded-3xl border border-black/5 bg-white/95 p-2 shadow-[0_25px_70px_rgba(23,21,19,0.18)] backdrop-blur-xl"
                  >

                    <div className="relative overflow-hidden rounded-2xl bg-[#171513] px-5 py-5 text-white">

                      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#b18a45]/20 blur-2xl" />

                      <Sparkles
                        size={18}
                        className="mb-3 text-[#c6a15b]"
                      />

                      <p className="relative font-serif text-2xl">
                        Welcome to ÉLIXIRÉ
                      </p>

                      <p className="relative mt-1 text-xs leading-5 text-white/50">
                        Discover your signature fragrance.
                      </p>

                    </div>

                    <div className="mt-2">


                      <Link
                        to="/login"
                        onClick={closeAll}
                        className="group flex items-center gap-3 rounded-2xl px-4 py-3.5 text-sm transition-all duration-300 hover:bg-[#f7f3ed] hover:pl-5"
                      >

                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f7f3ed] transition-all duration-300 group-hover:bg-[#171513] group-hover:text-white">
                          <User size={16} />
                        </span>

                        <span>Login</span>

                        <span className="ml-auto text-[#b18a45] opacity-0 transition-opacity group-hover:opacity-100">
                          →
                        </span>

                      </Link>


                      <Link
                        to="/signup"
                        onClick={closeAll}
                        className="group flex items-center gap-3 rounded-2xl px-4 py-3.5 text-sm transition-all duration-300 hover:bg-[#f7f3ed] hover:pl-5"
                      >

                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f7f3ed] transition-all duration-300 group-hover:bg-[#171513] group-hover:text-white">
                          <Heart size={16} />
                        </span>

                        <span>Sign Up</span>

                        <span className="ml-auto text-[#b18a45] opacity-0 transition-opacity group-hover:opacity-100">
                          →
                        </span>

                      </Link>


                      <Link
                        to="/profile"
                        onClick={closeAll}
                        className="group flex items-center gap-3 rounded-2xl px-4 py-3.5 text-sm transition-all duration-300 hover:bg-[#f7f3ed] hover:pl-5"
                      >

                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f7f3ed] transition-all duration-300 group-hover:bg-[#171513] group-hover:text-white">
                          <User size={16} />
                        </span>

                        <span>My Profile</span>

                        <span className="ml-auto text-[#b18a45] opacity-0 transition-opacity group-hover:opacity-100">
                          →
                        </span>

                      </Link>

                    </div>

                  </motion.div>

                )}

              </AnimatePresence>

            </div>


            <motion.button
              type="button"
              aria-label="Toggle menu"
              whileTap={{
                scale: 0.9,
              }}
              onClick={() => {
                setMenuOpen((value) => !value);
                setSearchOpen(false);
                setProfileOpen(false);
              }}
              className={`rounded-full p-2.5 transition-all duration-300 lg:hidden ${
                menuOpen
                  ? "bg-[#171513] text-white"
                  : "hover:bg-white hover:text-[#b18a45]"
              }`}
            >
              {menuOpen ? (
                <X size={21} strokeWidth={1.7} />
              ) : (
                <Menu size={21} strokeWidth={1.7} />
              )}
            </motion.button>

          </div>
        </div>
      </motion.div>

      <AnimatePresence>

        {searchOpen && (

          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="border-b border-black/5 bg-[#f7f3ed]/95 px-5 py-5 shadow-lg backdrop-blur-xl"
          >

            <div className="relative mx-auto max-w-full">

              <Search
                size={18}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-[#b18a45]"
              />

              <input
                autoFocus
                type="search"
                placeholder="Search your signature fragrance..."
                className="block w-full rounded-full border border-black/10 bg-white py-3.5 pl-12 pr-6 text-sm outline-none transition-all duration-300 placeholder:text-[#aaa09a] focus:border-[#b18a45] focus:shadow-[0_0_25px_rgba(177,138,69,0.12)]"
              />

            </div>

          </motion.div>

        )}

      </AnimatePresence>
      <AnimatePresence>

        {menuOpen && (

          <motion.nav
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="overflow-hidden border-b border-black/5 bg-[#f7f3ed]/95 shadow-xl backdrop-blur-xl lg:hidden"
          >

            <div className="px-5 py-5">

              {links.map(([name, href]) => (

                <button
                  key={name}
                  type="button"
                  onClick={() => handleSectionClick(href)}
                  className="group flex w-full items-center justify-between border-b border-black/5 py-4 text-left text-sm uppercase tracking-[0.15em] transition-all duration-300 hover:pl-2 hover:text-[#b18a45]"
                >

                  <span>{name}</span>

                  <span className="text-[#b18a45] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                    →
                  </span>

                </button>

              ))}

              <div className="mt-5 grid grid-cols-2 gap-3">

                <Link
                  to="/login"
                  onClick={closeAll}
                  className="group rounded-full border border-[#171513] py-3.5 text-center text-xs uppercase tracking-widest transition-all duration-300 hover:bg-[#171513] hover:text-white hover:shadow-lg"
                >
                  Login
                </Link>

                <Link
                  to="/signup"
                  onClick={closeAll}
                  className="rounded-full bg-[#171513] py-3.5 text-center text-xs uppercase tracking-widest text-white transition-all duration-300 hover:bg-[#b18a45] hover:shadow-[0_10px_30px_rgba(177,138,69,0.25)]"
                >
                  Sign Up
                </Link>

              </div>

              <Link
                to="/profile"
                onClick={closeAll}
                className="mt-3 flex items-center justify-center rounded-full border border-black/10 py-3.5 text-xs uppercase tracking-widest transition-all duration-300 hover:border-[#b18a45] hover:bg-white hover:text-[#b18a45]"
              >
                <User
                  size={15}
                  className="mr-2"
                />
                My Profile
              </Link>


              <Link
                to="/cart"
                onClick={closeAll}
                className="mt-3 flex items-center justify-center gap-2 rounded-full bg-[#171513] py-3.5 text-xs uppercase tracking-widest text-white transition-all duration-300 hover:bg-[#b18a45] hover:shadow-[0_10px_30px_rgba(177,138,69,0.25)]"
              >

                <ShoppingBag size={15} />

                Shopping Bag

                {cartCount > 0 && (
                  <span className="rounded-full bg-white px-2 py-0.5 text-[9px] font-medium text-[#171513]">
                    {cartCount}
                  </span>
                )}

              </Link>

            </div>

          </motion.nav>

        )}

      </AnimatePresence>

    </header>
  );
}
