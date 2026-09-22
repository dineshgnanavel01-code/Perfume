import { useState } from "react";
import { Heart, Eye, ShoppingBag, Star, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { perfumes } from "../data/perfumes";
import QuickView from "./QuickView";

const categories = [
  {
    name: "Men",
    subtitle: "Bold & Refined",
    description: "Powerful compositions crafted for modern gentlemen.",
    image:
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1000&q=90",
  },
  {
    name: "Women",
    subtitle: "Elegant & Feminine",
    description: "Delicate floral creations with timeless elegance.",
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1000&q=90",
  },
  {
    name: "Unisex",
    subtitle: "Effortlessly Unique",
    description: "Contemporary scents designed beyond boundaries.",
    image:
      "https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=1000&q=90",
  },
  {
    name: "Luxury",
    subtitle: "The Maison Collection",
    description: "Rare notes and exceptional fragrance craftsmanship.",
    image:
      "https://images.unsplash.com/photo-1563170351-be82bc888aa4?auto=format&fit=crop&w=1000&q=90",
  },
];

export default function FeaturedPerfumes({ onAddToCart }) {
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState(null);
  const [wishlist, setWishlist] = useState([]);

  const filtered =
    category === "All"
      ? perfumes
      : perfumes.filter((item) => item.category === category);

  const toggleWishlist = (id) => {
    setWishlist((items) =>
      items.includes(id)
        ? items.filter((item) => item !== id)
        : [...items, id]
    );
  };

  return (
    <section
      id="perfumes"
      className="relative overflow-hidden bg-[#f7f3ed] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.04, 0.1, 0.04],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-40 top-40 h-[500px] w-[500px] rounded-full bg-[#c9a45c] blur-[150px]"
      />

      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.03, 0.08, 0.03],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-40 bottom-40 h-[500px] w-[500px] rounded-full bg-[#b18a45] blur-[150px]"
      />

      <div className="relative mx-auto max-w-full">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#b18a45]" />

            <p className="text-[10px] uppercase tracking-[0.35em] text-[#b18a45]">
              The Collection
            </p>

            <Sparkles
              size={13}
              className="text-[#b18a45]"
            />
          </div>

          <div className="mt-4 flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            <div>
              <h2 className="max-w-full font-serif text-5xl leading-[0.95] text-[#171513] sm:text-6xl lg:text-7xl">
                Discover your{" "}
                <span className="italic text-[#b18a45]">
                  signature scent.
                </span>
              </h2>

              <p className="mt-5 max-w-full text-sm leading-7 text-[#8b8176]">
                Explore our curated fragrance collections, created for
                unforgettable moments and distinctive personalities.
              </p>
            </div>

            <motion.button
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setCategory("All")}
              className={`rounded-full border px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] transition-all ${
                category === "All"
                  ? "border-[#171513] bg-[#171513] text-white shadow-xl"
                  : "border-black/10 bg-white text-[#6f675f] hover:border-[#b18a45] hover:text-[#b18a45]"
              }`}
            >
              View All Fragrances
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.9,
            delay: 0.15,
          }}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          style={{ perspective: "1400px" }}
        >
          {categories.map((item, index) => {
            const active = category === item.name;

            return (
              <motion.button
                key={item.name}
                onClick={() => setCategory(item.name)}
                initial={{
                  opacity: 0,
                  y: 40,
                  rotateX: 8,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.7,
                }}
                whileHover={{
                  y: -12,
                  rotateX: -4,
                  rotateY: 5,
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className={`group relative h-[310px] overflow-hidden rounded-[1.7rem] text-left shadow-[0_20px_50px_rgba(23,21,19,0.12)] transition-all duration-500 ${
                  active
                    ? "ring-2 ring-[#c9a45c] ring-offset-4 ring-offset-[#f7f3ed]"
                    : ""
                }`}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <motion.img
                  src={item.image}
                  alt={item.name}
                  whileHover={{
                    scale: 1.1,
                  }}
                  transition={{
                    duration: 1,
                    ease: "easeOut",
                  }}
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/5" />

                <motion.div
                  animate={{
                    opacity: active ? [0.1, 0.25, 0.1] : 0,
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                  className="absolute inset-0 bg-[#c9a45c]/20 blur-2xl"
                />

                <motion.div
                  animate={{
                    x: ["-130%", "130%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatDelay: 4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-y-0 w-1/3 -skew-x-[20deg] bg-gradient-to-r from-transparent via-white/15 to-transparent blur-xl"
                />

                <div
                  className="absolute left-5 top-5"
                  style={{
                    transform: "translateZ(40px)",
                  }}
                >
                  <span className="rounded-full border border-white/20 bg-black/20 px-3 py-1.5 text-[8px] uppercase tracking-[0.25em] text-white/80 backdrop-blur-md">
                    {item.subtitle}
                  </span>
                </div>

                <AnimatePresence>
                  {active && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        scale: 0,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0,
                      }}
                      className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#c9a45c] text-[#171513] shadow-lg"
                    >
                      <Sparkles size={14} />
                    </motion.div>
                  )}
                </AnimatePresence>

                <div
                  className="absolute bottom-0 left-0 right-0 p-6"
                  style={{
                    transform: "translateZ(60px)",
                  }}
                >
                  <p className="text-[9px] uppercase tracking-[0.25em] text-[#d9bd7d]">
                    Collection
                  </p>

                  <h3 className="mt-1 font-serif text-4xl text-white">
                    {item.name}
                  </h3>

                  <p className="mt-2 max-w-full text-[11px] leading-5 text-white/60">
                    {item.description}
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-white">
                    Explore Collection
                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/30 transition-all group-hover:border-[#c9a45c] group-hover:bg-[#c9a45c] group-hover:text-[#171513]">
                      →
                    </span>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </motion.div>

        <motion.div
          layout
          className="mt-20 mb-8 flex flex-col justify-between gap-4 border-b border-black/10 pb-5 sm:flex-row sm:items-end"
        >
          <div>
            <p className="text-[9px] uppercase tracking-[0.3em] text-[#b18a45]">
              {category === "All"
                ? "All Fragrances"
                : `${category} Collection`}
            </p>

            <h3 className="mt-1 font-serif text-3xl text-[#171513] sm:text-4xl">
              {category === "All"
                ? "Our Signature Fragrances"
                : `The ${category} Edit`}
            </h3>
          </div>

          <p className="text-xs text-[#8b8176]">
            {filtered.length}{" "}
            {filtered.length === 1 ? "fragrance" : "fragrances"}
          </p>
        </motion.div>

        <motion.div
          layout
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          style={{ perspective: "1600px" }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((perfume, index) => (
              <motion.article
                layout
                key={perfume.id}
                initial={{
                  opacity: 0,
                  y: 35,
                  scale: 0.96,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                whileHover={{
                  y: -10,
                  rotateX: -2,
                  rotateY: 2,
                  scale: 1.015,
                }}
                className="group relative overflow-hidden rounded-[1.5rem] bg-white shadow-[0_15px_40px_rgba(23,21,19,0.06)]"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="relative overflow-hidden bg-[#eee8de]">
                  <motion.img
                    src={perfume.image}
                    alt={perfume.name}
                    whileHover={{
                      scale: 1.1,
                    }}
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                    }}
                    className="h-[370px] w-full object-cover"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <motion.button
                    whileHover={{
                      scale: 1.12,
                      rotate: 5,
                    }}
                    whileTap={{
                      scale: 0.9,
                    }}
                    onClick={() => toggleWishlist(perfume.id)}
                    className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur-md"
                  >
                    <Heart
                      size={18}
                      className={
                        wishlist.includes(perfume.id)
                          ? "fill-[#b18a45] text-[#b18a45]"
                          : "text-[#171513]"
                      }
                    />
                  </motion.button>

                  <motion.button
                    onClick={() => setSelected(perfume)}
                    initial={{
                      y: 50,
                      opacity: 0,
                    }}
                    whileHover={{
                      backgroundColor: "#b18a45",
                    }}
                    className="absolute bottom-4 left-4 right-4 flex translate-y-4 items-center justify-center gap-2 rounded-full bg-white/95 py-3.5 text-[10px] font-semibold uppercase tracking-[0.2em] opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    <Eye size={15} />
                    Quick View
                  </motion.button>

                  <div className="absolute left-4 top-4 rounded-full bg-[#171513]/80 px-3 py-1.5 text-[8px] uppercase tracking-[0.2em] text-white backdrop-blur-md">
                    {perfume.category}
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-[9px] uppercase tracking-[0.25em] text-[#b18a45]">
                    {perfume.category}
                  </p>

                  <h3 className="mt-2 font-serif text-2xl text-[#171513]">
                    {perfume.name}
                  </h3>

                  <p className="mt-1 text-xs text-[#8b8176]">
                    {perfume.type}
                  </p>

                  <div className="mt-4 flex items-center gap-1 text-xs text-[#171513]">
                    <Star
                      size={14}
                      className="fill-[#c9a45c] text-[#c9a45c]"
                    />

                    <span>{perfume.rating}</span>

                    <span className="text-[#aaa19a]">
                      ({perfume.reviews})
                    </span>
                  </div>

                  <div className="mt-5 flex items-center justify-between gap-3">
                    <span className="font-serif text-2xl text-[#171513]">
                      ₹{perfume.price.toLocaleString("en-IN")}
                    </span>

                    <motion.button
                      whileHover={{
                        scale: 1.05,
                        y: -2,
                      }}
                      whileTap={{
                        scale: 0.95,
                      }}
                      onClick={() => onAddToCart(perfume)}
                      className="flex items-center gap-2 rounded-full bg-[#171513] px-4 py-3 text-[10px] font-medium uppercase tracking-wider text-white shadow-lg transition hover:bg-[#b18a45]"
                    >
                      <ShoppingBag size={15} />
                      Add
                    </motion.button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <QuickView
        perfume={selected}
        onClose={() => setSelected(null)}
        onAddToCart={onAddToCart}
      />
    </section>
  );
}