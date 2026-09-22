import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles,Droplets,Flower2,Wind,} from "lucide-react";

function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2600);

    const progressTimer = setInterval(() => {
      setProgress((previous) => {
        if (previous >= 100) {
          clearInterval(progressTimer);
          return 100;
        }

        return previous + 2;
      });
    }, 45);

    return () => {
      clearTimeout(timer);
      clearInterval(progressTimer);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.02,
            transition: {
              duration: 0.7,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
          className="fixed inset-0 z-[9999] flex min-h-screen items-center justify-center overflow-hidden bg-[#11100e]"
        >

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,#302517_0%,#171411_35%,#11100e_70%,#090807_100%)]" />


          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.12, 0.24, 0.12],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c6a15b] blur-[130px] sm:h-[500px] sm:w-[500px]"
          />


          <motion.div
            animate={{
              x: [-30, 30, -30],
              y: [20, -20, 20],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-[15%] top-[20%] h-40 w-40 rounded-full bg-[#d8bb7b]/10 blur-[90px]"
          />

          <motion.div
            animate={{
              x: [30, -30, 30],
              y: [-20, 20, -20],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[15%] right-[15%] h-48 w-48 rounded-full bg-[#b18a45]/10 blur-[100px]"
          />

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-[300px] w-[300px] rounded-full border border-[#c6a15b]/10 sm:h-[430px] sm:w-[430px]"
          />

          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-[390px] w-[390px] rounded-full border border-dashed border-[#c6a15b]/10 sm:h-[560px] sm:w-[560px]"
          />

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-[500px] w-[500px] rounded-full border border-white/[0.025] sm:h-[700px] sm:w-[700px]"
          />

          <motion.span
            animate={{
              y: [-25, 25, -25],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-[16%] top-[28%] h-1 w-1 rounded-full bg-[#c6a15b] shadow-[0_0_12px_#c6a15b]"
          />

          <motion.span
            animate={{
              y: [25, -25, 25],
              opacity: [0.1, 0.7, 0.1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="absolute right-[18%] top-[24%] h-1.5 w-1.5 rounded-full bg-[#d8bb7b]"
          />

          <motion.span
            animate={{
              y: [-20, 20, -20],
              x: [0, 10, 0],
              opacity: [0.15, 0.6, 0.15],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
            }}
            className="absolute bottom-[25%] left-[22%] h-1.5 w-1.5 rounded-full bg-[#c6a15b]"
          />

          <motion.span
            animate={{
              y: [20, -20, 20],
              opacity: [0.15, 0.7, 0.15],
            }}
            transition={{
              duration: 3.8,
              repeat: Infinity,
            }}
            className="absolute bottom-[22%] right-[23%] h-1 w-1 rounded-full bg-[#f1d28b]"
          />

          <div className="relative z-20 flex w-full max-w-md flex-col items-center px-6 text-center">


            <motion.div
              initial={{
                opacity: 0,
                y: -15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              className="mb-8 flex items-center gap-3"
            >
              <span className="h-px w-8 bg-[#c6a15b]/50" />

              <p className="text-[9px] uppercase tracking-[0.45em] text-[#c6a15b]">
                Maison de Parfum
              </p>

              <span className="h-px w-8 bg-[#c6a15b]/50" />
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                y: 35,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative mb-8 h-44 w-32"
            >

              <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c6a15b]/10 blur-3xl" />


              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -inset-5 rounded-full border border-[#c6a15b]/15"
              />


              <div className="absolute left-1/2 top-2 h-7 w-10 -translate-x-1/2 rounded-t-sm border border-[#c6a15b]/40 bg-gradient-to-b from-[#d8bb7b] to-[#8d6932]" />

              <div className="absolute left-1/2 top-8 h-4 w-14 -translate-x-1/2 rounded-sm border border-[#c6a15b]/30 bg-[#c6a15b]/30" />

              <div className="absolute bottom-0 left-1/2 h-32 w-28 -translate-x-1/2 overflow-hidden rounded-[1.2rem] border border-[#d8bb7b]/30 bg-gradient-to-br from-[#d5b56b]/30 via-[#9a753b]/20 to-[#3b2c18]/40 shadow-[0_25px_60px_rgba(198,161,91,0.15)] backdrop-blur-md">


                <div className="absolute left-3 top-3 h-24 w-2 rounded-full bg-white/10 blur-[2px]" />

                <div className="absolute left-1/2 top-1/2 w-[78%] -translate-x-1/2 -translate-y-1/2 border border-[#c6a15b]/30 bg-[#171411]/60 px-2 py-4 backdrop-blur-sm">

                  <p className="font-serif text-[13px] tracking-[0.2em] text-[#e5c984]">
                    ÉLIXIRÉ
                  </p>

                  <div className="mx-auto mt-2 h-px w-8 bg-[#c6a15b]/60" />

                  <p className="mt-2 text-[5px] uppercase tracking-[0.25em] text-white/40">
                    Signature
                  </p>

                </div>
              </div>


              <motion.div
                animate={{
                  x: [-60, 60],
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  repeatDelay: 1,
                  ease: "easeInOut",
                }}
                className="absolute bottom-0 left-1/2 h-32 w-8 -translate-x-1/2 rotate-[20deg] bg-gradient-to-r from-transparent via-white/10 to-transparent blur-sm"
              />
            </motion.div>
            <motion.h1
              initial={{
                opacity: 0,
                letterSpacing: "0.5em",
              }}
              animate={{
                opacity: 1,
                letterSpacing: "0.28em",
              }}
              transition={{
                duration: 1,
                delay: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-serif text-5xl font-medium text-[#f7f3ed] sm:text-6xl"
            >
              ÉLIXIRÉ
            </motion.h1>


            <motion.p
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.7,
                duration: 0.8,
              }}
              className="mt-3 text-[9px] uppercase tracking-[0.42em] text-[#c6a15b]"
            >
              The Art of Fine Fragrance
            </motion.p>

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
                delay: 0.9,
              }}
              className="mt-8 grid grid-cols-3 gap-3"
            >
              <div className="flex flex-col items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
                  <Wind
                    size={13}
                    className="text-[#c6a15b]"
                  />
                </div>

                <span className="text-[7px] uppercase tracking-[0.18em] text-white/35">
                  Citrus
                </span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
                  <Flower2
                    size={13}
                    className="text-[#c6a15b]"
                  />
                </div>

                <span className="text-[7px] uppercase tracking-[0.18em] text-white/35">
                  Floral
                </span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
                  <Droplets
                    size={13}
                    className="text-[#c6a15b]"
                  />
                </div>

                <span className="text-[7px] uppercase tracking-[0.18em] text-white/35">
                  Oud
                </span>
              </div>
            </motion.div>

            <div className="mt-9 w-full max-w-xs">

              <div className="mb-3 flex items-center justify-between">

                <span className="text-[8px] uppercase tracking-[0.3em] text-white/30">
                  Preparing your experience
                </span>

                <span className="text-[8px] text-[#c6a15b]">
                  {progress}%
                </span>

              </div>

              <div className="h-px w-full overflow-hidden bg-white/10">

                <motion.div
                  className="h-full bg-gradient-to-r from-[#8d6932] via-[#c6a15b] to-[#f1d28b]"
                  style={{
                    width: `${progress}%`,
                  }}
                />

              </div>

            </div>


            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="mt-7"
            >
              <Sparkles
                size={16}
                strokeWidth={1}
                className="text-[#c6a15b]"
              />
            </motion.div>

          </div>

          <div className="absolute bottom-7 left-0 right-0 text-center">

            <p className="text-[8px] uppercase tracking-[0.45em] text-white/20">
              EST. 2026 • ÉLIXIRÉ
            </p>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default LoadingScreen;