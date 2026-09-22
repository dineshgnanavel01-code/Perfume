import {motion,useMotionValue,useSpring,useTransform,} from "framer-motion";
import { ArrowRight,Sparkles,Star,Droplets,Crown,} from "lucide-react";

export default function Hero() {


  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, {
    stiffness: 120,
    damping: 18,
    mass: 0.6,
  });

  const mouseY = useSpring(y, {
    stiffness: 120,
    damping: 18,
    mass: 0.6,
  });

  const rotateX = useTransform(
    mouseY,
    [-350, 350],
    [10, -10]
  );

  const rotateY = useTransform(
    mouseX,
    [-350, 350],
    [-12, 12]
  );


  const imageX = useTransform(mouseX, [-350, 350], [-12, 12]);
  const imageY = useTransform(mouseY, [-350, 350], [-10, 10]);

  const badgeX = useTransform(mouseX, [-350, 350], [-25, 25]);
  const badgeY = useTransform(mouseY, [-350, 350], [-20, 20]);

  const glowX = useTransform(mouseX, [-350, 350], [-50, 50]);
  const glowY = useTransform(mouseY, [-350, 350], [-40, 40]);

  function handleMouse(event) {
    const rect =
      event.currentTarget.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#171513] text-white"
    >

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_45%,rgba(198,161,91,.18),transparent_34%)]" />

      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.08, 0.16, 0.08],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute right-[5%] top-[20%] h-[500px] w-[500px] rounded-full bg-[#c9a45c] blur-[150px]"
      />

      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.03, 0.08, 0.03],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-40 bottom-0 h-[450px] w-[450px] rounded-full bg-[#8d6a32] blur-[150px]"
      />
      

      <motion.span
        animate={{
          y: [-25, 25, -25],
          opacity: [0.1, 0.9, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[7%] top-[28%] h-2 w-2 rounded-full bg-[#c9a45c] shadow-[0_0_20px_#c9a45c]"
      />

      <motion.span
        animate={{
          y: [25, -25, 25],
          x: [0, 12, 0],
          opacity: [0.1, 0.7, 0.1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[8%] top-[20%] h-1.5 w-1.5 rounded-full bg-[#d9bd7d]"
      />

      <motion.span
        animate={{
          x: [-20, 20, -20],
          opacity: [0.1, 0.7, 0.1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[20%] left-[30%] h-1.5 w-1.5 rounded-full bg-[#c9a45c]"
      />

      <motion.span
        animate={{
          y: [15, -15, 15],
          opacity: [0.1, 0.6, 0.1],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[25%] right-[25%] h-2 w-2 rounded-full bg-[#c9a45c] shadow-[0_0_15px_#c9a45c]"
      />

      <div className="relative mx-auto grid min-h-screen max-w-full items-center gap-12 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-2 lg:px-12 lg:pt-24">
     

        <motion.div
          initial={{
            opacity: 0,
            x: -70,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative z-20"
        >

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.15,
              duration: 0.7,
            }}
            className="mb-7 flex items-center gap-3 text-[#c9a45c]"
          >
            <span className="h-px w-10 bg-[#c9a45c]" />

            <Sparkles size={15} />

            <span className="text-[10px] uppercase tracking-[0.35em]">
              Maison ÉLIXIRÉ
            </span>

            <span className="h-px w-10 bg-[#c9a45c]" />
          </motion.div>


          <motion.h1
            initial={{
              opacity: 0,
              y: 35,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.25,
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-full font-serif text-6xl leading-[0.87] sm:text-7xl lg:text-[92px]"
          >
            Wear Your
            <span className="relative block italic text-[#c9a45c]">
              Signature.


              <motion.span
                initial={{
                  width: 0,
                }}
                animate={{
                  width: "55%",
                }}
                transition={{
                  delay: 1,
                  duration: 1,
                }}
                className="absolute -bottom-2 left-1 h-px bg-gradient-to-r from-[#c9a45c] to-transparent"
              />
            </span>
          </motion.h1>


          <motion.p
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.45,
              duration: 0.8,
            }}
            className="mt-8 max-w-lg text-sm leading-7 text-white/55 sm:text-base"
          >
            Discover exquisite fragrances crafted for those who
            appreciate elegance, individuality and timeless
            luxury. Every ÉLIXIRÉ creation tells a story that
            becomes uniquely yours.
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.6,
              duration: 0.8,
            }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <motion.a
              href="#perfumes"
              whileHover={{
                y: -4,
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="group flex items-center gap-3 rounded-full bg-[#c9a45c] px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#171513] shadow-[0_15px_40px_rgba(201,164,92,0.15)] transition-all hover:bg-[#e0c98e] hover:shadow-[0_20px_50px_rgba(201,164,92,0.25)]"
            >
              Shop Now

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black/10">
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </motion.a>

            <motion.a
              href="#collections"
              whileHover={{
                y: -4,
                borderColor: "rgba(201,164,92,.8)",
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="group flex items-center gap-3 rounded-full border border-white/15 px-7 py-4 text-[10px] uppercase tracking-[0.2em] text-white/80 transition-all hover:text-[#c9a45c]"
            >
              Explore Collection

              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-1"
              />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.8,
              duration: 0.7,
            }}
            className="mt-12 flex flex-wrap items-center gap-7"
          >
            <div>
              <p className="font-serif text-2xl text-white">
                50+
              </p>
              <p className="mt-1 text-[8px] uppercase tracking-[0.2em] text-white/35">
                Fragrances
              </p>
            </div>

            <span className="h-8 w-px bg-white/10" />

            <div>
              <p className="font-serif text-2xl text-white">
                15+
              </p>
              <p className="mt-1 text-[8px] uppercase tracking-[0.2em] text-white/35">
                Years of Craft
              </p>
            </div>

            <span className="h-8 w-px bg-white/10" />

            <div>
              <p className="font-serif text-2xl text-white">
                50K+
              </p>
              <p className="mt-1 text-[8px] uppercase tracking-[0.2em] text-white/35">
                Clients
              </p>
            </div>
          </motion.div>
        </motion.div>

        <div
          className="relative flex items-center justify-center py-10 lg:py-0"
          onMouseMove={handleMouse}
          onMouseLeave={handleMouseLeave}
          style={{
            perspective: "1400px",
          }}
        >
          <motion.div
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            initial={{
              opacity: 0,
              scale: 0.82,
              y: 50,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 1.2,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto w-full max-w-full"
          >
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 28,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-[-5%] rounded-full border border-dashed border-[#c9a45c]/20"
            />

            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 38,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-[3%] rounded-full border border-[#c9a45c]/10"
            />

            {/* Orbit dots */}

            <motion.span
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute left-1/2 top-[-5%] h-2 w-2 rounded-full bg-[#c9a45c] shadow-[0_0_15px_#c9a45c]"
            />
            <motion.div
              style={{
                x: glowX,
                y: glowY,
              }}
              className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c9a45c]/10 blur-[100px]"
            />

            <motion.div
              style={{
                translateZ: 50,
                x: imageX,
                y: imageY,
              }}
              className="relative mx-auto aspect-[4/5] max-w-full"
            >

              <div className="absolute inset-8 translate-y-10 rounded-[45%_45%_15%_15%] bg-black/80 blur-3xl" />

              <div className="relative h-full overflow-hidden rounded-[45%_45%_12%_12%] border border-white/10 bg-[#29241e] shadow-[0_40px_100px_rgba(0,0,0,0.65)]">
                <motion.img
                  src="https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1000&q=90"
                  alt="Luxury Velvet Oud perfume"
                  className="h-full w-full object-cover"
                  whileHover={{
                    scale: 1.08,
                  }}
                  transition={{
                    duration: 1,
                    ease: "easeOut",
                  }}
                />


                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/10" />


                <motion.div
                  animate={{
                    x: ["-150%", "150%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-y-0 w-1/4 -skew-x-[20deg] bg-gradient-to-r from-transparent via-white/[0.18] to-transparent blur-xl"
                />


                <motion.div
                  animate={{
                    opacity: [0.05, 0.15, 0.05],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className="absolute inset-0 bg-gradient-to-br from-[#c9a45c]/20 via-transparent to-transparent"
                />
              </div>
            </motion.div>


            <motion.div
              animate={{
                y: [0, -8, 0],
                rotate: [0, 2, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                translateZ: 110,
              }}
              className="absolute right-[5%] top-[8%] hidden rounded-2xl border border-white/10 bg-white/[0.08] p-4 shadow-2xl backdrop-blur-xl sm:block"
            >
              <div className="flex items-center gap-2">
                <Crown
                  size={14}
                  className="text-[#c9a45c]"
                />

                <span className="text-[8px] uppercase tracking-[0.2em] text-white/60">
                  Maison Collection
                </span>
              </div>

              <div className="mt-2 flex gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={9}
                    fill="#c9a45c"
                    className="text-[#c9a45c]"
                  />
                ))}
              </div>
            </motion.div>

            <motion.div
              style={{
                translateZ: 120,
                x: badgeX,
                y: badgeY,
              }}
              className="absolute bottom-[7%] left-0 rounded-2xl border border-white/15 bg-white/[0.08] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:left-[3%] sm:p-6"
            >
              <div className="flex items-center gap-2">
                <Droplets
                  size={13}
                  className="text-[#c9a45c]"
                />

                <p className="text-[9px] uppercase tracking-[0.25em] text-[#c9a45c]">
                  Eau de Parfum
                </p>
              </div>

              <p className="mt-1 font-serif text-3xl text-white">
                Velvet Oud
              </p>

              <div className="mt-3 flex items-center gap-2">
                <span className="h-px w-8 bg-[#c9a45c]" />

                <span className="text-[8px] uppercase tracking-[0.2em] text-white/40">
                  Oud • Amber • Saffron
                </span>
              </div>
            </motion.div>


            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 15, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                translateZ: 140,
              }}
              className="absolute bottom-[25%] right-[-2%] hidden h-14 w-14 items-center justify-center rounded-full border border-[#c9a45c]/30 bg-[#c9a45c]/10 text-[#c9a45c] backdrop-blur-md sm:flex"
            >
              <Sparkles size={18} />
            </motion.div>


            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 1.2,
              }}
              className="absolute bottom-[-35px] left-1/2 -translate-x-1/2 whitespace-nowrap"
            >
              <p className="font-serif text-lg italic text-white/25">
                The Art of Fine Fragrance
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.5,
        }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
      >
        <span className="text-[8px] uppercase tracking-[0.35em] text-white/30">
          Discover
        </span>

        <motion.span
          animate={{
            height: [20, 35, 20],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="w-px bg-[#c9a45c]"
        />
      </motion.div>
    </section>
  );
}