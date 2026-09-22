import { ArrowLeft, ArrowRight, Minus, Plus, ShoppingBag, Trash2, Sparkles, ShieldCheck, Truck,} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Cart({
  cart = [],
  updateQuantity,
  removeFromCart,
}) {
  const navigate = useNavigate();

  const subtotal = cart.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  const tax = Math.round(subtotal * 0.18);

  const shipping =
    subtotal >= 5000 || subtotal === 0 ? 0 : 199;

  const total = subtotal + tax + shipping;

  if (cart.length === 0) {
    return (
      <div className="relative min-h-screen overflow-hidden bg-[#f7f3ed] px-5 py-10 sm:px-8 lg:px-12">
        <div className="relative mx-auto flex min-h-[85vh] max-w-full flex-col items-center justify-center text-center">
          <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-[#b18a45]/20 bg-white shadow-[0_25px_60px_rgba(23,21,19,0.12)]">
            <ShoppingBag size={32} className="text-[#b18a45]" />
            <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-[#c9a45c]" />
          </div>

          <p className="mt-10 text-[10px] uppercase tracking-[0.35em] text-[#b18a45]">
            Your ÉLIXIRÉ Collection
          </p>

          <h1 className="mt-4 font-serif text-5xl text-[#171513] sm:text-6xl">
            Your Bag is Empty
          </h1>

          <p className="mt-5 max-w-md text-sm leading-7 text-[#81776d]">
            Discover your next signature fragrance and add
            something unforgettable to your ÉLIXIRÉ collection.
          </p>

          <div>
            <button
              onClick={() => navigate("/")}
              className="group mt-9 inline-flex items-center gap-3 rounded-full bg-[#171513] px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#b18a45] cursor-pointer"
            >
              Explore Perfumes

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-transform group-hover:translate-x-1">
                <ArrowRight size={15} />
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f7f3ed] px-5 py-8 sm:px-8 lg:px-12 lg:py-12">
      <div className="relative mx-auto max-w-full">
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="group inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.18em] text-[#71675d] transition hover:text-[#b18a45] bg-transparent border-none cursor-pointer"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-black/10 transition group-hover:border-[#b18a45]">
              <ArrowLeft
                size={14}
                className="transition-transform group-hover:-translate-x-1"
              />
            </span>
            Continue Shopping
          </button>

          <div className="hidden items-center gap-2 sm:flex">
            <Sparkles size={13} className="text-[#b18a45]" />
            <span className="font-serif text-2xl tracking-[0.18em] text-[#171513]">
              ÉLIXIRÉ
            </span>
          </div>
        </div>

        <div className="mt-12">
          <div className="flex items-center gap-3">
            <span className="h-px w-9 bg-[#b18a45]" />
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#b18a45]">
              Your Selection
            </p>
          </div>

          <div className="mt-3 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <h1 className="font-serif text-5xl text-[#171513] sm:text-6xl">
              Shopping Bag
            </h1>
            <p className="text-xs text-[#81776d]">
              {cart.length}{" "}
              {cart.length === 1 ? "fragrance" : "fragrances"} selected
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_380px]">
          <div className="space-y-5">
            {cart.map((item) => {
              const quantity = item.quantity || 1;
              const itemTotal = item.price * quantity;

              return (
                <div key={item.id} className="relative">
                  <div className="relative overflow-hidden rounded-[1.5rem] border border-black/[0.04] bg-white p-4 shadow-[0_20px_50px_rgba(23,21,19,0.07)] sm:p-5">
                    <div className="flex gap-4 sm:gap-5">
                      <div className="relative h-32 w-24 shrink-0 overflow-hidden rounded-xl bg-[#eee8de] sm:h-36 sm:w-28">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                        <div className="absolute bottom-2 left-2 rounded-full bg-black/50 px-2 py-1 text-[7px] uppercase tracking-[0.15em] text-white backdrop-blur-md">
                          ÉLIXIRÉ
                        </div>
                      </div>

                      <div className="flex min-w-0 flex-1 flex-col justify-between">
                        <div>
                          <p className="text-[9px] uppercase tracking-[0.22em] text-[#b18a45]">
                            {item.category}
                          </p>
                          <h2 className="mt-1 font-serif text-2xl text-[#171513] sm:text-3xl">
                            {item.name}
                          </h2>
                          <p className="mt-1 text-xs text-[#81776d]">
                            {item.type}
                          </p>
                        </div>

                        <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                          <div className="flex items-center rounded-full border border-black/10 bg-[#f7f3ed]">
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.id,
                                  Math.max(1, quantity - 1)
                                )
                              }
                              className="flex h-9 w-9 items-center justify-center text-[#6f675f] transition hover:text-[#b18a45]"
                              aria-label="Decrease quantity"
                            >
                              <Minus size={13} />
                            </button>

                            <span className="min-w-7 text-center text-xs font-medium">
                              {quantity}
                            </span>

                            <button
                              onClick={() =>
                                updateQuantity(item.id, quantity + 1)
                              }
                              className="flex h-9 w-9 items-center justify-center text-[#6f675f] transition hover:text-[#b18a45]"
                              aria-label="Increase quantity"
                            >
                              <Plus size={13} />
                            </button>
                          </div>

                          <p className="font-medium text-[#171513]">
                            ₹{itemTotal.toLocaleString("en-IN")}
                          </p>

                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="flex h-9 w-9 items-center justify-center rounded-full text-[#81776d] transition hover:bg-red-50 hover:text-red-500 cursor-pointer"
                            aria-label={`Remove ${item.name}`}
                          >
                            <Trash2 size={15} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="relative h-fit">
            <div className="relative overflow-hidden rounded-[2rem] bg-[#171513] p-7 text-white shadow-[0_30px_80px_rgba(23,21,19,0.3)] sm:p-8">
              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <h2 className="font-serif text-3xl">Order Summary</h2>
                  <Sparkles size={18} className="text-[#c9a45c]" />
                </div>

                <p className="mt-2 text-[10px] uppercase tracking-[0.22em] text-white/35">
                  Your fragrance selection
                </p>

                <div className="mt-8 space-y-5 text-sm">
                  <div className="flex justify-between text-white/60">
                    <span>Subtotal</span>
                    <span>₹{subtotal.toLocaleString("en-IN")}</span>
                  </div>

                  <div className="flex justify-between text-white/60">
                    <span>Estimated GST (18%)</span>
                    <span>₹{tax.toLocaleString("en-IN")}</span>
                  </div>

                  <div className="flex justify-between text-white/60">
                    <span>Shipping</span>
                    <span className={shipping === 0 ? "text-[#c9a45c]" : ""}>
                      {shipping === 0
                        ? "FREE"
                        : `₹${shipping.toLocaleString("en-IN")}`}
                    </span>
                  </div>

                  {shipping > 0 && (
                    <p className="text-[10px] leading-5 text-white/30">
                      Add ₹{(5000 - subtotal).toLocaleString("en-IN")} more to
                      unlock free shipping.
                    </p>
                  )}

                  <div className="border-t border-white/10 pt-5">
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-[9px] uppercase tracking-[0.2em] text-white/35">
                          Total
                        </p>
                        <p className="mt-1 font-serif text-3xl">
                          ₹{total.toLocaleString("en-IN")}
                        </p>
                      </div>

                      <span className="text-[9px] uppercase tracking-[0.15em] text-[#c9a45c]">
                        INR
                      </span>
                    </div>
                  </div>
                </div>

                {/* Payment Button */}
                <button
                  onClick={() =>
                    navigate("/payment", {
                      state: {
                        cart,
                        subtotal,
                        tax,
                        shipping,
                        total,
                      },
                    })
                  }
                  className="group mt-8 flex w-full items-center justify-center gap-3 rounded-full bg-[#c9a45c] py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#171513] shadow-[0_15px_40px_rgba(201,164,92,0.18)] transition-all hover:bg-[#e0c98e] cursor-pointer"
                >
                  Proceed to Payment
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black/10 transition-transform group-hover:translate-x-1">
                    <ArrowRight size={14} />
                  </span>
                </button>

                <div className="mt-7 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">
                    <ShieldCheck size={16} className="text-[#c9a45c]" />
                    <p className="mt-2 text-[8px] uppercase tracking-[0.15em] text-white/40">
                      Secure Checkout
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">
                    <Truck size={16} className="text-[#c9a45c]" />
                    <p className="mt-2 text-[8px] uppercase tracking-[0.15em] text-white/40">
                      Fast Delivery
                    </p>
                  </div>
                </div>

                <div className="mt-7 text-center">
                  <p className="font-serif text-base italic text-white/25">
                    The Art of Fine Fragrance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}