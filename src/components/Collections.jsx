import { motion } from "framer-motion";
import {ArrowUpRight, Sparkles,Crown, Gem, CircleDot,} from "lucide-react";

const collections = [
  {
    number: "01",
    title: "Men",
    subtitle: "Bold & Refined",
    description:
      "Powerful compositions crafted for the modern gentleman.",
    icon: Crown,
    image:
      "https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=1200&q=90",
  },
  {
    number: "02",
    title: "Women",
    subtitle: "Elegant & Sensual",
    description:
      "Timeless florals and refined accords made to captivate.",
    icon: Sparkles,
    image:
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=1200&q=90",
  },
  {
    number: "03",
    title: "Unisex",
    subtitle: "Simply Iconic",
    description:
      "Modern fragrances created beyond traditional boundaries.",
    icon: CircleDot,
    image:
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=90",
  },
  {
    number: "04",
    title: "Luxury",
    subtitle: "Rare & Extraordinary",
    description:
      "Exceptional ingredients for an unforgettable signature.",
    icon: Gem,
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=90",
  },
];

export default function Collections() {
  return (
    <section
      id="collections"
      className="relative overflow-hidden bg-[#171513] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32"
    >

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.04, 0.1, 0.04],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-48 top-20 h-[550px] w-[550px] rounded-full bg-[#c9a45c] blur-[150px]"
      />

      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.03, 0.09, 0.03],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-48 bottom-10 h-[550px] w-[550px] rounded-full bg-[#b18a45] blur-[160px]"
      />


      <motion.span
        animate={{
          y: [-20, 20, -20],
          opacity: [0.1, 0.8, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-[8%] top-[20%] h-2 w-2 rounded-full bg-[#c9a45c] shadow-[0_0_20px_#c9a45c]"
      />

      <motion.span
        animate={{
          y: [20, -25, 20],
          x: [0, 10, 0],
          opacity: [0.1, 0.7, 0.1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute right-[12%] top-[30%] h-1.5 w-1.5 rounded-full bg-[#d8bd7d]"
      />

      <motion.span
        animate={{
          x: [-15, 15, -15],
          opacity: [0.1, 0.6, 0.1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute bottom-[15%] left-[25%] h-1.5 w-1.5 rounded-full bg-[#c9a45c]"
      />

      <div
        className="relative mx-auto max-w-full"
        style={{
          perspective: "1800px",
        }}
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
          className="mb-14 text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#c9a45c]" />

            <Sparkles
              size={14}
              className="text-[#c9a45c]"
            />

            <p className="text-[10px] uppercase tracking-[0.35em] text-[#c9a45c]">
              Curated For You
            </p>

            <Sparkles
              size={14}
              className="text-[#c9a45c]"
            />

            <span className="h-px w-10 bg-[#c9a45c]" />
          </div>

          <h2 className="mt-4 font-serif text-5xl leading-none sm:text-6xl lg:text-7xl">
            Explore Our{" "}
            <span className="italic text-[#c9a45c]">
              Collections
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/45">
            Discover carefully curated fragrance worlds designed
            around different personalities, moments and desires.
          </p>
        </motion.div>

        <div
          className="grid gap-7 md:grid-cols-2"
          style={{
            perspective: "1800px",
          }}
        >
          {collections.map((item, index) => {
            const Icon = item.icon;

            const rotations = [
              { x: -4, y: 5 },
              { x: -4, y: -5 },
              { x: 4, y: 5 },
              { x: 4, y: -5 },
            ];

            const rotation = rotations[index];

            return (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 70,
                  rotateX: 10,
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
                  delay: index * 0.12,
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -15,
                  rotateX: rotation.x,
                  rotateY: rotation.y,
                  scale: 1.02,
                }}
                className="group relative h-[440px] sm:h-[480px]"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >

                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 30 + index * 4,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="pointer-events-none absolute -inset-3 rounded-[2rem] border border-dashed border-[#c9a45c]/15"
                />

                <motion.div
                  animate={{
                    rotate: -360,
                  }}
                  transition={{
                    duration: 45 + index * 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="pointer-events-none absolute -inset-1 rounded-[1.9rem] border border-[#c9a45c]/10"
                />
                <div className="absolute inset-5 translate-y-8 rounded-[2rem] bg-black/70 blur-3xl" />

                <div
                  className="relative h-full overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#211e1a] shadow-[0_35px_100px_rgba(0,0,0,0.4)]"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >

                  <motion.img
                    src={item.image}
                    alt={item.title}
                    whileHover={{
                      scale: 1.1,
                    }}
                    transition={{
                      duration: 1.2,
                      ease: "easeOut",
                    }}
                    className="absolute inset-0 h-full w-full object-cover"
                  />


                  <div className="absolute inset-0 bg-gradient-to-t from-[#080706] via-black/30 to-black/10" />


                  <motion.div
                    animate={{
                      opacity: [0.02, 0.08, 0.02],
                      scale: [1, 1.15, 1],
                    }}
                    transition={{
                      duration: 5 + index,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="pointer-events-none absolute inset-0 bg-[#c9a45c] blur-[70px]"
                  />

                  <motion.div
                    animate={{
                      x: ["-160%", "160%"],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      repeatDelay: 3 + index,
                      ease: "easeInOut",
                    }}
                    className="pointer-events-none absolute inset-y-0 w-1/4 -skew-x-[20deg] bg-gradient-to-r from-transparent via-white/[0.12] to-transparent blur-xl"
                  />

                  <div
                    className="absolute left-6 top-6 z-20"
                    style={{
                      transform: "translateZ(70px)",
                    }}
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.08,
                      }}
                      className="flex items-center gap-3 rounded-full border border-white/15 bg-black/25 px-4 py-2 backdrop-blur-md"
                    >
                      <span className="font-serif text-lg text-[#c9a45c]">
                        {item.number}
                      </span>

                      <span className="h-3 w-px bg-white/20" />

                      <span className="text-[8px] uppercase tracking-[0.25em] text-white/60">
                        Collection
                      </span>
                    </motion.div>
                  </div>

                  <motion.div
                    animate={{
                      y: [0, -5, 0],
                      rotate: [0, 4, 0],
                    }}
                    transition={{
                      duration: 4 + index,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute right-6 top-6 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-[#c9a45c]/30 bg-black/25 text-[#c9a45c] backdrop-blur-md"
                    style={{
                      transform: "translateZ(80px)",
                    }}
                  >
                    <Icon size={19} />
                  </motion.div>

                  <div
                    className="absolute bottom-0 left-0 right-0 z-20 p-7 sm:p-9"
                    style={{
                      transform: "translateZ(80px)",
                    }}
                  >
                    <motion.p
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      className="text-[9px] uppercase tracking-[0.3em] text-[#d8bd7d]"
                    >
                      {item.subtitle}
                    </motion.p>

                    <h3 className="mt-2 font-serif text-5xl text-white sm:text-6xl">
                      {item.title}
                    </h3>

                    <p className="mt-3 max-w-sm text-xs leading-6 text-white/55">
                      {item.description}
                    </p>


                    <motion.div
                      className="mt-6 flex items-center gap-3"
                      whileHover={{
                        x: 5,
                      }}
                    >
                      <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white">
                        Explore Collection
                      </span>

                      <motion.span
                        whileHover={{
                          rotate: 45,
                          scale: 1.15,
                        }}
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-white/25 bg-black/20 text-white backdrop-blur-md transition-colors group-hover:border-[#c9a45c] group-hover:bg-[#c9a45c] group-hover:text-[#171513]"
                      >
                        <ArrowUpRight size={14} />
                      </motion.span>
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{
                      width: "20%",
                    }}
                    whileHover={{
                      width: "70%",
                    }}
                    className="absolute bottom-5 left-7 z-30 h-px bg-gradient-to-r from-[#c9a45c] to-transparent transition-all duration-700"
                  />

                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0,
                    }}
                    whileHover={{
                      opacity: 1,
                      scale: 1,
                    }}
                    className="absolute bottom-8 right-8 z-30"
                  >
                    <Sparkles
                      size={16}
                      className="text-[#c9a45c]"
                    />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

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
          }}
          className="mt-16 flex items-center justify-center gap-4"
        >
          <span className="h-px w-16 bg-white/10" />

          <p className="font-serif text-lg italic text-white/30">
            Find the fragrance that becomes uniquely yours.
          </p>

          <span className="h-px w-16 bg-white/10" />
        </motion.div>
      </div>
    </section>
  );
}