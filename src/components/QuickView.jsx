import { motion, AnimatePresence } from "framer-motion";
import { X, Star, ShoppingBag } from "lucide-react";

export default function QuickView({
  perfume,
  onClose,
  onAddToCart,
}) {
  return (
    <AnimatePresence>
      {perfume && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
            className="relative grid max-h-[90vh] w-full max-w-full overflow-auto rounded-3xl bg-[#f7f3ed] md:grid-cols-2"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-10 rounded-full bg-white p-3"
            >
              <X size={18} />
            </button>

            <img
              src={perfume.image}
              alt={perfume.name}
              className="h-[400px] w-full object-cover md:h-full"
            />

            <div className="flex flex-col justify-center p-7 sm:p-10">
              <p className="text-xs uppercase tracking-[0.25em] text-[#b18a45]">
                {perfume.category}
              </p>

              <h2 className="mt-3 font-serif text-5xl">
                {perfume.name}
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                {perfume.type}
              </p>

              <div className="mt-5 flex items-center gap-2 text-sm">
                <Star
                  size={16}
                  className="fill-[#c9a45c] text-[#c9a45c]"
                />
                {perfume.rating} · {perfume.reviews} reviews
              </div>

              <p className="mt-6 text-sm leading-7 text-gray-600">
                An elegant composition designed to leave an
                unforgettable impression. Discover layers of carefully
                selected fragrance notes blended into a timeless
                signature.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {perfume.notes.map((note) => (
                  <span
                    key={note}
                    className="rounded-full bg-white px-4 py-2 text-xs"
                  >
                    {note}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex items-center justify-between">
                <span className="font-serif text-3xl">
                  ₹{perfume.price.toLocaleString("en-IN")}
                </span>

                <button
                  onClick={() => {
                    onAddToCart(perfume);
                    onClose();
                  }}
                  className="flex items-center gap-2 rounded-full bg-[#171513] px-6 py-3 text-xs uppercase tracking-wider text-white hover:bg-[#b18a45]"
                >
                  <ShoppingBag size={16} />
                  Add to Cart
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}