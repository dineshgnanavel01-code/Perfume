import { User, Package, Heart, MapPin, LogOut, ChevronRight,} from "lucide-react";
import {motion} from "framer-motion";
import { Link } from "react-router-dom";

const menuItems = [
  {
    icon: Package,
    title: "My Orders",
    description: "View your recent purchases",
  },
  {
    icon: Heart,
    title: "Wishlist",
    description: "Your favorite fragrances",
  },
  {
    icon: MapPin,
    title: "Addresses",
    description: "Manage your delivery addresses",
  },
];

export default function Profile() {
  return (
    <div className="min-h-screen bg-[#f7f3ed] px-5 py-10 sm:px-8 lg:px-12">

      <div className="mx-auto max-w-full">
        <Link
          to="/"
          className="text-xs uppercase tracking-[0.18em] text-[#8b8176] hover:text-[#b18a45]"
        >
          ← Back to ÉLIXIRÉ
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-12 text-center"
        >
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#171513] text-white shadow-xl">
            <User size={30} strokeWidth={1.5} />
          </div>

          <p className="mt-6 text-xs uppercase tracking-[0.25em] text-[#b18a45]">
            Welcome back
          </p>

          <h1 className="mt-2 font-serif text-5xl">
            My Profile
          </h1>

          <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-[#8b8176]">
            Manage your ÉLIXIRÉ account, orders,
            wishlist and personal details.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mx-auto mt-12 max-w-3xl rounded-[30px] border border-black/10 bg-white p-6 shadow-[0_20px_70px_rgba(23,21,19,0.08)] sm:p-8" >

          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">

            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f1e8d8] font-serif text-2xl text-[#b18a45]">
              D
            </div>

            <div className="flex-1">
              <p className="font-serif text-2xl">
                Dinesh
              </p>

              <p className="mt-1 text-sm text-[#8b8176]">
                Welcome to your fragrance collection.
              </p>
            </div>

            <button className="rounded-full border border-black/10 px-5 py-3 text-xs uppercase tracking-widest hover:border-[#b18a45] hover:text-[#b18a45]">
              Edit Profile
            </button>

          </div>

        </motion.div>

        <div className="mx-auto mt-6 grid max-w-full gap-4">

          {menuItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: 0.15 + index * 0.08,
                }}
                className="group flex cursor-pointer items-center gap-4 rounded-2xl border border-black/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f7f3ed] text-[#b18a45]">
                  <Icon size={20} />
                </div>

                <div className="flex-1">
                  <h3 className="font-serif text-xl">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-xs text-[#8b8176]">
                    {item.description}
                  </p>
                </div>

                <ChevronRight
                  size={18}
                  className="text-[#8b8176] transition group-hover:translate-x-1 group-hover:text-[#b18a45]"
                />

              </motion.div>
            );
          })}

        </div>

        <div className="mx-auto mt-6 max-w-3xl">
          <button className="flex w-full items-center justify-center gap-2 rounded-2xl border border-red-200 bg-white py-4 text-xs uppercase tracking-widest text-red-500 transition hover:bg-red-50">
            <LogOut size={16} />
            Logout
          </button>
        </div>

      </div>
    </div>
  );
}