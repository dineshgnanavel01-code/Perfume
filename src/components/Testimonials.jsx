import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sophia Williams",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
    text: "The fragrance feels incredibly elegant and lasts beautifully throughout the day.",
  },
  {
    name: "Daniel Morgan",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    text: "Beautiful packaging, sophisticated fragrance and an exceptional experience.",
  },
  {
    name: "Emily Carter",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=300&q=80",
    text: "A beautiful perfume experience from the first spray to the final note.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#f7f3ed] px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-full">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[#b18a45]">
            Client Stories
          </p>

          <h2 className="mt-3 font-serif text-5xl sm:text-6xl">
            Loved by fragrance lovers.
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-3xl bg-white p-7"
            >
              <div className="flex gap-1 text-[#c9a45c]">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={14}
                    className="fill-current"
                  />
                ))}
              </div>

              <p className="mt-6 font-serif text-xl leading-8">
                “{review.text}”
              </p>

              <div className="mt-7 flex items-center gap-3">
                <img
                  src={review.image}
                  alt={review.name}
                  className="h-11 w-11 rounded-full object-cover"
                />

                <div>
                  <p className="text-sm font-medium">
                    {review.name}
                  </p>
                  <p className="text-xs text-gray-400">
                    Verified Customer
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}