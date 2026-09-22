import { motion } from "framer-motion";
import {Globe,Mail,Phone,MessageCircle,ArrowUpRight,Sparkles,} from "lucide-react";

const socialIcons = [
  {
    icon: Globe,
    label: "Website",
  },
  {
    icon: MessageCircle,
    label: "Social",
  },
  {
    icon: Mail,
    label: "Email",
  },
];

const quickLinks = [
  ["Home", "#home"],
  ["Perfumes", "#perfumes"],
  ["Collections", "#collections"],
  ["About", "#about"],
];

const collections = ["Men", "Women", "Unisex", "Luxury"];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-[#0f0d0b] px-5 py-16 text-white sm:px-8 lg:px-12"
    >

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Gold Glow */}
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, 50, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-[#c9a45c]/10 blur-[130px]"
        />

        <motion.div
          animate={{
            x: [0, -70, 0],
            y: [0, -40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-48 right-[-100px] h-[500px] w-[500px] rounded-full bg-[#c9a45c]/7 blur-[150px]"
        />

        {/* Center glow */}
        <motion.div
          animate={{
            opacity: [0.15, 0.3, 0.15],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c9a45c]/5 blur-[120px]"
        />

        {/* Floating Particles */}
        {[...Array(12)].map((_, index) => (
          <motion.span
            key={index}
            animate={{
              y: [0, -25, 0],
              opacity: [0.1, 0.45, 0.1],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3 + index * 0.35,
              repeat: Infinity,
              delay: index * 0.3,
              ease: "easeInOut",
            }}
            className="absolute h-1 w-1 rounded-full bg-[#c9a45c]"
            style={{
              left: `${5 + ((index * 17) % 90)}%`,
              top: `${10 + ((index * 23) % 80)}%`,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-full">

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="grid gap-12 md:grid-cols-2 lg:grid-cols-4"
        >

          <motion.div variants={itemVariants} className="lg:pr-8">
            {/* Logo */}
            <motion.a
              href="#home"
              whileHover={{ y: -3 }}
              className="group inline-flex items-center gap-3"
            >
              {/* Logo Circle */}
              <motion.div
                whileHover={{
                  rotate: 12,
                  scale: 1.08,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                }}
                className="relative flex h-14 w-14 items-center justify-center rounded-full border border-[#c9a45c]/50 bg-gradient-to-br from-[#211b13] via-[#15120f] to-[#0b0907] shadow-[0_0_30px_rgba(201,164,92,0.08)] transition-all duration-500 group-hover:border-[#c9a45c] group-hover:shadow-[0_0_45px_rgba(201,164,92,0.3)]"
              >
                {/* Rotating Ring */}
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-[-4px] rounded-full border border-dashed border-[#c9a45c]/20"
                />

                <span className="absolute inset-1.5 rounded-full border border-[#c9a45c]/20" />

                <span className="relative z-10 font-serif text-2xl italic text-[#c9a45c]">
                  É
                </span>

                <motion.span
                  animate={{
                    scale: [1, 1.35, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-[#c9a45c] shadow-[0_0_14px_#c9a45c]"
                />
              </motion.div>

              <div>
                <motion.h2
                  whileHover={{
                    letterSpacing: "0.22em",
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                  className="font-serif text-2xl tracking-[0.15em] text-[#f7f3ed] sm:text-3xl"
                >
                  ÉLIXIRÉ
                </motion.h2>

                <p className="mt-1 text-[8px] uppercase tracking-[0.4em] text-[#c9a45c]/70">
                  Fine Fragrance
                </p>
              </div>
            </motion.a>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/45">
              The art of fine fragrance, created for unforgettable moments
              and distinctive identities. Discover scents crafted with
              elegance, passion, and timeless character.
            </p>

            <div className="mt-7 flex gap-3">
              {socialIcons.map(({ icon: Icon, label }, index) => (
                <motion.a
                  key={label}
                  href="#"
                  aria-label={label}
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
                    delay: 0.5 + index * 0.1,
                  }}
                  whileHover={{
                    y: -6,
                    scale: 1.08,
                    rotate: 3,
                  }}
                  whileTap={{
                    scale: 0.92,
                  }}
                  className="group relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/[0.02] text-white/60 transition-all duration-300 hover:border-[#c9a45c] hover:text-[#171513]"
                >
                  {/* Hover Background */}
                  <span className="absolute inset-0 translate-y-full bg-[#c9a45c] transition-transform duration-300 group-hover:translate-y-0" />

                  <Icon
                    size={16}
                    className="relative z-10 transition-transform duration-300 group-hover:scale-110"
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-2">
              <motion.span
                animate={{
                  rotate: [0, 15, -15, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              >
                <Sparkles size={13} className="text-[#c9a45c]" />
              </motion.span>

              <h3 className="text-xs uppercase tracking-[0.25em] text-[#c9a45c]">
                Quick Links
              </h3>
            </div>

            <div className="mt-6 flex flex-col gap-4">
              {quickLinks.map(([name, href], index) => (
                <motion.a
                  key={name}
                  href={href}
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
                    delay: index * 0.08,
                  }}
                  className="group flex items-center justify-between text-sm text-white/45 transition-all duration-300 hover:pl-2 hover:text-white"
                >
                  <span>{name}</span>

                  <ArrowUpRight
                    size={14}
                    className="translate-x-[-6px] opacity-0 text-[#c9a45c] transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-2">
              <motion.span
                animate={{
                  rotate: [0, 15, -15, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: 0.5,
                }}
              >
                <Sparkles size={13} className="text-[#c9a45c]" />
              </motion.span>

              <h3 className="text-xs uppercase tracking-[0.25em] text-[#c9a45c]">
                Collections
              </h3>
            </div>

            <div className="mt-6 flex flex-col gap-4">
              {collections.map((collection, index) => (
                <motion.button
                  key={collection}
                  type="button"
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
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    x: 5,
                  }}
                  className="group flex items-center justify-between text-left text-sm text-white/45 transition-all duration-300 hover:text-white"
                >
                  <span>{collection}</span>

                  <ArrowUpRight
                    size={14}
                    className="translate-x-[-6px] opacity-0 text-[#c9a45c] transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                  />
                </motion.button>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-2">
              <motion.span
                animate={{
                  rotate: [0, 15, -15, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: 1,
                }}
              >
                <Sparkles size={13} className="text-[#c9a45c]" />
              </motion.span>

              <h3 className="text-xs uppercase tracking-[0.25em] text-[#c9a45c]">
                Contact
              </h3>
            </div>

            <div className="mt-6 space-y-5">
              {/* Email */}
              <motion.a
                href="mailto:hello@elixire.com"
                whileHover={{
                  x: 5,
                }}
                className="group flex items-center gap-4"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-[#c9a45c] transition-all duration-300 group-hover:border-[#c9a45c] group-hover:bg-[#c9a45c] group-hover:text-[#171513] group-hover:shadow-[0_0_20px_rgba(201,164,92,0.2)]">
                  <Mail size={16} />
                </span>

                <span className="text-sm text-white/45 transition-colors duration-300 group-hover:text-white">
                  hello@elixire.com
                </span>
              </motion.a>

              {/* Phone */}
              <motion.a
                href="tel:+919876543210"
                whileHover={{
                  x: 5,
                }}
                className="group flex items-center gap-4"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-[#c9a45c] transition-all duration-300 group-hover:border-[#c9a45c] group-hover:bg-[#c9a45c] group-hover:text-[#171513] group-hover:shadow-[0_0_20px_rgba(201,164,92,0.2)]">
                  <Phone size={16} />
                </span>

                <span className="text-sm text-white/45 transition-colors duration-300 group-hover:text-white">
                  +91 98765 43210
                </span>
              </motion.a>

              {/* Support */}
              <motion.div
                whileHover={{
                  x: 5,
                }}
                className="group flex items-center gap-4"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-[#c9a45c] transition-all duration-300 group-hover:border-[#c9a45c] group-hover:bg-[#c9a45c] group-hover:text-[#171513] group-hover:shadow-[0_0_20px_rgba(201,164,92,0.2)]">
                  <MessageCircle size={16} />
                </span>

                <div>
                  <p className="text-sm text-white/70">
                    Customer Support
                  </p>

                  <p className="mt-1 text-xs text-white/30">
                    Mon – Sat · 10AM – 7PM
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{
            scaleX: 0,
            opacity: 0,
          }}
          whileInView={{
            scaleX: 1,
            opacity: 1,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mt-16 h-px origin-center bg-white/10"
        >
          <motion.div
            animate={{
              opacity: [0.4, 1, 0.4],
              scaleX: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-1/2 top-1/2 h-px w-24 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#c9a45c] to-transparent"
          />
        </motion.div>

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
            duration: 0.8,
          }}
          className="mt-7 flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left"
        >
          {/* Copyright */}
          <p className="text-xs tracking-wide text-white/30">
            © {new Date().getFullYear()} ÉLIXIRÉ. All rights reserved.
          </p>

          {/* Center Brand */}
          <motion.div
            whileHover={{
              scale: 1.04,
            }}
            className="hidden items-center gap-2 md:flex"
          >
            <motion.span
              animate={{
                width: ["32px", "48px", "32px"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="h-px bg-[#c9a45c]/30"
            />

            <span className="font-serif text-sm italic tracking-[0.2em] text-[#c9a45c]/70">
              The Art of Fine Fragrance
            </span>

            <motion.span
              animate={{
                width: ["32px", "48px", "32px"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="h-px bg-[#c9a45c]/30"
            />
          </motion.div>

          {/* Legal */}
          <div className="flex gap-5 text-xs text-white/30">
            <button
              type="button"
              className="transition-colors duration-300 hover:text-white"
            >
              Privacy
            </button>

            <button
              type="button"
              className="transition-colors duration-300 hover:text-white"
            >
              Terms
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
          className="mt-12 text-center"
        >
          <p className="text-[9px] uppercase tracking-[0.45em] text-white/15">
            Crafted with elegance · Created for you · ÉLIXIRÉ
          </p>
        </motion.div>
      </div>
    </footer>
  );
}