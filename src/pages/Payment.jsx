import { useState } from "react";
import {ArrowLeft,CreditCard, Lock,MapPin,ShieldCheck,} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Payment() {
  const location = useLocation();
  const navigate = useNavigate();

  const order = location.state || {};

  const [paymentMethod, setPaymentMethod] = useState("card");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    card: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const orderId = `ELX${Date.now().toString().slice(-8)}`;

    navigate("/tracking", {
      state: {
        orderId,
        total: order.total || 0,
        customerName: form.name,
      },
    });
  };

  return (
    <div className="min-h-screen bg-[#f7f3ed] px-5 py-10 sm:px-8 lg:px-12">

      <div className="mx-auto max-w-full">

        <div className="flex items-center justify-between">
          <Link
            to="/cart"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-[#71675d] hover:text-[#b18a45]"
          >
            <ArrowLeft size={15} />
            Back to Bag
          </Link>

          <div className="font-serif text-2xl tracking-[0.18em]">
            ÉLIXIRÉ
          </div>
        </div>

        <div className="mt-12">
          <p className="text-xs uppercase tracking-[0.3em] text-[#b18a45]">
            Secure Checkout
          </p>

          <h1 className="mt-3 font-serif text-5xl text-[#171513]">
            Complete Your Order
          </h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-10 grid gap-8 lg:grid-cols-[1fr_380px]"
        >

          <div className="space-y-6">

            <section className="rounded-3xl bg-white p-7 shadow-sm sm:p-9">

              <h2 className="font-serif text-3xl">
                Contact Information
              </h2>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">

                <input
                  name="name"
                  required
                  placeholder="Full Name"
                  value={form.name}
                  onChange={handleChange}
                  className="rounded-xl border border-black/10 bg-[#faf8f4] px-4 py-3.5 text-sm outline-none focus:border-[#b18a45]"
                />

                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email Address"
                  value={form.email}
                  onChange={handleChange}
                  className="rounded-xl border border-black/10 bg-[#faf8f4] px-4 py-3.5 text-sm outline-none focus:border-[#b18a45]"
                />

                <input
                  name="phone"
                  required
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                  className="rounded-xl border border-black/10 bg-[#faf8f4] px-4 py-3.5 text-sm outline-none focus:border-[#b18a45] sm:col-span-2"
                />

              </div>
            </section>

            <section className="rounded-3xl bg-white p-7 shadow-sm sm:p-9">

              <div className="flex items-center gap-3">
                <MapPin size={20} className="text-[#b18a45]" />

                <h2 className="font-serif text-3xl">
                  Delivery Address
                </h2>
              </div>

              <div className="mt-6 space-y-4">

                <textarea
                  name="address"
                  required
                  rows="3"
                  placeholder="Street address"
                  value={form.address}
                  onChange={handleChange}
                  className="w-full resize-none rounded-xl border border-black/10 bg-[#faf8f4] px-4 py-3.5 text-sm outline-none focus:border-[#b18a45]"
                />

                <div className="grid gap-4 sm:grid-cols-2">

                  <input
                    name="city"
                    required
                    placeholder="City"
                    value={form.city}
                    onChange={handleChange}
                    className="rounded-xl border border-black/10 bg-[#faf8f4] px-4 py-3.5 text-sm outline-none focus:border-[#b18a45]"
                  />

                  <input
                    name="pincode"
                    required
                    placeholder="PIN Code"
                    value={form.pincode}
                    onChange={handleChange}
                    className="rounded-xl border border-black/10 bg-[#faf8f4] px-4 py-3.5 text-sm outline-none focus:border-[#b18a45]"
                  />

                </div>

              </div>
            </section>

            <section className="rounded-3xl bg-white p-7 shadow-sm sm:p-9">

              <div className="flex items-center gap-3">
                <CreditCard size={20} className="text-[#b18a45]" />

                <h2 className="font-serif text-3xl">
                  Payment Method
                </h2>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">

                {[
                  ["card", "Card"],
                  ["upi", "UPI"],
                  ["cod", "Cash"],
                ].map(([value, label]) => (
                  <button
                    type="button"
                    key={value}
                    onClick={() => setPaymentMethod(value)}
                    className={`rounded-xl border px-3 py-3 text-xs transition ${
                      paymentMethod === value
                        ? "border-[#b18a45] bg-[#b18a45]/10 text-[#171513]"
                        : "border-black/10 text-[#81776d]"
                    }`}
                  >
                    {label}
                  </button>
                ))}

              </div>

              {paymentMethod === "card" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-6 space-y-4"
                >
                  <input
                    name="card"
                    required
                    placeholder="Card Number"
                    value={form.card}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-black/10 bg-[#faf8f4] px-4 py-3.5 text-sm outline-none focus:border-[#b18a45]"
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <input
                      name="expiry"
                      required
                      placeholder="MM / YY"
                      value={form.expiry}
                      onChange={handleChange}
                      className="rounded-xl border border-black/10 bg-[#faf8f4] px-4 py-3.5 text-sm outline-none focus:border-[#b18a45]"
                    />

                    <input
                      name="cvv"
                      required
                      placeholder="CVV"
                      value={form.cvv}
                      onChange={handleChange}
                      className="rounded-xl border border-black/10 bg-[#faf8f4] px-4 py-3.5 text-sm outline-none focus:border-[#b18a45]"
                    />
                  </div>
                </motion.div>
              )}

              {paymentMethod === "upi" && (
                <div className="mt-6">
                  <input
                    required
                    placeholder="yourname@upi"
                    className="w-full rounded-xl border border-black/10 bg-[#faf8f4] px-4 py-3.5 text-sm outline-none focus:border-[#b18a45]"
                  />
                </div>
              )}

              {paymentMethod === "cod" && (
                <p className="mt-6 rounded-xl bg-[#f7f3ed] p-4 text-sm text-[#71675d]">
                  Pay when your ÉLIXIRÉ fragrance is delivered.
                </p>
              )}

            </section>
          </div>

          <div className="h-fit rounded-3xl bg-[#171513] p-7 text-white sm:p-8">

            <h2 className="font-serif text-3xl">
              Order Summary
            </h2>

            <div className="mt-7 space-y-4">

              <div className="flex justify-between text-sm text-white/60">
                <span>Subtotal</span>
                <span>
                  ₹{(order.subtotal || 0).toLocaleString("en-IN")}
                </span>
              </div>

              <div className="flex justify-between text-sm text-white/60">
                <span>Shipping</span>
                <span>
                  {order.shipping === 0
                    ? "FREE"
                    : `₹${(order.shipping || 0).toLocaleString("en-IN")}`}
                </span>
              </div>

              <div className="border-t border-white/10 pt-5">
                <div className="flex justify-between">
                  <span>Total</span>
                  <span className="text-2xl">
                    ₹{(order.total || 0).toLocaleString("en-IN")}
                  </span>
                </div>
              </div>

            </div>

            <button
              type="submit"
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-[#c9a45c] py-4 text-xs uppercase tracking-[0.18em] text-[#171513] transition hover:bg-white"
            >
              <Lock size={15} />
              Place Order
            </button>

            <div className="mt-5 flex items-center justify-center gap-2 text-xs text-white/40">
              <ShieldCheck size={15} />
              Secure checkout
            </div>

          </div>
        </form>
      </div>
    </div>
  );
}