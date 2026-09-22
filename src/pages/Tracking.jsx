import { ArrowLeft, Check, Package, Truck, MapPin,} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Tracking() {
  const location = useLocation();

  const {
    orderId,
    cart = [],
    total = 0,
  } = location.state || {};

  if (!orderId) {
    return (
      <div className="min-h-screen bg-[#f7f3ed] px-5 py-10">
        <div className="mx-auto flex min-h-[70vh] max-w-full flex-col items-center justify-center text-center">
          <Package size={45} className="text-[#b18a45]" />

          <h1 className="mt-6 font-serif text-4xl text-[#171513]">
            No Order Found
          </h1>

          <p className="mt-3 text-sm text-[#81776d]">
            Your order tracking information is not available.
          </p>

          <Link
            to="/"
            className="mt-7 rounded-full bg-[#171513] px-7 py-4 text-xs uppercase tracking-[0.18em] text-white"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f7f3ed] px-5 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-full">

        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-[#71675d] hover:text-[#b18a45]"
        >
          <ArrowLeft size={15} />
          Continue Shopping
        </Link>

        <div className="mt-12 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[#b18a45]">
            Thank You
          </p>

          <h1 className="mt-3 font-serif text-5xl text-[#171513]">
            Order Confirmed
          </h1>

          <p className="mt-4 text-sm text-[#81776d]">
            Your ÉLIXIRÉ fragrance is being prepared for delivery.
          </p>

          <div className="mt-5 inline-flex rounded-full bg-white px-5 py-3 text-xs">
            Order ID:{" "}
            <span className="ml-2 font-semibold">
              {orderId}
            </span>
          </div>
        </div>

        <div className="mt-12 rounded-3xl bg-white p-7 shadow-sm sm:p-10">

          <h2 className="font-serif text-3xl text-[#171513]">
            Track Your Order
          </h2>

          <div className="mt-10">

            <div className="relative flex justify-between">

              <div className="absolute left-[8%] right-[8%] top-5 h-px bg-[#d8cdbf]" />

              <TrackingStep
                icon={<Check size={18} />}
                title="Confirmed"
                active
              />

              <TrackingStep
                icon={<Package size={18} />}
                title="Processing"
                active
              />

              <TrackingStep
                icon={<Truck size={18} />}
                title="Shipped"
              />

              <TrackingStep
                icon={<MapPin size={18} />}
                title="Delivered"
              />

            </div>

          </div>

        </div>

        <div className="mt-8 rounded-3xl bg-[#171513] p-7 text-white sm:p-9">

          <div className="flex items-center justify-between">
            <h2 className="font-serif text-3xl">
              Order Details
            </h2>

            <p className="text-xl">
              ₹{total.toLocaleString("en-IN")}
            </p>
          </div>

          <div className="mt-7 space-y-4">

            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 border-b border-white/10 pb-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-16 w-14 rounded-lg object-cover"
                />

                <div className="flex-1">
                  <p className="text-sm">
                    {item.name}
                  </p>

                  <p className="mt-1 text-xs text-white/50">
                    Quantity: {item.quantity || 1}
                  </p>
                </div>

                <p className="text-sm">
                  ₹{(
                    item.price * (item.quantity || 1)
                  ).toLocaleString("en-IN")}
                </p>
              </div>
            ))}

          </div>

        </div>

      </div>
    </div>
  );
}

function TrackingStep({
  icon,
  title,
  active = false,
}) {
  return (
    <div className="relative z-10 flex flex-col items-center text-center">

      <div
        className={`flex h-10 w-10 items-center justify-center rounded-full ${
          active
            ? "bg-[#b18a45] text-white"
            : "bg-[#eee8df] text-[#81776d]"
        }`}
      >
        {icon}
      </div>

      <p
        className={`mt-3 text-[10px] uppercase tracking-wider ${
          active
            ? "text-[#171513]"
            : "text-[#81776d]"
        }`}
      >
        {title}
      </p>

    </div>
  );
}