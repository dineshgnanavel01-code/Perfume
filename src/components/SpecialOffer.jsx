import { motion } from "framer-motion";
import {ArrowRight,Sparkles,Crown,Star,Gift,ShieldCheck,} from "lucide-react";

export default function SpecialOffer() {
  return (
    <section className="relative overflow-hidden bg-[#171513] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32">
   

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.08, 0.18, 0.08],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-32 -top-32 h-[450px] w-[450px] rounded-full bg-[#c9a45c] blur-[130px]"
      />

      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.04, 0.12, 0.04],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -bottom-40 -left-32 h-[500px] w-[500px] rounded-full bg-[#b18a45] blur-[150px]"
      />

      <motion.span
        animate={{
          y: [-20, 20, -20],
          opacity: [0.2, 0.9, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[10%] top-[25%] h-2 w-2 rounded-full bg-[#c9a45c] shadow-[0_0_18px_#c9a45c]"
      />

      <motion.span
        animate={{
          y: [20, -20, 20],
          opacity: [0.2, 0.8, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[15%] top-[30%] h-1.5 w-1.5 rounded-full bg-[#e0c98e] shadow-[0_0_15px_#c9a45c]"
      />

      <motion.span
        animate={{
          x: [-15, 15, -15],
          opacity: [0.1, 0.8, 0.1],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[20%] left-[22%] h-1.5 w-1.5 rounded-full bg-[#c9a45c]"
      />

      <motion.span
        animate={{
          y: [15, -15, 15],
          x: [0, 10, 0],
          opacity: [0.15, 0.7, 0.15],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[25%] right-[25%] h-2 w-2 rounded-full bg-[#c9a45c] shadow-[0_0_15px_#c9a45c]"
      />

      <div
        className="relative mx-auto max-w-full"
        style={{ perspective: "1400px" }}
      >

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-center gap-3"
        >
          <span className="h-px w-10 bg-[#c9a45c]" />

          <Sparkles
            size={14}
            className="text-[#c9a45c]"
          />

          <p className="text-[10px] uppercase tracking-[0.35em] text-[#c9a45c]">
            Exclusive Maison Offer
          </p>

          <Sparkles
            size={14}
            className="text-[#c9a45c]"
          />

          <span className="h-px w-10 bg-[#c9a45c]" />
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: 70,
            rotateX: 12,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            rotateX: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{
            rotateX: -3,
            rotateY: 3,
            scale: 1.015,
          }}
          className="group relative mx-auto mt-8 max-w-full"
          style={{
            transformStyle: "preserve-3d",
          }}
        >

          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="pointer-events-none absolute -inset-8 rounded-[3rem] border border-dashed border-[#c9a45c]/15"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
            className="pointer-events-none absolute -inset-4 rounded-[2.5rem] border border-[#c9a45c]/10"
          />

         

          <div className="absolute inset-8 translate-y-8 rounded-[3rem] bg-black/60 blur-3xl" />

          <div
            className="relative overflow-hidden rounded-[2.5rem] border border-[#c9a45c]/20 bg-gradient-to-br from-[#211e1a] via-[#171513] to-[#0e0d0b] px-7 py-14 shadow-[0_35px_100px_rgba(0,0,0,0.45)] sm:px-12 sm:py-16 lg:px-20"
            style={{
              transformStyle: "preserve-3d",
            }}
          >
  

            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.04, 0.1, 0.04],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c9a45c] blur-[120px]"
            />

            <motion.div
              animate={{
                x: ["-150%", "150%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatDelay: 4,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute inset-y-0 w-1/4 -skew-x-[20deg] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent blur-xl"
            />

            <motion.div
              animate={{
                y: [0, -8, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center rounded-full border border-[#c9a45c]/20 bg-[#c9a45c]/5 text-[#c9a45c] sm:left-10 sm:top-10"
              style={{
                transform: "translateZ(50px)",
              }}
            >
              <Gift size={19} />
            </motion.div>

            <motion.div
              animate={{
                y: [0, 8, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full border border-[#c9a45c]/20 bg-[#c9a45c]/5 text-[#c9a45c] sm:right-10 sm:top-10"
              style={{
                transform: "translateZ(50px)",
              }}
            >
              <Crown size={19} />
            </motion.div>

            <div
              className="relative z-10 text-center"
              style={{
                transform: "translateZ(70px)",
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
                }}
                className="inline-flex items-center gap-2 rounded-full border border-[#c9a45c]/30 bg-[#c9a45c]/5 px-4 py-2"
              >
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#c9a45c] shadow-[0_0_10px_#c9a45c]" />

                <span className="text-[9px] uppercase tracking-[0.3em] text-[#c9a45c]">
                  Limited Time
                </span>
              </motion.div>

              <motion.h2
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.25,
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100,
                }}
                className="mt-7 font-serif text-7xl leading-none sm:text-8xl lg:text-[9rem]"
              >
                <span className="bg-gradient-to-b from-[#f3dfad] via-[#c9a45c] to-[#8d6a32] bg-clip-text text-transparent">
                  20%
                </span>

                <span className="ml-2 text-white/90">
                  Off
                </span>
              </motion.h2>

              <motion.div
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.55,
                }}
                className="mt-5 flex justify-center gap-1"
              >
                {[1, 2, 3, 4, 5].map((star) => (
                  <motion.div
                    key={star}
                    initial={{
                      scale: 0,
                      rotate: -45,
                    }}
                    whileInView={{
                      scale: 1,
                      rotate: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: 0.55 + star * 0.06,
                      type: "spring",
                    }}
                  >
                    <Star
                      size={13}
                      fill="#c9a45c"
                      className="text-[#c9a45c]"
                    />
                  </motion.div>
                ))}
              </motion.div>


              <motion.p
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
                  delay: 0.65,
                  duration: 0.7,
                }}
                className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/55 sm:text-base"
              >
                Discover our most coveted fragrances and enjoy an
                exclusive 20% offer on selected ÉLIXIRÉ creations.
                Find the scent that becomes uniquely yours.
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
                  delay: 0.75,
                  duration: 0.7,
                }}
                className="mx-auto mt-8 flex max-w-xl flex-wrap items-center justify-center gap-3"
              >
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
                  <Sparkles
                    size={13}
                    className="text-[#c9a45c]"
                  />

                  <span className="text-[9px] uppercase tracking-[0.15em] text-white/60">
                    Selected Fragrances
                  </span>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
                  <ShieldCheck
                    size={13}
                    className="text-[#c9a45c]"
                  />

                  <span className="text-[9px] uppercase tracking-[0.15em] text-white/60">
                    Authentic ÉLIXIRÉ
                  </span>
                </div>
              </motion.div>

              {/* =================================================
                  CTA
              ================================================= */}

              <motion.a
                href="#perfumes"
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
                  delay: 0.85,
                  duration: 0.7,
                }}
                whileHover={{
                  scale: 1.05,
                  y: -4,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="group mt-9 inline-flex items-center gap-3 rounded-full bg-[#c9a45c] px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#171513] shadow-[0_15px_40px_rgba(201,164,92,0.2)] transition-all duration-300 hover:bg-[#e0c98e] hover:shadow-[0_20px_50px_rgba(201,164,92,0.3)] sm:px-8"
              >
                Shop The Offer

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#171513]/10 transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight size={15} />
                </span>
              </motion.a>

              {/* =================================================
                  SMALL NOTE
              ================================================= */}

              <motion.p
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 1,
                }}
                className="mt-5 text-[9px] uppercase tracking-[0.2em] text-white/30"
              >
                Elevate your everyday • Discover ÉLIXIRÉ
              </motion.p>
            </div>

            {/* ===================================================
                BOTTOM DECORATIVE LINE
            =================================================== */}

            <motion.div
              initial={{
                width: 0,
              }}
              whileInView={{
                width: "30%",
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 1,
                duration: 1,
              }}
              className="absolute bottom-5 left-1/2 h-px -translate-x-1/2 bg-gradient-to-r from-transparent via-[#c9a45c]/50 to-transparent"
            />
          </div>

          {/* =====================================================
              FLOATING GOLD ORBS
          ===================================================== */}

          <motion.div
            animate={{
              y: [0, -15, 0],
              x: [0, 8, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-5 top-1/2 hidden h-14 w-14 items-center justify-center rounded-full border border-[#c9a45c]/30 bg-[#c9a45c]/5 backdrop-blur-md sm:flex"
            style={{
              transform: "translateZ(90px)",
            }}
          >
            <Sparkles
              size={17}
              className="text-[#c9a45c]"
            />
          </motion.div>

          <motion.div
            animate={{
              y: [0, 15, 0],
              x: [0, -8, 0],
              rotate: [0, -10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-5 top-[42%] hidden h-14 w-14 items-center justify-center rounded-full border border-[#c9a45c]/30 bg-[#c9a45c]/5 backdrop-blur-md sm:flex"
            style={{
              transform: "translateZ(90px)",
            }}
          >
            <Crown
              size={17}
              className="text-[#c9a45c]"
            />
          </motion.div>
        </motion.div>

        {/* =========================================================
            BOTTOM BRAND LINE
        ========================================================= */}

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
            delay: 0.5,
            duration: 0.7,
          }}
          className="mt-12 flex items-center justify-center gap-4"
        >
          <span className="h-px w-16 bg-white/10" />

          <p className="font-serif text-lg italic text-white/30">
            The Art of Fine Fragrance
          </p>

          <span className="h-px w-16 bg-white/10" />
        </motion.div>
      </div>
    </section>
  );
}