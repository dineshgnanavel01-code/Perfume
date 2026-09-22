import { motion } from "framer-motion";
import {Sparkles, Droplets,Flower2, Gem, ArrowUpRight,} from "lucide-react";

const notes = [
  {
    number: "01",
    title: "Top Notes",
    subtitle: "The first impression.",
    description:
      "A luminous opening that introduces the fragrance with freshness, brightness and intrigue.",
    items: ["Bergamot", "Saffron", "Citrus"],
    icon: Sparkles,
    glow: "bg-[#d6b46a]",
  },
  {
    number: "02",
    title: "Heart Notes",
    subtitle: "The soul of the fragrance.",
    description:
      "The heart reveals the character of the composition through elegant florals and refined warmth.",
    items: ["Rose", "Jasmine", "Iris"],
    icon: Flower2,
    glow: "bg-[#c99b9b]",
  },
  {
    number: "03",
    title: "Base Notes",
    subtitle: "The lasting memory.",
    description:
      "Deep and sensual notes remain on the skin, creating a signature that lingers beautifully.",
    items: ["Oud", "Amber", "Musk"],
    icon: Gem,
    glow: "bg-[#8c7357]",
  },
];

export default function FragranceExperience() {
  return (
    <section className="relative overflow-hidden bg-[#e9e1d5] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
    
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.08, 0.16, 0.08],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-[#c9a45c] blur-[130px]"
      />

      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.05, 0.13, 0.05],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-40 bottom-10 h-[500px] w-[500px] rounded-full bg-[#b18a45] blur-[150px]"
      />


      <motion.span
        animate={{
          y: [-20, 20, -20],
          opacity: [0.2, 0.8, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[10%] top-[20%] h-2 w-2 rounded-full bg-[#b18a45] shadow-[0_0_18px_#b18a45]"
      />

      <motion.span
        animate={{
          y: [20, -25, 20],
          x: [0, 10, 0],
          opacity: [0.15, 0.7, 0.15],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[12%] top-[30%] h-1.5 w-1.5 rounded-full bg-[#c9a45c] shadow-[0_0_15px_#c9a45c]"
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
        className="absolute bottom-[20%] left-[20%] h-1.5 w-1.5 rounded-full bg-[#b18a45]"
      />

      <div
        className="relative mx-auto max-w-full"
        style={{ perspective: "1600px" }}
      >

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#b18a45]" />

            <Sparkles
              size={14}
              className="text-[#b18a45]"
            />

            <p className="text-[10px] uppercase tracking-[0.35em] text-[#9b753b]">
              The Fragrance Experience
            </p>

            <Sparkles
              size={14}
              className="text-[#b18a45]"
            />

            <span className="h-px w-10 bg-[#b18a45]" />
          </div>

          <h2 className="mx-auto mt-5 max-w-full font-serif text-5xl leading-[0.95] text-[#171513] sm:text-6xl lg:text-7xl">
            A scent that unfolds{" "}
            <span className="italic text-[#b18a45]">
              in layers.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-full text-sm leading-7 text-[#7f756a]">
            Discover how every ÉLIXIRÉ fragrance evolves from its
            first sparkling impression to the unforgettable trail
            that remains.
          </p>
        </motion.div>

        <div
          className="mt-16 grid gap-7 md:grid-cols-3"
          style={{
            perspective: "1600px",
          }}
        >
          {notes.map((note, index) => {
            const Icon = note.icon;

            return (
              <motion.div
                key={note.title}
                initial={{
                  opacity: 0,
                  y: 70,
                  rotateX: 12,
                  scale: 0.94,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -14,
                  rotateX: -5,
                  rotateY: index === 1 ? 0 : index === 0 ? 5 : -5,
                  scale: 1.025,
                }}
                className="group relative"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >

                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 25 + index * 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="pointer-events-none absolute -inset-3 rounded-[2rem] border border-dashed border-[#b18a45]/15"
                />


                <div className="absolute inset-5 translate-y-8 rounded-[2rem] bg-black/20 blur-2xl" />

                <div
                  className="relative min-h-[510px] overflow-hidden rounded-[2rem] border border-white/70 bg-[#f7f3ed] p-7 shadow-[0_25px_70px_rgba(45,38,29,0.14)] sm:p-8"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.05, 0.12, 0.05],
                    }}
                    transition={{
                      duration: 5 + index,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className={`pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full ${note.glow} blur-[90px]`}
                  />


                  <motion.div
                    animate={{
                      x: ["-180%", "180%"],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      repeatDelay: 3,
                      ease: "easeInOut",
                    }}
                    className="pointer-events-none absolute inset-y-0 w-1/3 -skew-x-[20deg] bg-gradient-to-r from-transparent via-white/60 to-transparent blur-xl"
                  />


                  <div
                    className="relative z-10 flex items-start justify-between"
                    style={{
                      transform: "translateZ(55px)",
                    }}
                  >
                    <span className="font-serif text-4xl text-[#b18a45]/50">
                      {note.number}
                    </span>

                    <motion.div
                      whileHover={{
                        rotate: 15,
                        scale: 1.15,
                      }}
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-[#b18a45]/20 bg-[#b18a45]/5 text-[#b18a45]"
                    >
                      <Icon size={20} />
                    </motion.div>
                  </div>


                  <div
                    className="relative z-10 mt-10"
                    style={{
                      transform: "translateZ(65px)",
                    }}
                  >
                    <p className="text-[9px] uppercase tracking-[0.3em] text-[#b18a45]">
                      Fragrance Layer
                    </p>

                    <h3 className="mt-2 font-serif text-4xl text-[#171513]">
                      {note.title}
                    </h3>

                    <p className="mt-2 font-serif text-lg italic text-[#8b8176]">
                      {note.subtitle}
                    </p>

                    <p className="mt-5 text-sm leading-7 text-[#80766b]">
                      {note.description}
                    </p>
                  </div>

                  <div
                    className="relative z-10 my-7 h-px bg-gradient-to-r from-[#b18a45]/30 via-[#b18a45]/10 to-transparent"
                    style={{
                      transform: "translateZ(40px)",
                    }}
                  />


                  <div
                    className="relative z-10 space-y-3"
                    style={{
                      transform: "translateZ(55px)",
                    }}
                  >
                    {note.items.map((item, itemIndex) => (
                      <motion.div
                        key={item}
                        initial={{
                          opacity: 0,
                          x: -15,
                        }}
                        whileInView={{
                          opacity: 1,
                          x: 0,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          delay:
                            index * 0.15 +
                            itemIndex * 0.1 +
                            0.3,
                        }}
                        whileHover={{
                          x: 8,
                        }}
                        className="group/note flex items-center justify-between border-b border-black/5 pb-3"
                      >
                        <div className="flex items-center gap-3">
                          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#b18a45]/20 text-[9px] text-[#b18a45]">
                            0{itemIndex + 1}
                          </span>

                          <span className="text-sm text-[#4f4943]">
                            {item}
                          </span>
                        </div>

                        <motion.span
                          initial={{
                            opacity: 0,
                            x: -5,
                          }}
                          whileHover={{
                            opacity: 1,
                            x: 0,
                          }}
                          className="text-[#b18a45]"
                        >
                          <ArrowUpRight size={14} />
                        </motion.span>
                      </motion.div>
                    ))}
                  </div>


                  <div
                    className="absolute bottom-7 left-7 right-7 flex items-center justify-between"
                    style={{
                      transform: "translateZ(45px)",
                    }}
                  >
                    <span className="text-[8px] uppercase tracking-[0.25em] text-[#aaa096]">
                      ÉLIXIRÉ
                    </span>

                    <span className="flex items-center gap-2 text-[8px] uppercase tracking-[0.2em] text-[#b18a45]">
                      <Droplets size={11} />
                      Layer {note.number}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

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
            delay: 0.4,
            duration: 0.8,
          }}
          className="mx-auto mt-16 max-w-full"
        >
          <div className="relative overflow-hidden rounded-full border border-[#b18a45]/20 bg-[#f7f3ed]/70 px-6 py-4 shadow-[0_15px_40px_rgba(45,38,29,0.08)] backdrop-blur-md">
            <motion.div
              animate={{
                x: ["-120%", "120%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut",
              }}
              className="absolute inset-y-0 w-1/4 -skew-x-[20deg] bg-gradient-to-r from-transparent via-white/70 to-transparent blur-lg"
            />

            <div className="relative flex flex-wrap items-center justify-center gap-4 text-center sm:justify-between">
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#8b8176]">
                Top
              </span>

              <span className="h-px w-8 bg-[#b18a45]/30" />

              <span className="text-[9px] uppercase tracking-[0.2em] text-[#8b8176]">
                Heart
              </span>

              <span className="h-px w-8 bg-[#b18a45]/30" />

              <span className="text-[9px] uppercase tracking-[0.2em] text-[#8b8176]">
                Base
              </span>

              <span className="h-px w-8 bg-[#b18a45]/30" />

              <span className="font-serif text-base italic text-[#b18a45]">
                Your Signature
              </span>
            </div>
          </div>
        </motion.div>


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
            delay: 0.6,
          }}
          className="mt-12 flex items-center justify-center gap-4"
        >
          <span className="h-px w-16 bg-[#b18a45]/20" />

          <p className="font-serif text-lg italic text-[#9b8e80]">
            The art of becoming unforgettable.
          </p>

          <span className="h-px w-16 bg-[#b18a45]/20" />
        </motion.div>
      </div>
    </section>
  );
}
