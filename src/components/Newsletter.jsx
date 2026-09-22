
import {ArrowRight,Mail,Clock,Phone,MessageCircle,User,X,} from "lucide-react";
import { useState } from "react";

export default function Newsletter() {
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you! Your message has been sent.");
    setShowForm(false);
  };

  return (
    <section className="bg-[#e9e1d5] px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-full">
        <div className="grid gap-10 lg:grid-cols-2">

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#9b753b]">
              Contact ÉLIXIRÉ
            </p>

            <h2 className="mt-4 font-serif text-5xl text-[#171513]">
              Let’s Stay Connected.
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-gray-600">
              Have a question about our fragrances, orders, or collections?
              Our team is here to help. Get in touch with us and we’ll be
              happy to assist you.
            </p>

            <div className="mt-8 space-y-5">

              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white">
                  <Mail size={18} className="text-[#9b753b]" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500">
                    Email
                  </p>

                  <a
                    href="mailto:hello@elixire.com"
                    className="text-sm text-[#171513] transition hover:text-[#b18a45]"
                  >
                    hello@elixire.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white">
                  <Phone size={18} className="text-[#9b753b]" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500">
                    Phone
                  </p>

                  <a
                    href="tel:+919876543210"
                    className="text-sm text-[#171513] transition hover:text-[#b18a45]"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white">
                  <Clock size={18} className="text-[#9b753b]" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500">
                    Opening Hours
                  </p>

                  <p className="text-sm text-[#171513]">
                    Monday – Sunday
                  </p>

                  <p className="text-xs text-gray-500">
                    10:00 AM – 8:00 PM
                  </p>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setShowForm(true)}
              className="mt-8 flex items-center gap-2 rounded-full bg-[#171513] px-7 py-4 text-xs uppercase tracking-wider text-white transition hover:bg-[#b18a45]"
            >
              <MessageCircle size={15} />
              Send Message
              <ArrowRight size={15} />
            </button>
          </div>

          <div className="flex flex-col justify-center rounded-3xl bg-white/60 p-8 sm:p-10">
            <p className="text-xs uppercase tracking-[0.3em] text-[#9b753b]">
              Stay In The Scent
            </p>

            <h3 className="mt-4 font-serif text-4xl text-[#171513]">
              Enter the world of ÉLIXIRÉ.
            </h3>

            <p className="mt-4 text-sm leading-7 text-gray-600">
              Subscribe for new fragrance launches, private offers and
              exclusive stories from our house.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-8 flex flex-col gap-3"
            >
              <input
                type="email"
                placeholder="Your email address"
                required
                className="w-full rounded-full border border-black/10 bg-white px-6 py-4 text-sm outline-none transition focus:border-[#b18a45]"
              />

              <button
                type="submit"
                className="flex items-center justify-center gap-2 rounded-full bg-[#171513] px-7 py-4 text-xs uppercase tracking-wider text-white transition hover:bg-[#b18a45]"
              >
                Subscribe
                <ArrowRight size={15} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {showForm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 px-5 backdrop-blur-sm">
          <div className="relative w-full max-w-lg rounded-3xl bg-[#f8f5ef] p-7 shadow-2xl sm:p-10">

            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-600 transition hover:bg-[#171513] hover:text-white"
            >
              <X size={18} />
            </button>

            <p className="text-xs uppercase tracking-[0.3em] text-[#9b753b]">
              Get In Touch
            </p>

            <h3 className="mt-3 font-serif text-4xl text-[#171513]">
              Send Us a Message
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              Fill out the form below and our team will get back to you.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-7 space-y-4"
            >
              <div className="relative">
                <User
                  size={17}
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-[#9b753b]"
                />

                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full rounded-2xl border border-black/10 bg-white py-4 pl-12 pr-5 text-sm outline-none transition focus:border-[#b18a45]"
                />
              </div>

              <div className="relative">
                <Mail
                  size={17}
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-[#9b753b]"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="w-full rounded-2xl border border-black/10 bg-white py-4 pl-12 pr-5 text-sm outline-none transition focus:border-[#b18a45]"
                />
              </div>

              <textarea
                placeholder="Your Message"
                rows="5"
                required
                className="w-full resize-none rounded-2xl border border-black/10 bg-white px-5 py-4 text-sm outline-none transition focus:border-[#b18a45]"
              />

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#171513] px-7 py-4 text-xs uppercase tracking-wider text-white transition hover:bg-[#b18a45]"
              >
                Send Message
                <ArrowRight size={15} />
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
