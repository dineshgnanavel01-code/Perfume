import { motion } from "framer-motion";
import {Sparkles, ArrowUpRight,Droplets,Crown,} from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#f7f3ed] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.08, 0.16, 0.08],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#c9a45c] blur-[130px]"
      />

      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.05, 0.12, 0.05],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-[#b18a45] blur-[150px]"
      />

      <div className="relative mx-auto grid max-w-full items-center gap-16 lg:grid-cols-2 lg:gap-24">


        <motion.div
          initial={{
            opacity: 0,
            x: -60,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >


          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.15,
              duration: 0.6,
            }}
            className="flex items-center gap-3"
          >
            <span className="h-px w-10 bg-[#b18a45]" />

            <p className="text-xs uppercase tracking-[0.3em] text-[#b18a45]">
              Our Story
            </p>

            <Sparkles
              size={13}
              className="text-[#b18a45]"
            />
          </motion.div>


          <motion.h2
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.25,
              duration: 0.8,
            }}
            className="mt-5 max-w-xl font-serif text-5xl leading-[0.95] text-[#171513] sm:text-6xl lg:text-7xl"
          >
            Fragrance is an{" "}
            <span className="relative italic text-[#b18a45]">
              art form.


              <motion.span
                initial={{
                  width: 0,
                }}
                whileInView={{
                  width: "100%",
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.9,
                  duration: 0.8,
                }}
                className="absolute -bottom-2 left-0 h-[2px] bg-gradient-to-r from-[#b18a45] to-transparent"
              />
            </span>
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.4,
              duration: 0.7,
            }}
            className="mt-8 max-w-xl text-sm leading-8 text-[#6f675f] sm:text-base"
          >
            ÉLIXIRÉ was born from a desire to transform fragrance into
            an unforgettable experience. Every composition is carefully
            crafted with distinctive ingredients, timeless character,
            and contemporary elegance.
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.55,
              duration: 0.7,
            }}
            className="mt-8 flex items-center gap-4"
          >

            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#b18a45]/30 bg-white shadow-[0_10px_30px_rgba(23,21,19,0.06)]">
              <Droplets
                size={19}
                strokeWidth={1.5}
                className="text-[#b18a45]"
              />
            </div>

            <div>
              <p className="font-serif text-xl text-[#171513]">
                Crafted with intention
              </p>

              <p className="mt-1 text-xs text-[#8b8176]">
                Every note tells a story.
              </p>
            </div>

          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.65,
              duration: 0.8,
            }}
            className="mt-12 grid grid-cols-3 border-y border-black/10 py-7"
          >


            <div className="border-r border-black/10 pr-4">
              <p className="font-serif text-3xl text-[#171513] sm:text-4xl">
                15+
              </p>

              <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-[#8b8176]">
                Years
              </p>
            </div>


            <div className="border-r border-black/10 px-4">
              <p className="font-serif text-3xl text-[#171513] sm:text-4xl">
                50+
              </p>

              <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-[#8b8176]">
                Fragrances
              </p>
            </div>


            <div className="pl-4">
              <p className="font-serif text-3xl text-[#171513] sm:text-4xl">
                50K+
              </p>

              <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-[#8b8176]">
                Clients
              </p>
            </div>

          </motion.div>


          <motion.a
            href="#perfumes"
            whileHover={{
              x: 5,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="group mt-8 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-[#171513]"
          >
            Explore our fragrances

            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#b18a45]/40 transition-all duration-300 group-hover:border-[#b18a45] group-hover:bg-[#b18a45] group-hover:text-white">
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:rotate-45"
              />
            </span>
          </motion.a>

        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            x: 70,
            rotateY: 12,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            rotateY: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 1.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mx-auto w-full max-w-full"
          style={{
            perspective: "1200px",
          }}
        >

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -right-8 -top-8 h-40 w-40 rounded-full border border-dashed border-[#b18a45]/25 sm:-right-14 sm:-top-14 sm:h-56 sm:w-56"
          />


          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 32,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -bottom-10 -left-10 h-44 w-44 rounded-full border border-[#b18a45]/15 sm:-bottom-14 sm:-left-14 sm:h-64 sm:w-64"
          />

          <motion.div
            initial={{
              rotateX: 0,
              rotateY: 0,
            }}
            whileHover={{
              rotateX: -5,
              rotateY: 7,
              scale: 1.025,
            }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 18,
            }}
            className="group relative z-10"
            style={{
              transformStyle: "preserve-3d",
            }}
          >

            <div className="absolute inset-5 translate-y-8 rounded-[2rem] bg-[#171513]/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-[#171513] p-2 shadow-[0_35px_80px_rgba(23,21,19,0.2)]">

              <div className="relative h-[500px] overflow-hidden rounded-[1.5rem] sm:h-[570px]">

                <motion.img
                  src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1000&q=90"
                  alt="ÉLIXIRÉ luxury fragrance"
                  whileHover={{
                    scale: 1.08,
                  }}
                  transition={{
                    duration: 1.2,
                    ease: "easeOut",
                  }}
                  className="h-full w-full object-cover"
                />


                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />


                <motion.div
                  animate={{
                    x: ["-120%", "120%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatDelay: 4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-y-0 w-1/3 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/15 to-transparent blur-xl"
                />


                <div className="absolute bottom-7 left-7 right-7 text-white">

                  <div className="flex items-center gap-2 text-[#d8bb7b]">
                    <Crown size={15} />
                    <span className="text-[9px] uppercase tracking-[0.3em]">
                      Maison Collection
                    </span>
                  </div>

                  <h3 className="mt-3 font-serif text-4xl sm:text-5xl">
                    ÉLIXIRÉ
                  </h3>

                  <p className="mt-2 max-w-xs text-xs leading-5 text-white/60">
                    Where craftsmanship meets the art of unforgettable
                    fragrance.
                  </p>
                </div>

              </div>
            </div>

        

            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 1, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-6 -left-5 z-30 rounded-2xl border border-white/60 bg-[#171513]/95 px-5 py-4 text-white shadow-[0_20px_50px_rgba(23,21,19,0.3)] backdrop-blur-xl sm:-left-8"
              style={{
                transform: "translateZ(70px)",
              }}
            >
              <p className="text-[9px] uppercase tracking-[0.25em] text-[#c9a45c]">
                Crafted with passion
              </p>

              <p className="mt-1 font-serif text-2xl">
                Since 2011
              </p>
            </motion.div>

            {/* =================================================
                FLOATING GOLD BADGE
            ================================================= */}

            <motion.div
              animate={{
                y: [0, 8, 0],
                rotate: [0, -3, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-4 top-16 z-30 flex h-24 w-24 items-center justify-center rounded-full border border-[#c9a45c]/40 bg-[#f7f3ed]/90 shadow-[0_15px_40px_rgba(23,21,19,0.12)] backdrop-blur-md sm:-right-8 sm:h-28 sm:w-28"
              style={{
                transform: "translateZ(80px)",
              }}
            >

              <div className="absolute inset-2 rounded-full border border-dashed border-[#b18a45]/30" />

              <div className="text-center">
                <Sparkles
                  size={15}
                  className="mx-auto text-[#b18a45]"
                />

                <p className="mt-1 font-serif text-lg text-[#171513]">
                  15+
                </p>

                <p className="text-[7px] uppercase tracking-[0.18em] text-[#8b8176]">
                  Years
                </p>
              </div>
            </motion.div>

            {/* Floating particles */}

            <motion.span
              animate={{
                y: [-15, 15, -15],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -left-4 top-24 h-2 w-2 rounded-full bg-[#c9a45c] shadow-[0_0_15px_#c9a45c]"
            />

            <motion.span
              animate={{
                y: [15, -15, 15],
                opacity: [0.2, 0.7, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-8 bottom-20 h-1.5 w-1.5 rounded-full bg-[#b18a45] shadow-[0_0_12px_#b18a45]"
            />

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}